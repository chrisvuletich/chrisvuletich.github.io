<script lang="ts">
	let { on, ontoggle }: { on: boolean; ontoggle: () => void } = $props();
	let hasPulled = $state(false);
</script>

<div class="library-light">
	<div class="library-light__fixture" aria-hidden="true">
		<span class="library-light__stem"></span>
		<span class="library-light__shade"></span>
		<span class="library-light__bulb"></span>
	</div>
	<button
		class="library-light__chain"
		type="button"
		aria-label="Library ambient lighting"
		aria-pressed={on}
		aria-describedby="library-light-help"
		title={on ? 'Pull to turn the light off' : 'Pull to turn the light on'}
		onclick={() => {
			hasPulled = true;
			ontoggle();
		}}
	>
		{#key on}
			<span
				class="library-light__chain-assembly"
				class:chain-is-pulled={hasPulled}
				aria-hidden="true"
			>
				<span class="library-light__links"></span>
				<span class="library-light__pull"></span>
			</span>
		{/key}
		<span class="library-light__label" aria-hidden="true">{on ? 'Lights on' : 'Lights off'}</span>
	</button>
	<p id="library-light-help" class="library-light__help">
		Pull the chain to turn the library’s warm ambient lighting on or off.
	</p>
</div>
