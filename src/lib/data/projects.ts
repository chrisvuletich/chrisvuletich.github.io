export type ProjectStatus = 'In Progress' | 'V1 Complete' | 'Completed' | 'v0.2 In Progress';

export type Project = {
	slug: 'rocky' | 'towtruck-alert' | 'onetask-cli';
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
