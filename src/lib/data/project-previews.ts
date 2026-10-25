import type { Project } from './projects';

export const projectPreviews: Partial<
	Record<
		Project['slug'],
		{
			image: string;
			alt: string;
			secondary?: string;
			secondaryAlt?: string;
		}
	>
> = {
	sidequest: {
		image: 'sidequest/discover.png',
		alt: 'SideQuest activity discovery screen',
		secondary: 'sidequest/sidequest-result.png',
		secondaryAlt: 'An activity suggestion in SideQuest'
	},
	'password-manager': {
		image: 'password-manager/cli.png',
		alt: 'Password Manager command-line interface'
	},
	'workout-journal': {
		image: 'workout-log/history.webp',
		alt: 'Workout Journal training history',
		secondary: 'workout-log/calendar.webp',
		secondaryAlt: 'Workout Journal calendar'
	},
	'notes-app': {
		image: 'notes/academic.png',
		alt: 'Notes App academic workspace',
		secondary: 'notes/Notes.png',
		secondaryAlt: 'Notes App rich-text editor'
	},
	rocky: {
		image: 'rocky/after/new-dash.webp',
		alt: 'Rocky student dashboard',
		secondary: 'rocky/after/new-chat.webp',
		secondaryAlt: 'Rocky AI chat interface'
	}
};

export const oneTaskExcerpt = `$ tm
> add Finish operating systems assignment
Added task 6: Finish operating systems assignment

> due 6 tomorrow
Set due date for task 6 to 2026-08-02.

> list
Tasks:
[ ] 6: Finish operating systems assignment
    (due: 2026-08-02)

> done 6
Marked task 6 as complete: Finish operating systems assignment`;

export const vehiclePipeline = [
	'Webcam',
	'Frame capture',
	'YOLO detection',
	'Vehicle filtering',
	'Object tracking',
	'Bounding boxes',
	'Tracking IDs + confidence',
	'Display frame'
];
