<!-- eslint-disable svelte/no-navigation-without-resolve -->
<script lang="ts">
	import { resolve } from '$app/paths';
	import { towtruckCaseStudy as study } from '$lib/data/towtruck-case-study';
	const githubUrl = 'https://github.com/chrisvuletich/towtruck-alert';
</script>

<main class="towtruck-case-study page">
	<a class="back-link" href={resolve('/projects')}>← Back to projects</a>
	<header class="towtruck-hero">
		<div>
			<p class="eyebrow">Personal computer vision project</p>
			<h1>TowTruck Alert</h1>
			<p>
				Learning Python, OpenCV, and modern object detection through a real-time vehicle detection
				and tracking pipeline.
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
				<dd>V1 Complete</dd>
			</div>
			<div>
				<dt>Focus</dt>
				<dd>Computer vision fundamentals</dd>
			</div>
			<div>
				<dt>Input</dt>
				<dd>Live webcam feed</dd>
			</div>
		</dl>
	</header>

	<section class="case-section case-section--split" aria-labelledby="overview-title">
		<div>
			<p class="eyebrow">01 / Overview</p>
			<h2 id="overview-title">From tow-truck idea to vision pipeline.</h2>
		</div>
		<div class="case-prose">
			<p>
				The original idea was to detect tow trucks entering an apartment complex and eventually
				notify residents. As I worked through the problem, the project became a broader exercise in
				building a solid real-time object detection and tracking pipeline.
			</p>
			<p>
				The finished application processes a webcam feed, detects selected vehicle classes with
				Ultralytics YOLO, draws confidence-scored boxes, calculates center points, and assigns
				persistent IDs as objects move through the frame.
			</p>
		</div>
	</section>

	<section class="case-section" aria-labelledby="features-title">
		<p class="eyebrow">02 / Current capabilities</p>
		<h2 id="features-title">What the application does.</h2>
		<div class="feature-grid">
			{#each study.features as [title, text] (title)}<article>
					<h3>{title}</h3>
					<p>{text}</p>
				</article>{/each}
		</div>
	</section>

	<section class="case-section case-section--split" aria-labelledby="architecture-title">
		<div>
			<p class="eyebrow">03 / Workflow</p>
			<h2 id="architecture-title">Each frame follows a clear path.</h2>
		</div>
		<div
			class="vision-flow"
			aria-label="Webcam, frame capture, YOLO detection, vehicle filtering, object tracking, bounding boxes, tracking IDs and confidence, display frame"
		>
			<div>Webcam</div>
			<span>↓</span>
			<div>Frame capture</div>
			<span>↓</span>
			<div>YOLO detection</div>
			<span>↓</span>
			<div>Vehicle filtering</div>
			<span>↓</span>
			<div>Object tracking</div>
			<span>↓</span>
			<div>Bounding boxes</div>
			<span>↓</span>
			<div>Tracking IDs + confidence</div>
			<span>↓</span>
			<div>Display frame</div>
		</div>
	</section>

	<section class="case-section" aria-labelledby="timeline-title">
		<p class="eyebrow">04 / Learning progression</p>
		<h2 id="timeline-title">A project built through visible milestones.</h2>
		<ol class="learning-timeline">
			{#each study.timeline as [title, text], index (title)}<li>
					<p class="timeline__date">0{index + 1}</p>
					<div>
						<h3>{title}</h3>
						<p>{text}</p>
					</div>
				</li>{/each}
		</ol>
	</section>

	<section class="case-section" aria-labelledby="challenges-title">
		<p class="eyebrow">05 / Challenges</p>
		<h2 id="challenges-title">The debugging was part of the lesson.</h2>
		<div class="challenge-list">
			{#each study.challenges as [title, text] (title)}<article>
					<h3>{title}</h3>
					<p>{text}</p>
				</article>{/each}
		</div>
	</section>

	<section class="case-section case-section--split" aria-labelledby="learning-title">
		<div>
			<p class="eyebrow">06 / What I learned</p>
			<h2 id="learning-title">Computer vision starts with fundamentals.</h2>
		</div>
		<div class="two-lists">
			<ul>
				{#each study.lessons as lesson (lesson)}<li>{lesson}</li>{/each}
			</ul>
			<details>
				<summary>Technical stack</summary>
				<ul class="tag-list">
					{#each study.tech as item (item)}<li>{item}</li>{/each}
				</ul>
			</details>
		</div>
	</section>

	<section class="towtruck-takeaway">
		<p class="eyebrow">Takeaway</p>
		<h2>A stronger foundation for what comes next.</h2>
		<p>
			Although TowTruck Alert began with a specific tow-truck use case, it evolved into a much
			broader exploration of computer vision. The project gave me a practical foundation for future
			AI and vision work: how a frame becomes a detection, and how a detection becomes something you
			can follow over time.
		</p>
		<a class="button button--solid" href={githubUrl} target="_blank" rel="noreferrer"
			>Explore the repository ↗</a
		>
	</section>
</main>
