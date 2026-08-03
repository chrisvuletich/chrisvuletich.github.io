export type RockyEvolutionComparison = {
	id: string;
	title: string;
	description: string;
	before: string;
	after: string;
};

export const rockyEvolution: RockyEvolutionComparison[] = [
	{
		id: 'login',
		title: 'Login',
		description:
			'Updated the login experience with clearer branding, improved layout, and a more polished entry point.',
		before: '/images/project/rocky/before/old-login.webp',
		after: '/images/project/rocky/after/new-login.webp'
	},
	{
		id: 'dashboard',
		title: 'Dashboard',
		description: 'Refined the dashboard structure, navigation, spacing, and visual hierarchy.',
		before: '/images/project/rocky/before/old-dash-1.webp',
		after: '/images/project/rocky/after/new-dash.webp'
	},
	{
		id: 'users',
		title: 'User Management',
		description:
			'Expanded the user-management interface with clearer account data and improved administrative controls.',
		before: '/images/project/rocky/before/old-users.webp',
		after: '/images/project/rocky/after/new-users.webp'
	},
	{
		id: 'help',
		title: 'Help and Documentation',
		description:
			'Rebuilt the help experience around Markdown documentation, developer resources, and practical code examples.',
		before: '/images/project/rocky/before/old-help.webp',
		after: '/images/project/rocky/after/new-help.webp'
	},
	{
		id: 'account',
		title: 'Account',
		description: 'Improved account information, API-key visibility, and overall page organization.',
		before: '/images/project/rocky/before/old-account.webp',
		after: '/images/project/rocky/after/new-account.webp'
	},
	{
		id: 'chat',
		title: 'Chat',
		description:
			'Developed the chat interface with starter prompts, Markdown responses, conversation history, and mobile support.',
		before: '/images/project/rocky/before/old-chat.webp',
		after: '/images/project/rocky/after/new-chat.webp'
	}
];
