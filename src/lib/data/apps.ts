import type { Project } from './projects';

export type AppEntry = {
	slug: 'workout-journal' | 'sidequest' | 'bookshelf' | 'cozy-commands' | 'bar-fishing';
	name: string;
	type: 'Web App' | 'Personal Tool' | 'Reading App' | 'Game Mod';
	description: string;
	status: string;
	visual: string;
	tone: 'rust' | 'moss' | 'ochre' | 'ink' | 'water';
	href?: '/bookshelf' | `https://${string}`;
	actionLabel?: string;
	external?: boolean;
	projectSlug?: Project['slug'];
};

export const apps: AppEntry[] = [
	{
		slug: 'workout-journal',
		name: 'Workout Journal',
		type: 'Personal Tool',
		description:
			'A private workout tracker I built to replace the way I used to log workouts in my notes.',
		status: 'Private preview · Vercel sign-in required',
		visual: 'WJ',
		tone: 'rust',
		href: 'https://workout-qxqmdltv5-cvuletich.vercel.app',
		actionLabel: 'Open Private Preview',
		external: true,
		projectSlug: 'workout-journal'
	},
	{
		slug: 'sidequest',
		name: 'SideQuest',
		type: 'Web App',
		description:
			'An activity picker for when you want to get out, do something different, or make a stale day more interesting.',
		status: 'Live',
		visual: '✦',
		tone: 'ochre',
		href: 'https://sidequest.vuletich.dev',
		actionLabel: 'Try SideQuest',
		external: true,
		projectSlug: 'sidequest'
	},
	{
		slug: 'bookshelf',
		name: 'Bookshelf',
		type: 'Reading App',
		description:
			'My personal reading library, with finished books, ratings, favorites, reading status, and yearly statistics.',
		status: 'Personal library',
		visual: 'B',
		tone: 'moss',
		href: '/bookshelf',
		actionLabel: 'Open Bookshelf'
	},
	{
		slug: 'cozy-commands',
		name: 'Cozy Commands',
		type: 'Game Mod',
		description:
			'An in-game Stardew Valley utility menu with Favorites and Travel tabs for quick, safe travel to common locations.',
		status: 'Private MVP · No public download yet',
		visual: 'CC',
		tone: 'moss'
	},
	{
		slug: 'bar-fishing',
		name: 'Bar Fishing',
		type: 'Game Mod',
		description:
			'A Stardew Valley prototype that replaces the standard fishing minigame with an original balance-based fishing fight.',
		status: 'Private technical MVP · No public download yet',
		visual: 'BF',
		tone: 'water'
	}
];
