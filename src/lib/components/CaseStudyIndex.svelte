<script lang="ts">
	let { sections }: { sections: { id: string; title: string }[] } = $props();
</script>

<nav class="case-index" aria-label="Case study sections">
	{#each sections as section (section.id)}<a href={`#${section.id}`}>{section.title}</a>{/each}
</nav>
