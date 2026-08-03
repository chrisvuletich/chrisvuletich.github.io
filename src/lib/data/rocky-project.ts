export const rockyProject = {
	role: 'Frontend Developer & Software Engineering Intern',
	timeline: [
		[
			'February 2026',
			'Rocky began as a Kent State Software Engineering course group project. I focused heavily on frontend development, interface design, and the application shell.'
		],
		[
			'Spring 2026',
			'I built and refined user-facing views, navigation, authentication flows, and a first documentation experience while collaborating with teammates responsible for core API and model services.'
		],
		[
			'Summer 2026',
			'The project continued as a summer internship. My responsibilities expanded into chat integration, selected Flask and API-key work, administration tools, and deeper documentation.'
		],
		[
			'August 2026',
			'My work on Rocky concluded after a six-month period of building, integrating, testing, and documenting the platform.'
		]
	],
	contributions: [
		{
			title: 'Frontend architecture & navigation',
			text: 'I developed a large portion of the SvelteKit and TypeScript frontend: the application frame, reusable views, sidebar navigation, active states, and responsive layout refinements. The structure covered dashboard, users, courses, analytics, account, chat, help, and admin areas, with navigation changing appropriately by role.',
			label: 'SvelteKit · TypeScript · CSS'
		},
		{
			title: 'Authentication experience',
			text: 'I designed the FlashLine-inspired login interface and integrated the frontend with Rocky’s existing Microsoft authentication flow. I worked with session-user data, frontend authentication state, and local-development fallbacks to make authentication function correctly across the application. The underlying Microsoft OAuth system was part of the team’s shared backend infrastructure.',
			label: 'Microsoft authentication · sessions'
		},
		{
			title: 'AI chat, from prototype to product',
			text: 'I first built a separate Svelte chat prototype to explore message design, API-key authentication, and request/response behavior with Gemini for testing. I then brought that learning into Rocky’s user-facing chat: authenticated requests, loading and error states, Markdown responses, automatic scrolling, starter prompts, and conversation-history support where implemented.',
			label: 'Chat UI · Markdown · API integration'
		},
		{
			title: 'Chat access & service integration',
			text: 'To support chat access, I completed selected Flask changes that ensured a user-level chat key existed after account creation or Microsoft sign-in. The key was associated with the user as a personal owner and used to prevent authenticated users from entering chat without the needed access. I connected the frontend through Rocky’s API and chat proxy rather than directly to the team-managed model service.',
			label: 'Flask · API keys · REST APIs'
		},
		{
			title: 'Help, API docs & administrative views',
			text: 'I turned Help into a clearer documentation hub with resource cards, category-based guidance, Markdown content, and previous/next navigation. I also built beginner-oriented API-key and user-management guides, developer examples, and the role-protected Admin Panel entry and interface, leaving administrative logs clearly as future work.',
			label: 'Documentation UX · role-aware UI'
		}
	],
	challenges: [
		[
			'Role-aware interface behavior',
			'Different users needed different navigation and administrative access. I used role-aware sidebar entries and views to keep administrative tools out of standard user flows.'
		],
		[
			'Multi-service local development',
			'Rocky involved frontend, Flask API, chat, and model services. I learned to investigate refused connections, health endpoints, environment values such as ROCKY_WEB_HOST, and local configurations using Mongita.'
		],
		[
			'A chat interface that feels usable',
			'The chat needed to authenticate requests, present messages clearly, render Markdown, report errors, scroll at the right time, and stay separate from the underlying model service.'
		],
		[
			'Keeping a growing frontend maintainable',
			'As more views arrived, I moved styles into appropriate CSS files, reused patterns, and corrected layout inconsistencies so the interface stayed coherent.'
		]
	],
	directTech: [
		'SvelteKit',
		'Svelte 5',
		'TypeScript',
		'JavaScript',
		'HTML',
		'CSS',
		'Python',
		'Flask',
		'REST APIs',
		'Markdown rendering',
		'Microsoft authentication integration',
		'Git',
		'GitHub'
	],
	infrastructureTech: [
		'MongoDB',
		'Mongita for local development',
		'Granite model service',
		'Team-managed API and chat services'
	],
	outcomes: [
		'Delivered a working multi-view frontend for a team software project.',
		'Added an integrated, authenticated AI chat experience.',
		'Implemented role-aware navigation and an administrator-facing entry point.',
		'Connected frontend features across API, authentication, and chat-service boundaries.',
		'Created beginner-friendly API and account-management documentation.',
		'Continued the project from a semester course into a summer internship.'
	],
	lessons: [
		'Building a larger application with reusable SvelteKit and TypeScript patterns.',
		'Integrating a frontend with Flask APIs, sessions, and user-specific API keys.',
		'Designing a chat experience that handles asynchronous states clearly.',
		'Debugging a local environment made up of several services.',
		'Working through Git branches, merges, and team-owned service boundaries.',
		'Writing technical guidance for both beginners and developers.'
	]
} as const;
