export type ProjectStatus =
	| 'In Progress'
	| 'V1 Complete'
	| 'Completed'
	| 'v0.2 In Progress'
	| 'Active Personal Project'
	| 'Active Development'
	| 'Active / In Development';

export type Project = {
	slug:
		| 'rocky'
		| 'towtruck-alert'
		| 'onetask-cli'
		| 'workout-journal'
		| 'notes-app'
		| 'password-manager'
		| 'sidequest';
	title: string;
	status: ProjectStatus;
	category: string;
	description: string;
	overview: string;
	motivation: string;
	contribution: string;
	role?: string;
	dateRange?: string;
	milestones: string[];
	technologies: string[];
	githubUrl?: string;
};

export const projects: Project[] = [
	{
		slug: 'sidequest',
		title: 'SideQuest',
		status: 'Active / In Development',
		category: 'Activity Discovery',
		description:
			'A cozy activity picker that helps you find something interesting to do right now.',
		overview:
			'A mobile-first discovery app that suggests context-aware activities or finds ideas based on the user’s mood and available time.',
		motivation:
			'I wanted to build around curiosity and real-world discovery rather than another general-purpose tracking application.',
		contribution:
			'An independent full-stack project covering product design, responsive React interfaces, server APIs, Supabase data, and PWA behavior.',
		role: 'Designer and developer',
		dateRange: 'Started 2026 · active development',
		milestones: [
			'Built context-aware random activity selection and multi-filter discovery.',
			'Added favorites, completion history, guides, themes, and mobile navigation.',
			'Protected the full Supabase catalog behind narrow server-side API routes.'
		],
		technologies: ['React', 'TypeScript', 'vinext', 'Vite', 'Nitro', 'Supabase', 'PostgreSQL'],
		githubUrl: 'https://github.com/chrisvuletich/sidequest'
	},
	{
		slug: 'password-manager',
		title: 'Password Manager',
		status: 'Completed',
		category: 'Python CLI',
		description:
			'A command-line password manager built in Python that securely stores account credentials in an encrypted local vault.',
		overview:
			'A terminal-based Python application for securely saving and managing login credentials locally.',
		motivation:
			'An older learning project I returned to so I could diagnose its storage and encryption problems and complete a safer V1 architecture.',
		contribution:
			'An independent security-focused learning project covering encrypted persistence, key derivation, CLI workflows, recovery, and automated testing.',
		role: 'Python developer',
		dateRange: 'V1 complete',
		milestones: [
			'Replaced delimiter-based records with independently encrypted JSON credentials.',
			'Connected Scrypt-derived Fernet keys to the master-password flow.',
			'Added transaction recovery and 10 automated tests around vault reliability.'
		],
		technologies: ['Python', 'Cryptography', 'Fernet', 'Scrypt', 'CLI', 'Unit Testing'],
		githubUrl: 'https://github.com/chrisvuletich/password-manager'
	},
	{
		slug: 'workout-journal',
		title: 'Workout Journal',
		status: 'Active Personal Project',
		category: 'Personal Fitness Application',
		description: 'Private workout tracking application built for personal use.',
		overview:
			'A private web application built to replace years of Apple Notes workout tracking with a system designed around my own training.',
		motivation:
			'Years of workout notes became difficult to search, compare, organize, and reuse across devices, so I built a system that fits how I train.',
		contribution:
			'An independent full-stack project built for daily personal use, from workout logging and templates to cloud-synced history and account security.',
		role: 'Designer and developer',
		dateRange: 'Started 2026 · actively evolving',
		milestones: [
			'Created a personal workout log that preserves the structure of my existing training routine.',
			'Added cloud-synced history, custom exercises, templates, and progress tracking.',
			'Continues to improve through real-world use during workouts.'
		],
		technologies: ['SvelteKit', 'TypeScript', 'Supabase', 'PostgreSQL', 'Supabase Auth', 'Vercel'],
		githubUrl: 'https://github.com/chrisvuletich/workout-log'
	},
	{
		slug: 'notes-app',
		title: 'Notes App',
		status: 'Active Development',
		category: 'Private Academic Workspace',
		description:
			'A private note-taking and academic workspace I built to organize courses, assignments, notes, and notebooks in one place.',
		overview:
			'Notes App brings my academic schedule, course work, personal tasks, Stickies, continuous rich-text notes, and page-based notebooks into one private workspace.',
		motivation:
			'I wanted a note-taking system shaped around how I actually organize school instead of spreading course information, assignments, and notes across disconnected tools.',
		contribution:
			'An independent full-stack project covering product design, relational data, continuous rich-text editing, private file storage, authentication, access control, and end-to-end testing.',
		role: 'Designer and developer',
		dateRange: 'Started 2026 · active development',
		milestones: [
			'Built separate academic and personal workspaces around courses, schedules, tasks, notes, and Stickies.',
			'Created a continuous JSONB rich-text editor with slash commands, editable tables, autosave, and Markdown import and export.',
			'Added page-based notebooks with typed, image, and PDF pages backed by owner-scoped private storage.'
		],
		technologies: [
			'SvelteKit',
			'Svelte 5',
			'TypeScript',
			'Supabase Auth',
			'PostgreSQL',
			'Row Level Security',
			'Supabase Storage',
			'PDF.js',
			'Playwright'
		]
	},
	{
		slug: 'rocky',
		title: 'Rocky',
		status: 'Completed',
		category: 'Full-Stack Web Platform',
		description:
			'An educational platform bringing AI-powered tools, account management, and course resources together for computer science students.',
		overview:
			'Rocky is a collaborative educational platform with an AI chat experience, account and API-key management, administrative interfaces, and help resources.',
		motivation:
			'Course tools and resources are often scattered. Rocky explores putting useful support for computer science students in one place.',
		contribution:
			'I led much of the frontend development and, as the work continued into a summer internship, took on frontend integration, chat access, and selected Flask changes needed to support the features I was implementing.',
		role: 'Frontend Developer & Software Engineering Intern',
		dateRange: 'February 2026 – August 2026',
		milestones: [
			'Building frontend flows for account and API-key management.',
			'Connecting a SvelteKit interface to Flask and Python services.',
			'Designing interfaces for AI chat, administration, and support documentation.'
		],
		technologies: ['SvelteKit', 'TypeScript', 'Flask', 'Python', 'MongoDB', 'AI integration']
	},
	{
		slug: 'towtruck-alert',
		title: 'TowTruck Alert',
		status: 'V1 Complete',
		category: 'Computer Vision',
		description:
			'A computer vision project that detects vehicles and explores how camera footage could support automated tow-truck detection.',
		overview:
			'TowTruck Alert is a hands-on computer vision project that progressed from camera capture and image-processing experiments to YOLO-based object detection.',
		motivation:
			'I wanted a concrete way to learn how a visual signal moves from a camera frame to a useful detection. The longer-term idea is tow-truck awareness and helpful alerts.',
		contribution:
			'An independent learning project, built to practice the full path from frame processing and overlays to more capable object-detection experiments.',
		milestones: [
			'Started with OpenCV camera capture, grayscale conversion, and RGB frame experiments.',
			'Added bounding boxes, text overlays, and an early Haar cascade face-detection prototype.',
			'Moved into YOLO object detection to explore a stronger foundation for vehicle recognition.'
		],
		technologies: ['Python', 'OpenCV', 'YOLO', 'Computer Vision', 'Object Detection'],
		githubUrl: 'https://github.com/chrisvuletich/towtruck-alert'
	},
	{
		slug: 'onetask-cli',
		title: 'OneTask CLI',
		status: 'v0.2 In Progress',
		category: 'Python CLI',
		description:
			'A command-driven Python task manager with persistent JSON storage, completion tracking, and due-date support.',
		overview:
			'OneTask CLI is a compact Python task manager for adding, listing, completing, and deleting tasks from the terminal.',
		motivation:
			'I wanted to finish and polish a focused tool with clear behavior, durable local data, and useful safeguards rather than endlessly adding features.',
		contribution:
			'An independent Python project built from command design through persistent storage, validation, versioning, and ongoing improvements.',
		role: 'Personal Python project',
		dateRange: 'v0.1 complete · v0.2 in progress',
		milestones: [
			'Added commands to create, list, complete, and delete tasks by ID or exact text.',
			'Used JSON file persistence so task data remains available between sessions.',
			'Added guards for invalid input and duplicate tasks to keep the workflow predictable.'
		],
		technologies: ['Python', 'CLI', 'JSON', 'File Persistence', 'Git'],
		githubUrl: 'https://github.com/chrisvuletich/onetask-cli'
	}
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
