<script lang="ts">
	let {
		beforeSrc,
		afterSrc,
		title
	}: {
		beforeSrc: string;
		afterSrc: string;
		title: string;
	} = $props();

	let position = $state(50);
</script>

<div class="before-after" style:--comparison-position={`${position}%`}>
	<div class="before-after__image before-after__image--after">
		<img src={afterSrc} alt={`After: ${title} interface`} draggable="false" />
	</div>
	<div class="before-after__image before-after__image--before">
		<img src={beforeSrc} alt={`Before: ${title} interface`} draggable="false" />
	</div>

	<div class="before-after__label before-after__label--before" aria-hidden="true">Before</div>
	<div class="before-after__label before-after__label--after" aria-hidden="true">After</div>
	<div class="before-after__divider" aria-hidden="true">
		<span class="before-after__handle">↔</span>
	</div>
	<input
		class="before-after__range"
		type="range"
		min="0"
		max="100"
		step="1"
		bind:value={position}
		aria-label={`Compare the before and after ${title} interfaces`}
		aria-valuetext={`${position}% before interface visible`}
	/>
</div>
