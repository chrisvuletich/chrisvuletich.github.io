<!-- eslint-disable svelte/no-navigation-without-resolve -->
<script lang="ts">
	import { base, resolve } from '$app/paths';

	const githubUrl = 'https://github.com/chrisvuletich/password-manager';
	const features = [
		'Add credentials',
		'View saved accounts',
		'Search credentials',
		'Edit entries',
		'Delete entries',
		'Generate secure passwords',
		'Change the master password',
		'Encrypted local storage'
	];
	const securityDetails = [
		['Python', 'The language used for the CLI and vault logic.'],
		[
			'Scrypt',
			'Derives an encryption key from the master password while making guessing attempts more expensive.'
		],
		['Fernet', 'Encrypts and decrypts the stored credential data.'],
		['Random salt', 'Adds unique input when creating a key from the master password.'],
		['Encrypted verifier', 'Confirms the master password without storing it directly.'],
		[
			'Atomic writes',
			'Uses safe file replacement so interrupted saves are less likely to corrupt the vault.'
		],
		['Password generator', 'Creates strong random passwords from the command line.'],
		['Master-password rotation', 'Re-encrypts the vault when the master password changes.'],
		['Automated tests', 'Checks important vault, encryption, and recovery behaviors.']
	];
	const screenshotPath = '/images/project/password-manager/cli.png';
</script>

<main class="password-manager page">
	<a class="back-link" href={resolve('/projects')}>← Back to projects</a>
	<header class="password-manager__hero">
		<div>
			<p class="eyebrow">Personal Python project</p>
			<h1>Password Manager</h1>
			<p class="password-manager__subtitle">Secure Command-Line Password Manager</p>
			<p class="password-manager__summary">
				A command-line password manager built in Python that securely stores account credentials in
				an encrypted local vault.
			</p>
			<div class="button-row">
				<a class="button button--solid" href={githubUrl} target="_blank" rel="noreferrer"
					>View on GitHub ↗</a
				>
			</div>
		</div>
		<dl class="password-manager__facts">
			<div>
				<dt>Status</dt>
				<dd>Completed</dd>
			</div>
			<div>
				<dt>Type</dt>
				<dd>Personal Project</dd>
			</div>
			<div>
				<dt>Interface</dt>
				<dd>Python command line</dd>
			</div>
		</dl>
	</header>

	<section
		class="password-manager__section password-manager__split"
		aria-labelledby="overview-title"
	>
		<div>
			<p class="eyebrow">01 / Overview</p>
			<h2 id="overview-title">A practical vault for everyday logins.</h2>
		</div>
		<div class="password-manager__prose">
			<p>
				I built Password Manager to run in the terminal and give users a simple way to securely save
				and manage login credentials. It supports adding, viewing, searching, editing, and deleting
				entries, generating secure passwords, and changing the master password.
			</p>
			<p>Everything stays stored locally instead of being sent to an online service.</p>
		</div>
	</section>

	<section class="password-manager__section" aria-labelledby="why-title">
		<p class="eyebrow">02 / Why I built it</p>
		<h2 id="why-title">Learning how sensitive data should be handled.</h2>
		<div class="password-manager__prose">
			<p>
				I wanted to learn more about encryption, password-based key generation, secure local
				storage, and handling sensitive data. Building a useful command-line application gave those
				ideas a real workflow instead of leaving them as isolated concepts.
			</p>
		</div>
	</section>

	<section class="password-manager__section" aria-labelledby="works-title">
		<p class="eyebrow">03 / How it works</p>
		<h2 id="works-title">The master password unlocks the vault.</h2>
		<div
			class="password-manager__architecture"
			aria-label="Master password to salt and key derivation to encryption key to encrypted local vault"
		>
			<div>Master password</div>
			<span>→</span>
			<div>Salt + key derivation</div>
			<span>→</span>
			<div>Encryption key</div>
			<span>→</span>
			<div>Encrypted local vault</div>
		</div>
		<div class="password-manager__prose">
			<p>
				When the program starts, the user enters a master password. That password is not stored
				directly. Instead, the application combines it with a random salt to create an encryption
				key, which is then used to unlock the encrypted password vault.
			</p>
			<p>Saved credentials remain encrypted on disk when the program is not running.</p>
		</div>
	</section>

	<section class="password-manager__section" aria-labelledby="security-title">
		<p class="eyebrow">04 / Security details</p>
		<h2 id="security-title">Technical choices with clear jobs.</h2>
		<div class="password-manager__detail-grid">
			{#each securityDetails as [title, text] (title)}<article>
					<h3>{title}</h3>
					<p>{text}</p>
				</article>{/each}
		</div>
	</section>

	<section class="password-manager__section" aria-labelledby="features-title">
		<p class="eyebrow">05 / Features</p>
		<h2 id="features-title">A focused command-line workflow.</h2>
		<div class="password-manager__feature-grid">
			{#each features as feature (feature)}<article><h3>{feature}</h3></article>{/each}
		</div>
	</section>

	<section class="password-manager__section" aria-labelledby="testing-title">
		<p class="eyebrow">06 / Testing</p>
		<h2 id="testing-title">Automated checks around the important behaviors.</h2>
		<div class="password-manager__prose">
			<p>
				The project includes automated tests for correct and incorrect master passwords, encryption
				and decryption, adding, editing, deleting, and reloading credentials, malformed records,
				atomic saves, and master-password rotation.
			</p>
			<p>This is targeted project testing, not exhaustive security testing.</p>
		</div>
	</section>

	<section class="password-manager__section" aria-labelledby="lessons-title">
		<p class="eyebrow">07 / What I learned</p>
		<h2 id="lessons-title">Good structure matters as much as encryption.</h2>
		<div class="password-manager__prose">
			<p>
				This project helped me understand encrypted data persistence, password-based key derivation,
				file safety, and why storage, encryption, and interface responsibilities should be
				separated. It also gave me practice with unit testing, error handling, and debugging an
				older codebase through refactoring rather than immediately rewriting it.
			</p>
		</div>
	</section>

	<section class="password-manager__section" aria-labelledby="limitations-title">
		<p class="eyebrow">08 / Limitations</p>
		<h2 id="limitations-title">A learning project with honest boundaries.</h2>
		<div class="password-manager__prose">
			<p>
				Password Manager is stored locally, has no cloud sync or browser extension, and has not
				undergone a professional cryptographic audit. Forgotten master passwords cannot be
				recovered. It is a focused learning project, not a production-ready password service.
			</p>
		</div>
	</section>

	<section class="password-manager__screenshots" aria-labelledby="screenshots-title">
		<p class="eyebrow">09 / CLI screenshot</p>
		<h2 id="screenshots-title">Command-Line Interface</h2>
		<div class="password-manager__screenshot-frame">
			<img
				src={`${base}${screenshotPath}`}
				alt="Password Manager command-line interface showing the available vault commands"
				draggable="false"
			/>
		</div>
	</section>

	<section class="password-manager__info" aria-labelledby="info-title">
		<p class="eyebrow">Project information</p>
		<h2 id="info-title">Tools and boundaries.</h2>
		<dl>
			<div>
				<dt>Type</dt>
				<dd>Personal Project</dd>
			</div>
			<div>
				<dt>Status</dt>
				<dd>Completed</dd>
			</div>
			<div>
				<dt>Language</dt>
				<dd>Python</dd>
			</div>
			<div>
				<dt>Interface</dt>
				<dd>Command Line</dd>
			</div>
			<div>
				<dt>Security</dt>
				<dd>Scrypt<br />Fernet</dd>
			</div>
			<div>
				<dt>Storage</dt>
				<dd>Encrypted local JSON vault</dd>
			</div>
			<div>
				<dt>Testing</dt>
				<dd>Automated tests</dd>
			</div>
			<div>
				<dt>Version</dt>
				<dd>v1.0.0</dd>
			</div>
		</dl>
	</section>

	<p class="password-manager__back">
		<a class="text-link" href={resolve('/projects')}>← Back to all projects</a>
	</p>
</main>
