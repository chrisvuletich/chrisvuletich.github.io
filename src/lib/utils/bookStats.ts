import type { Book } from '$lib/types/book';
export function stats(items: Book[]) {
	const read = items.filter((b) => b.status === 'read');
	const rated = read.filter((b) => b.rating !== null);
	return {
		finished: read.length,
		pages: read.reduce((n, b) => n + (b.pageCount ?? 0), 0),
		unknownPages: read.some((b) => b.pageCount === null),
		average: rated.length ? rated.reduce((n, b) => n + (b.rating ?? 0), 0) / rated.length : null,
		favorites: read.filter((b) => b.favorite).length,
		current: items.filter((b) => b.status === 'currently-reading').length
	};
}
