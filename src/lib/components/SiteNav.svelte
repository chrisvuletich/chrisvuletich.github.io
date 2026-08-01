<!-- eslint-disable svelte/no-navigation-without-resolve -->
<script lang="ts">
	import { base, resolve } from '$app/paths';
	import { page } from '$app/state';

	let menuOpen = $state(false);
	const links = [
		{ href: resolve('/'), label: 'Home' },
		{ href: resolve('/projects'), label: 'Projects' },
		{ href: resolve('/about'), label: 'About' },
		{ href: resolve('/contact'), label: 'Contact' }
	];

	function isCurrent(href: string) {
		return href === `${base}/` ? page.url.pathname === href : page.url.pathname.startsWith(href);
	}
</script>

<header class="site-header">
	<div class="site-header__inner">
		<a class="site-mark" href={resolve('/')} aria-label="Christopher Vuletich home"
			>CV<span>.</span></a
		>
		<button
			class="menu-toggle"
			type="button"
			aria-expanded={menuOpen}
			aria-controls="site-navigation"
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span>{menuOpen ? 'Close' : 'Menu'}</span>
		</button>
		<nav
			class:site-nav--open={menuOpen}
			class="site-nav"
			id="site-navigation"
			aria-label="Main navigation"
		>
			{#each links as link (link.href)}
				<a
					href={link.href}
					aria-current={isCurrent(link.href) ? 'page' : undefined}
					onclick={() => (menuOpen = false)}>{link.label}</a
				>
			{/each}
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href="https://github.com/chrisvuletich" target="_blank" rel="noreferrer"
				>GitHub <span aria-hidden="true">↗</span></a
			>
		</nav>
	</div>
</header>
