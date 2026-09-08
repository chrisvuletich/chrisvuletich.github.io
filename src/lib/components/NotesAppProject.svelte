<script lang="ts">
	import { base, resolve } from '$app/paths';

	const featureGroups = [
		{
			number: '01',
			title: 'Academic workspace',
			description:
				'I can set up courses and weekly meeting times, then keep course tasks, exams, class sessions, notes, notebooks, and uploaded study materials with the course they belong to.'
		},
		{
			number: '02',
			title: 'Personal workspace',
			description:
				'Personal tasks and notes have their own area, separate from schoolwork but still easy to reach from the same app.'
		},
		{
			number: '03',
			title: 'Continuous rich-text notes',
			description:
				'Notes feel like continuous documents with normal text selection and formatting. Slash commands add or change headings, nested lists, checklists, quotes, code, tables, and dividers.'
		},
		{
			number: '04',
			title: 'Page-based notebooks',
			description:
				'Typed notebook pages use the same continuous editor as notes, and notebooks can also contain scanned images or pages from an imported PDF. I can add, delete, and reorder pages on desktop or mobile.'
		},
		{
			number: '05',
			title: 'Quick Stickies',
			description:
				'I use small color-coded Stickies for reminders and ideas that do not need a full note. They can be pinned, edited, or deleted.'
		},
		{
			number: '06',
			title: 'Personal appearance',
			description:
				'I can choose from ten color palettes and use system, light, or dark mode depending on where I am working.'
		}
	];

	const screenshots = [
		{
			file: 'academic.png',
			width: 2940,
			height: 1612,
			title: 'Academic workspace',
			description:
				'The Academic page keeps active courses, upcoming assignments, and exams together.',
			alt: 'Notes App Academic page showing active courses, an upcoming assignment, and an upcoming exam'
		},
		{
			file: 'Notes.png',
			width: 2940,
			height: 1614,
			title: 'Notes editor',
			description:
				'A course note using a quote and Python code block, with the current save status visible.',
			alt: 'Notes editor showing a course note with a quote, Python code block, and saved status'
		},
		{
			file: 'Notebook.png',
			width: 2940,
			height: 1614,
			title: 'Notebook view',
			description:
				'A typed notebook page with the slash-command menu open and controls for importing scanned images or a PDF.',
			alt: 'Notebook view showing a typed page, slash-command content menu, and image and PDF import controls'
		}
	];
</script>

<main class="notes-project page">
	<a class="back-link" href={resolve('/projects')}>← Back to projects</a>

	<header class="notes-project__hero">
		<div>
			<p class="eyebrow">Private academic workspace</p>
			<h1>Notes App</h1>
			<p class="notes-project__subtitle">A private workspace for school and notes.</p>
			<p class="notes-project__status">Active Development</p>
			<p class="notes-project__summary">
				I built this private web app to keep my courses, assignments, notes, and notebooks in one
				place that fits the way I actually organize school.
			</p>
		</div>

		<dl class="notes-project__facts">
			<div>
				<dt>Type</dt>
				<dd>Personal Project</dd>
			</div>
			<div>
				<dt>Access</dt>
				<dd>Private · Owner-created accounts</dd>
			</div>
			<div>
				<dt>Started</dt>
				<dd>2026</dd>
			</div>
		</dl>
	</header>

	<div class="notes-project__layout">
		<div class="notes-project__main">
			<section class="notes-project__section" aria-labelledby="notes-overview">
				<p class="eyebrow">01 / Overview</p>
				<h2 id="notes-overview">The place where I keep my schoolwork together.</h2>
				<div class="notes-project__prose">
					<p>
						Notes App is a private web app I built for my own academic workflow. It brings my course
						schedule, course tasks, exams, personal tasks, quick Stickies, notes, notebooks, and
						uploaded study materials into the same place.
					</p>
					<p>
						I actually use it for school. I can check what is coming up, open a course note, write
						down a quick reminder, or continue a notebook without searching through several apps.
					</p>
				</div>
			</section>

			<section class="notes-project__section" aria-labelledby="notes-why">
				<p class="eyebrow">02 / Why I built it</p>
				<h2 id="notes-why">I wanted one place that worked the way I do.</h2>
				<div class="notes-project__prose">
					<p>
						My notes, assignments, course information, scanned pages, and reminders were spread
						across different places. They are all part of the same school routine, so I wanted to
						experiment with keeping them together.
					</p>
					<p>
						Building it myself also means I can change the software around the way I work. When my
						workflow changes or I notice something getting in the way, I can update the app instead
						of changing my habits to fit another tool.
					</p>
				</div>
			</section>

			<section class="notes-project__section" aria-labelledby="notes-features">
				<p class="eyebrow">03 / Current features</p>
				<h2 id="notes-features">What I can do in the app today.</h2>
				<div class="notes-project__feature-grid">
					{#each featureGroups as feature (feature.title)}
						<article>
							<span>{feature.number}</span>
							<h3>{feature.title}</h3>
							<p>{feature.description}</p>
						</article>
					{/each}
				</div>
			</section>

			<section class="notes-project__section" aria-labelledby="notes-editor">
				<p class="eyebrow">04 / Editor and data design</p>
				<h2 id="notes-editor">How the editor balances structure and natural writing.</h2>
				<div class="notes-project__prose">
					<p>
						The editor is designed to feel like one continuous document rather than a stack of
						separate blocks. Underneath, Tiptap and ProseMirror preserve headings, nested lists,
						checklists, quotes, code, tables, dividers, and other rich content in a structured JSONB
						document instead of treating the entire note as plain text.
					</p>
					<p>
						That structure keeps normal writing and text selection natural while supporting rich
						formatting and slash commands for inserting or changing content types. Markdown and TXT
						files become normal editable documents when imported, and notes can be exported back to
						Markdown.
					</p>
					<p>
						Notes and typed notebook pages save automatically. A short debounce waits until I pause
						typing so the app is not constantly updating the database, queues newer changes while a
						save is running, and handles pending work when I leave the page. Save and Retry controls
						remain available as a fallback.
					</p>
				</div>
			</section>

			<section class="notes-project__section" aria-labelledby="notes-privacy">
				<p class="eyebrow">05 / Privacy and access</p>
				<h2 id="notes-privacy">How I keep my notes and files private.</h2>
				<div class="notes-project__prose">
					<p>
						There is no public registration. I control which accounts are created, and users must
						sign in through Supabase Auth before they can reach the application.
					</p>
					<p>
						PostgreSQL Row Level Security (RLS) makes sure each account can only access its own
						information, and anonymous database access is denied. Images and PDFs stay in private
						Supabase Storage and are opened through temporary signed URLs instead of permanent
						public links.
					</p>
				</div>
			</section>

			<section class="notes-project__section" aria-labelledby="notes-technical">
				<p class="eyebrow">06 / Technical foundation</p>
				<h2 id="notes-technical">What runs behind the app.</h2>
				<div class="notes-project__architecture" aria-label="Notes App architecture">
					<div>
						<span>Frontend</span>
						<strong>SvelteKit + Svelte 5</strong>
						<small>A responsive interface written in TypeScript</small>
					</div>
					<span aria-hidden="true">→</span>
					<div>
						<span>App access</span>
						<strong>Server routes + Supabase Auth</strong>
						<small>Sign-in checks protect the app and its data requests</small>
					</div>
					<span aria-hidden="true">→</span>
					<div>
						<span>Data + files</span>
						<strong>Supabase</strong>
						<small>PostgreSQL, RLS, and private file storage</small>
					</div>
				</div>
				<div class="notes-project__prose">
					<p>
						The PostgreSQL database connects semesters, courses, meetings, tasks, notes,
						attachments, notebooks, and notebook pages instead of storing everything in one flat
						list. PDF.js displays private PDF notebook pages in the browser, and Playwright tests
						important user flows.
					</p>
				</div>
			</section>

			<section class="notes-project__section" aria-labelledby="notes-learning">
				<p class="eyebrow">07 / What I learned</p>
				<h2 id="notes-learning">Using it for school shows me what to improve.</h2>
				<div class="notes-project__prose">
					<p>
						Building Notes App has helped me understand how authentication, relational database
						design, Row Level Security, private file storage, and autosaving work together in a real
						application. It has also made me think more carefully about how different parts of an
						app can work with the same underlying data.
					</p>
					<p>
						One of the most useful parts of this project is that I use it for school. When something
						takes too many clicks or does not work the way I expect, I notice it quickly. I can make
						a change, use it again in my normal workflow, and see whether I actually made it better.
					</p>
				</div>
			</section>

			<section class="notes-project__section" aria-labelledby="notes-screenshots">
				<p class="eyebrow">08 / Screenshots</p>
				<h2 id="notes-screenshots">What the app looks like in use.</h2>
				<div class="notes-project__screenshots">
					{#each screenshots as screenshot (screenshot.title)}
						<article>
							<img
								src={`${base}/images/project/notes/${screenshot.file}`}
								alt={screenshot.alt}
								width={screenshot.width}
								height={screenshot.height}
								loading="lazy"
								decoding="async"
								draggable="false"
							/>
							<h3>{screenshot.title}</h3>
							<p>{screenshot.description}</p>
						</article>
					{/each}
				</div>
			</section>

			<section
				class="notes-project__section notes-project__section--last"
				aria-labelledby="notes-status"
			>
				<p class="eyebrow">09 / Current status</p>
				<h2 id="notes-status">Still changing as I use it.</h2>
				<div class="notes-project__prose">
					<p>
						Notes App is an active, private project. I keep using it for school, noticing what gets
						in the way, making changes, and trying those changes in my normal routine. That cycle is
						what guides the project more than a fixed feature list.
					</p>
				</div>
			</section>
		</div>

		<aside class="notes-project__sidebar" aria-label="Notes App project information">
			<p class="eyebrow">Project information</p>
			<dl>
				<div>
					<dt>Type</dt>
					<dd>Personal Project</dd>
				</div>
				<div>
					<dt>Status</dt>
					<dd>Active Development</dd>
				</div>
				<div>
					<dt>Frontend</dt>
					<dd>SvelteKit<br />Svelte 5<br />TypeScript</dd>
				</div>
				<div>
					<dt>Authentication</dt>
					<dd>Supabase Auth</dd>
				</div>
				<div>
					<dt>Database</dt>
					<dd>PostgreSQL<br />Row Level Security</dd>
				</div>
				<div>
					<dt>File storage</dt>
					<dd>Supabase Storage</dd>
				</div>
				<div>
					<dt>Document tools</dt>
					<dd>PDF.js<br />Markdown</dd>
				</div>
				<div>
					<dt>Testing</dt>
					<dd>Playwright</dd>
				</div>
				<div>
					<dt>Version control</dt>
					<dd>Git<br />GitHub</dd>
				</div>
			</dl>
			<p class="notes-project__private-note">
				The application and source repository are private, so there is no public demo or repository
				link.
			</p>
		</aside>
	</div>
</main>
