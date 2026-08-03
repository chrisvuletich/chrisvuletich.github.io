<script lang="ts">
	import { base, resolve } from '$app/paths';
	import BeforeAfterComparison from '$lib/components/BeforeAfterComparison.svelte';
	import { rockyProject as study } from '$lib/data/rocky-project';
	import { rockyEvolution } from '$lib/data/rocky-evolution';
</script>

<main class="case-study page">
	<header class="case-hero">
		<div>
			<p class="eyebrow">Team project</p>
			<h1>Rocky</h1>
			<p class="case-hero__summary">
				A course-based AI platform that gives students managed access to AI services and chat, while
				giving instructors and administrators control over users, courses, permissions, API keys,
				and usage limits.
			</p>
		</div>
		<dl class="case-facts">
			<div>
				<dt>Role</dt>
				<dd>{study.role}</dd>
			</div>
			<div>
				<dt>Timeline</dt>
				<dd>February 2026 – August 2026</dd>
			</div>
			<div>
				<dt>Context</dt>
				<dd>Kent State course project → summer internship</dd>
			</div>
		</dl>
	</header>

	<section class="case-section case-section--split" aria-labelledby="overview-title">
		<div>
			<p class="eyebrow">01 / Overview</p>
			<h2 id="overview-title">A controlled path to AI access.</h2>
		</div>
		<div class="case-prose">
			<p>
				Students may need AI services for courses and projects, but unrestricted direct access
				creates practical problems around API-key distribution, security, usage limits, cost, and
				permissions. Rocky gives students a central place to work while instructors and
				administrators retain oversight.
			</p>
			<p>
				It organizes people around courses and roles, manages API keys and access limits, and makes
				AI chat and practical guidance available from the same application.
			</p>
		</div>
	</section>

	<section class="case-section case-section--split" aria-labelledby="role-title">
		<div>
			<p class="eyebrow">02 / My role</p>
			<h2 id="role-title">Frontend first, then closer integration.</h2>
		</div>
		<div class="case-prose">
			<p>
				I led much of Rocky’s frontend development, building the main application layout, role-based
				navigation, chat interface, administrative views, and documentation experience. As the
				project continued into a summer internship, I also took on authentication integration and
				selected Flask backend work needed to support user-specific chat access.
			</p>
			<p>
				Rocky was a team project. Teammates primarily developed major systems including the central
				API server, AI/LLM service, and other backend infrastructure; I integrated the user-facing
				experience with those services.
			</p>
		</div>
	</section>

	<section class="case-section" aria-labelledby="timeline-title">
		<p class="eyebrow">03 / Timeline</p>
		<h2 id="timeline-title">From course work to summer internship.</h2>
		<ol class="timeline">
			{#each study.timeline as [date, text] (date)}<li>
					<p class="timeline__date">{date}</p>
					<p>{text}</p>
				</li>{/each}
		</ol>
	</section>

	<section class="case-section" aria-labelledby="contributions-title">
		<p class="eyebrow">04 / Contributions</p>
		<h2 id="contributions-title">What I built and integrated.</h2>
		<div class="contribution-grid">
			{#each study.contributions as contribution (contribution.title)}<article>
					<p class="eyebrow">{contribution.label}</p>
					<h3>{contribution.title}</h3>
					<p>{contribution.text}</p>
				</article>{/each}
		</div>
	</section>

	<section class="case-section project-evolution" aria-labelledby="evolution-title">
		<p class="eyebrow">05 / Project evolution</p>
		<h2 id="evolution-title">Project Evolution</h2>
		<p class="project-evolution__intro">
			These comparisons show how Rocky’s interface developed during the project, from early working
			screens to a more cohesive application experience.
		</p>
		<div class="project-evolution__grid">
			{#each rockyEvolution as comparison (comparison.id)}
				<article class="evolution-comparison">
					<div class="evolution-comparison__heading">
						<h3>{comparison.title}</h3>
						<p>{comparison.description}</p>
					</div>
					<BeforeAfterComparison
						title={comparison.title}
						beforeSrc={`${base}${comparison.before}`}
						afterSrc={`${base}${comparison.after}`}
					/>
				</article>
			{/each}
		</div>

		<details class="rocky-gallery">
			<summary>View Full Gallery</summary>
			<div class="rocky-gallery__content">
				<p>Explore each screen side by side, from the original interface to the later iteration.</p>
				<div class="rocky-gallery__grid">
					{#each rockyEvolution as comparison (comparison.id)}
						<article class="gallery-pair">
							<h3>{comparison.title}</h3>
							<div class="gallery-pair__images">
								<figure>
									<img
										src={`${base}${comparison.before}`}
										alt={`Before: ${comparison.title} interface`}
										draggable="false"
									/>
									<figcaption>Before</figcaption>
								</figure>
								<figure>
									<img
										src={`${base}${comparison.after}`}
										alt={`After: ${comparison.title} interface`}
										draggable="false"
									/>
									<figcaption>After</figcaption>
								</figure>
							</div>
						</article>
					{/each}
				</div>
			</div>
		</details>
	</section>

	<section class="case-section case-section--split" aria-labelledby="architecture-title">
		<div>
			<p class="eyebrow">06 / Architecture</p>
			<h2 id="architecture-title">How Rocky handled AI requests.</h2>
		</div>
		<div>
			<div
				class="architecture"
				aria-label="Rocky AI request flow: User, Rocky frontend, Rocky server with authentication and sessions, API-key validation, application API, and database access, Granite LLM service, Rocky server, User"
			>
				<div>User</div>
				<span>↓</span>
				<div>Rocky frontend</div>
				<span>↓</span>
				<div class="architecture__server">
					<span>Rocky server</span>
					<ul>
						<li>Authentication and sessions</li>
						<li>API-key validation</li>
						<li>Application API</li>
						<li>Database access</li>
					</ul>
				</div>
				<span>↓</span>
				<div>Granite LLM service</div>
				<span>↓</span>
				<div>Rocky server</div>
				<span>↓</span>
				<div>User</div>
			</div>
			<p class="architecture-note">
				Rocky hosted the frontend and handled authentication, API-key validation, application
				requests, and database access. Approved AI requests were sent from Rocky to the Granite LLM
				service, and responses returned through Rocky to the user. Granite was not directly exposed
				outside the Rocky API.
			</p>
		</div>
	</section>

	<section class="case-section" aria-labelledby="challenges-title">
		<p class="eyebrow">07 / Engineering challenges</p>
		<h2 id="challenges-title">Where the work got more interesting.</h2>
		<div class="challenge-list">
			{#each study.challenges as [title, text] (title)}<article>
					<h3>{title}</h3>
					<p>{text}</p>
				</article>{/each}
		</div>
	</section>

	<section class="case-section case-section--split" aria-labelledby="stack-title">
		<div>
			<p class="eyebrow">08 / Technology</p>
			<h2 id="stack-title">Tools I used, and systems I worked alongside.</h2>
		</div>
		<div class="stack-groups">
			<div>
				<h3>Worked with directly</h3>
				<ul class="tag-list">
					{#each study.directTech as tech (tech)}<li>{tech}</li>{/each}
				</ul>
			</div>
			<div>
				<h3>Project infrastructure</h3>
				<ul class="tag-list">
					{#each study.infrastructureTech as tech (tech)}<li>{tech}</li>{/each}
				</ul>
			</div>
			<p>
				The early chat prototype used Gemini only for interface experimentation. Rocky’s integrated
				application used the team-managed Granite model service.
			</p>
		</div>
	</section>

	<section class="case-section case-section--split" aria-labelledby="results-title">
		<div>
			<p class="eyebrow">09 / Outcomes & learning</p>
			<h2 id="results-title">A first sustained experience across service boundaries.</h2>
		</div>
		<div class="two-lists">
			<div>
				<h3>Concrete outcomes</h3>
				<ul>
					{#each study.outcomes as outcome (outcome)}<li>{outcome}</li>{/each}
				</ul>
			</div>
			<div>
				<h3>What I learned</h3>
				<ul>
					{#each study.lessons as lesson (lesson)}<li>{lesson}</li>{/each}
				</ul>
			</div>
		</div>
	</section>

	<p class="case-back">
		<a class="text-link" href={resolve('/projects')}>← Back to all projects</a>
	</p>
</main>
