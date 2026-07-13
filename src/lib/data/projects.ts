export type ProjectStatus = 'Completed' | 'In Progress' | 'Archived';

export type Project = {
	title: string;
	description: string;
	technologies: string[];
	status: ProjectStatus;
	githubUrl: string;
	learnMoreUrl: string;
};

export const projects: Project[] = [
	{
		title: 'TowTruck Alert',
		description: 'Computer vision system using AI to detect tow trucks from cameras.',
		technologies: ['Python', 'OpenCV', 'YOLO', 'Computer Vision', 'AI'],
		status: 'In Progress',
		githubUrl: 'https://github.com/chrisvuletich/towtruck-alert',
		learnMoreUrl: '#towtruck-alert'
	},
	{
		title: 'Task Manager',
		description: 'Command-line task manager built in Python.',
		technologies: ['Python', 'CLI', 'JSON', 'Git'],
		status: 'Completed',
		githubUrl: 'https://github.com/chrisvuletich/onetask-cli',
		learnMoreUrl: '#task-manager'
	},
	{
		title: 'Rocky',
		description: 'An educational web platform that combines API key management, AI-powered tools, and course resources for computer science students.',
		technologies: ['SvelteKit', 'Flask', 'Python', 'AI', 'MongoDB'],
		status: 'In Progress',
		githubUrl: 'https://github.com/chrisvuletich/kent-state-cs-rocky',
		learnMoreUrl: '#rocky'
	}
];
