import { createServer } from 'node:http';
import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, extname, sep, relative } from 'node:path';

const root = resolve('build');
const routes = new Map([
	['/', 'Chris'],
	['/projects', 'Projects'],
	['/apps', 'Apps'],
	['/about', 'About me'],
	['/contact', 'Say hello.'],
	['/books', 'Books moved to Bookshelf.'],
	['/bookshelf', 'Bookshelf'],
	['/sidequest', 'Not sure what to do today?'],
	['/projects/sidequest', 'SideQuest'],
	['/projects/password-manager', 'Password Manager'],
	['/projects/workout-journal', 'Workout Journal'],
	['/projects/notes-app', 'Notes App'],
	['/projects/rocky', 'Rocky'],
	['/projects/towtruck-alert', 'TowTruck Alert'],
	['/projects/onetask-cli', 'OneTask CLI']
]);
const mime = {
	'.html': 'text/html; charset=utf-8',
	'.js': 'text/javascript',
	'.css': 'text/css',
	'.json': 'application/json',
	'.txt': 'text/plain',
	'.svg': 'image/svg+xml',
	'.webp': 'image/webp',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.gif': 'image/gif'
};
async function filesUnder(directory) {
	const entries = await readdir(directory, { withFileTypes: true });
	const files = await Promise.all(
		entries
			.filter((entry) => !entry.name.startsWith('.'))
			.map((entry) => {
				const path = resolve(directory, entry.name);
				return entry.isDirectory() ? filesUnder(path) : path;
			})
	);
	return files.flat();
}
const server = createServer(async (req, res) => {
	try {
		const url = new URL(req.url, 'http://localhost');
		const pathname = decodeURIComponent(url.pathname);
		let file = resolve(root, '.' + pathname);
		if (file !== root && !file.startsWith(root + sep)) {
			res.writeHead(403).end();
			return;
		}
		// Mirror directory-index hosting without inventing redirects for missing pages.
		if (pathname === '/') file = resolve(root, 'index.html');
		else if (!extname(file)) {
			try {
				const index = resolve(file, 'index.html');
				if (!(await stat(index)).isFile()) throw new Error('Missing directory index');
				if (!pathname.endsWith('/')) {
					res.writeHead(308, { location: pathname + '/' + url.search }).end();
					return;
				}
				file = index;
			} catch {
				if (!pathname.endsWith('/')) file += '.html';
			}
		}
		let status = 200;
		try {
			if (!(await stat(file)).isFile()) throw new Error('Not a file');
		} catch {
			file = resolve(root, '404.html');
			status = 404;
		}
		res.writeHead(status, {
			'content-type': mime[extname(file)] || 'application/octet-stream',
			'cache-control': 'no-store'
		});
		res.end(await readFile(file));
	} catch {
		res.writeHead(500).end();
	}
});
const serve = process.argv.includes('--serve');
const originArgument = process.argv.find((argument) => argument.startsWith('--origin='));
if (serve && originArgument) throw new Error('Use --serve or --origin, not both');
if (!originArgument) {
	await new Promise((done, reject) => {
		server.once('error', reject);
		server.listen(serve ? 4173 : 0, '127.0.0.1', done);
	});
}
const origin = originArgument
	? new URL(originArgument.slice('--origin='.length)).origin
	: `http://127.0.0.1:${server.address().port}`;
try {
	const pages = new Map();
	const pageUrls = new Map();
	for (const [route, heading] of routes) {
		const response = await fetch(origin + route);
		const html = await response.text();
		const h1 = html
			.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]
			.replace(/<[^>]*>/g, '')
			.replace(/<!--.*?-->/g, '');
		if (
			response.status !== 200 ||
			!h1?.includes(heading) ||
			html.includes('This page isn’t on the workbench.')
		) {
			throw new Error(
				`${route}: expected a real page with heading "${heading}", got HTTP ${response.status}, heading "${h1}"`
			);
		}
		pages.set(route, html);
		pageUrls.set(route, response.url);
		if (route !== '/') {
			const trailingSlash = await fetch(origin + route + '/');
			if (trailingSlash.status !== 200 || !(await trailingSlash.text()).includes(h1)) {
				throw new Error(`${route}/: trailing-slash navigation failed`);
			}
		}
		console.log(`PASS ${route} — HTTP 200, expected page content (including trailing-slash URL)`);
	}
	// Check resolved URLs, including case-sensitive filenames and nested-page relative paths.
	const references = new Set();
	for (const [route, html] of pages) {
		for (const tag of html.matchAll(/<(?:img|source|script|link|a)\b[^>]*>/g)) {
			for (const attribute of tag[0].matchAll(/\b(src|href|srcset)="([^"]+)"/g)) {
				const values =
					attribute[1] === 'srcset'
						? attribute[2].split(',').map((candidate) => candidate.trim().split(/\s+/)[0])
						: [attribute[2]];
				for (const value of values) {
					const url = new URL(value.replaceAll('&amp;', '&'), pageUrls.get(route));
					if (url.origin !== origin) continue;
					const pagePath = url.pathname.replace(/\/$/, '') || '/';
					if (url.hash && routes.has(pagePath)) {
						const id = decodeURIComponent(url.hash.slice(1));
						if (!pages.get(pagePath).includes(`id="${id}"`)) {
							throw new Error(`${route}: missing anchor target ${url.pathname}${url.hash}`);
						}
					}
					url.hash = '';
					references.add(url.href);
				}
			}
		}
	}
	for (const url of references) {
		const response = await fetch(url);
		if (response.status !== 200) throw new Error(`${url}: HTTP ${response.status}`);
	}
	console.log(`PASS ${references.size} resolved local links and resource URLs`);
	// Verify actual bytes and image MIME types, not an HTML fallback with a 200 status.
	const staticRoot = resolve('static');
	const assets = (await filesUnder(staticRoot)).filter((file) => extname(file) !== '.md');
	if (!originArgument || process.argv.includes('--build-assets')) {
		assets.push(...(await filesUnder(resolve(root, '_app'))));
	}
	for (const file of assets) {
		const sourceRoot = file.startsWith(staticRoot + sep) ? staticRoot : root;
		const path = '/' + relative(sourceRoot, file).split(sep).join('/');
		const response = await fetch(origin + path);
		const body = Buffer.from(await response.arrayBuffer());
		const expected = await readFile(file);
		if (response.status !== 200 || !body.equals(expected)) {
			throw new Error(`${path}: expected original file bytes, got HTTP ${response.status}`);
		}
		const type = mime[extname(file)]?.split(';')[0];
		if (type && !response.headers.get('content-type')?.startsWith(type)) {
			throw new Error(`${path}: incorrect content-type ${response.headers.get('content-type')}`);
		}
	}
	console.log(
		`PASS ${assets.length} assets — HTTP 200, correct MIME types and original file bytes`
	);
	const unknown = await fetch(origin + '/projects/this-project-does-not-exist');
	if (unknown.status !== 404) throw new Error('Unknown projects must return HTTP 404');
	console.log('PASS unknown project — HTTP 404');
	if (serve) console.log(`Static preview ready: ${origin}/ (serves build/ only; no SSR fallback)`);
} catch (error) {
	server.close();
	throw error;
}
if (!serve) server.close();
