<!-- eslint-disable svelte/no-navigation-without-resolve -->
<script lang="ts">
	import ProjectPreview from '$lib/components/ProjectPreview.svelte';
	import CaseStudyIndex from '$lib/components/CaseStudyIndex.svelte';
	import { projectSections } from '$lib/data/project-sections';
	import { base, resolve } from '$app/paths';
	import { towtruckCaseStudy as study } from '$lib/data/towtruck-case-study';
	const githubUrl = 'https://github.com/chrisvuletich/towtruck-alert';
	const screenshots = [
		{
			file: 'face-detection.jpg',
			height: 809,
			alt: 'An early webcam test with a green rectangle around a detected face',
			caption: 'The first face detection test with OpenCV.'
		},
		{
			file: 'object-detection.jpg',
			height: 808,
			alt: 'YOLO detecting a person, a bottle, and a potted plant in a webcam feed',
			caption: 'Trying YOLO with several objects in the same frame.'
		},
		{
			file: 'confidence-center.jpg',
			height: 809,
			alt: 'A detected person with a confidence score, bounding box, and marked center point',
			caption: 'Adding confidence scores and center points to detections.'
		}
	];
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
	<div class="case-opening"><ProjectPreview slug="towtruck-alert" /></div>
	<CaseStudyIndex sections={projectSections['towtruck-alert']} />

	<section class="case-section case-section--split" aria-labelledby="overview-title">
		<div>
			<h2 id="overview-title">Overview</h2>
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
		<h2 id="features-title">Current capabilities</h2>
		<div class="feature-grid">
			{#each study.features as [title, text] (title)}<article>
					<h3>{title}</h3>
					<p>{text}</p>
				</article>{/each}
		</div>
	</section>

	<section class="case-section case-section--split" aria-labelledby="architecture-title">
		<div>
			<h2 id="architecture-title">Workflow</h2>
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
		<h2 id="timeline-title">Learning progression</h2>
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

	<section class="case-section" aria-labelledby="screenshots-title">
		<h2 id="screenshots-title">Screenshots</h2>
		<div class="towtruck-screenshots">
			{#each screenshots as screenshot (screenshot.file)}
				<figure>
					<img
						src={`${base}/images/project/towtruck-alert/${screenshot.file}`}
						alt={screenshot.alt}
						width="1440"
						height={screenshot.height}
						loading="lazy"
						decoding="async"
					/>
					<figcaption>{screenshot.caption}</figcaption>
				</figure>
			{/each}
		</div>
	</section>

	<section class="case-section" aria-labelledby="challenges-title">
		<h2 id="challenges-title">Challenges</h2>
		<div class="challenge-list">
			{#each study.challenges as [title, text] (title)}<article>
					<h3>{title}</h3>
					<p>{text}</p>
				</article>{/each}
		</div>
	</section>

	<section class="case-section case-section--split" aria-labelledby="learning-title">
		<div>
			<h2 id="learning-title">What I learned</h2>
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
		<h2>Takeaway</h2>
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
