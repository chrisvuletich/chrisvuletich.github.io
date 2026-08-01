<!-- eslint-disable svelte/no-navigation-without-resolve -->
<script lang="ts">
	import { resolve } from '$app/paths';
	import { onetaskCaseStudy as study } from '$lib/data/onetask-case-study';

	const githubUrl = 'https://github.com/chrisvuletich/onetask-cli';
</script>

<main class="onetask-case-study page">
	<a class="back-link" href={resolve('/projects')}>← Back to projects</a>
	<header class="onetask-hero">
		<div>
			<p class="eyebrow">Personal Python project</p>
			<h1>OneTask CLI</h1>
			<p>
				A command-driven Python task manager with persistent JSON storage, completion tracking, and
				due-date support.
			</p>
			<div class="button-row">
				<a class="button button--solid" href={githubUrl} target="_blank" rel="noreferrer"
					>View on GitHub ↗</a
				>
			</div>
		</div>
		<dl class="case-facts">
			<div>
				<dt>Status</dt>
				<dd>v0.1 complete · v0.2 in progress</dd>
			</div>
			<div>
				<dt>Format</dt>
				<dd>Python command-line application</dd>
			</div>
			<div>
				<dt>Focus</dt>
				<dd>Practical terminal workflow</dd>
			</div>
		</dl>
	</header>

	<section class="case-section case-section--split" aria-labelledby="overview-title">
		<div>
			<p class="eyebrow">01 / Overview</p>
			<h2 id="overview-title">A small tool, built all the way through.</h2>
		</div>
		<div class="case-prose">
			<p>
				I built OneTask to practice Python through a complete project rather than isolated
				exercises. It gave me a focused place to work through parsing, command routing, persistent
				data, validation, Git workflows, and incremental development.
			</p>
			<p>
				I kept the interface command-driven because I wanted a terminal workflow I could use for
				school and personal tasks—not a large productivity system with more surface area than I
				needed.
			</p>
		</div>
	</section>

	<section class="case-section" aria-labelledby="features-title">
		<p class="eyebrow">02 / Current features</p>
		<h2 id="features-title">Implemented functionality.</h2>
		<div class="feature-grid">
			{#each study.features as [title, text] (title)}<article>
					<h3>{title}</h3>
					<p>{text}</p>
				</article>{/each}
		</div>
	</section>

	<section class="case-section case-section--split" aria-labelledby="demo-title">
		<div>
			<p class="eyebrow">03 / Terminal demo</p>
			<h2 id="demo-title">A typical task session.</h2>
		</div>
		<div class="terminal" aria-label="Example OneTask CLI terminal session">
			<div class="terminal__bar"><span></span><span></span><span></span><strong>tm</strong></div>
			<pre><code
					>$ tm

----------------------------------
         OneTask CLI
----------------------------------
Type 'help' for a list of commands

&gt; add Finish operating systems assignment
Added task 6: Finish operating systems assignment

&gt; due 6 tomorrow
Set due date for task 6 to 2026-08-02.

&gt; list
Tasks:
[ ] 6: Finish operating systems assignment
    (due: 2026-08-02)

&gt; done 6
Marked task 6 as complete: Finish operating systems assignment

&gt; list
Tasks:
[x] 6: Finish operating systems assignment
    (due: 2026-08-02)

&gt; exit
Program Saving...... Closing!</code
				></pre>
		</div>
	</section>

	<section class="case-section case-section--split" aria-labelledby="works-title">
		<div>
			<p class="eyebrow">04 / How it works</p>
			<h2 id="works-title">A deliberately simple structure.</h2>
		</div>
		<div>
			<ol class="command-flow">
				<li><code>main.py</code><span>Starts the interactive loop and routes commands.</span></li>
				<li><code>parse.py</code><span>Separates a command from its arguments.</span></li>
				<li>
					<code>commands.py</code><span
						>Contains command behavior such as add, list, done, delete, and due.</span
					>
				</li>
				<li>
					<code>tasks.json</code><span
						>Stores task data locally, while load/save helpers manage persistence.</span
					>
				</li>
				<li>
					<code>Change signal</code><span
						>Command functions return whether data changed so the program knows when to save.</span
					>
				</li>
			</ol>
		</div>
	</section>

	<section class="case-section" aria-labelledby="evolution-title">
		<p class="eyebrow">05 / Evolution</p>
		<h2 id="evolution-title">Built in small, useful increments.</h2>
		<ol class="timeline timeline--five">
			{#each study.timeline as [date, text] (date)}<li>
					<p class="timeline__date">{date}</p>
					<p>{text}</p>
				</li>{/each}
		</ol>
	</section>

	<section class="case-section" aria-labelledby="lessons-title">
		<p class="eyebrow">06 / Challenges & lessons</p>
		<h2 id="lessons-title">The project taught me more than syntax.</h2>
		<div class="challenge-list">
			{#each study.lessons as [title, text] (title)}<article>
					<h3>{title}</h3>
					<p>{text}</p>
				</article>{/each}
		</div>
	</section>

	<section class="case-section case-section--split" aria-labelledby="status-title">
		<div>
			<p class="eyebrow">07 / Status & roadmap</p>
			<h2 id="status-title">Clear about what’s here and what’s next.</h2>
		</div>
		<div class="status-groups">
			<div>
				<h3>Implemented</h3>
				<ul>
					{#each study.implemented as item (item)}<li>{item}</li>{/each}
				</ul>
			</div>
			<div>
				<h3>In progress</h3>
				<ul>
					{#each study.inProgress as item (item)}<li>{item}</li>{/each}
				</ul>
			</div>
			<div>
				<h3>Planned</h3>
				<ul>
					{#each study.planned as item (item)}<li>{item}</li>{/each}
				</ul>
			</div>
		</div>
	</section>

	<section class="case-section case-section--split" aria-labelledby="tech-title">
		<div>
			<p class="eyebrow">08 / Skills & technologies</p>
			<h2 id="tech-title">A practical Python workflow.</h2>
		</div>
		<div>
			<ul class="tag-list">
				{#each study.tech as item (item)}<li>{item}</li>{/each}
			</ul>
			<p class="case-prose">
				Small, focused features made room to practice release tagging, issue tracking,
				documentation, and a Git history built from meaningful commits rather than one large upload.
			</p>
		</div>
	</section>

	<section class="onetask-cta">
		<p class="eyebrow">Repository</p>
		<h2>See the project history.</h2>
		<p>OneTask is an ongoing personal project, with v0.1 released and v0.2 development underway.</p>
		<a class="button button--solid" href={githubUrl} target="_blank" rel="noreferrer"
			>Open OneTask on GitHub ↗</a
		>
	</section>
</main>
