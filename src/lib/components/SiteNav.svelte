<!-- eslint-disable svelte/no-navigation-without-resolve -->
<script lang="ts">
	import { base, resolve } from '$app/paths';
	import { page } from '$app/state';

	let menuOpen = $state(false);
	let menuButton: HTMLButtonElement;
	const profileImage = `${base}/images/profile.jpg`;

	function closeOnEscape(event: KeyboardEvent) {
		if (event.key === 'Escape' && menuOpen) {
			menuOpen = false;
			menuButton?.focus();
		}
	}
	const links = [
		{ href: resolve('/'), path: `${base}/`, label: 'Home' },
		{ href: resolve('/projects'), path: `${base}/projects`, label: 'Projects' },
		{ href: resolve('/apps'), path: `${base}/apps`, label: 'Apps' },
		{ href: resolve('/about'), path: `${base}/about`, label: 'About' },
		{ href: resolve('/contact'), path: `${base}/contact`, label: 'Contact' }
	];

	function isCurrent(link: (typeof links)[number]) {
		if (link.path === `${base}/`) return page.url.pathname === link.path;
		if (link.label === 'Apps') {
			return [link.path, `${base}/bookshelf`, `${base}/books`].some(
				(path) => page.url.pathname === path || page.url.pathname.startsWith(`${path}/`)
			);
		}
		return page.url.pathname === link.path || page.url.pathname.startsWith(`${link.path}/`);
	}
</script>

<svelte:window onkeydown={closeOnEscape} />

<header class="site-header">
	<div class="site-header__inner">
		<a class="site-mark" href={resolve('/')} aria-label="Christopher Vuletich home">
			<img class="site-avatar" src={profileImage} alt="" width="44" height="44" />
		</a>
		<button
			class="menu-toggle"
			bind:this={menuButton}
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
					aria-current={isCurrent(link) ? 'page' : undefined}
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
