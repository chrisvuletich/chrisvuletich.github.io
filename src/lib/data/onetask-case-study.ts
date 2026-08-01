export const onetaskCaseStudy = {
	features: [
		[
			'Interactive terminal workflow',
			'Launch with the local tm command and work through typed commands instead of numbered menus.'
		],
		[
			'Task lifecycle',
			'Add tasks, list saved work, mark tasks complete with done <id>, and delete by ID or exact text.'
		],
		[
			'Persistent local data',
			'Tasks are stored in tasks.json with auto-incrementing IDs and id, text, done, and due fields.'
		],
		[
			'Due-date support',
			'Set due dates to today, tomorrow, a YYYY-MM-DD value, or none, then see them while listing tasks.'
		],
		[
			'Input safeguards',
			'Reject empty and whitespace-only task names and provide a help command for the available workflow.'
		],
		[
			'Terminal convenience',
			'Use tm to launch the program without manually typing python3 main.py.'
		]
	],
	timeline: [
		['Foundation', 'Started with a simple parser and command-routing experiment.'],
		[
			'Persistence',
			'Added JSON loading and saving, then task creation, listing, deletion, and completion.'
		],
		['Polish', 'Improved validation and command help, then tagged the initial v0.1 release.'],
		['v0.2', 'Began due-date support and continued organizing work through GitHub Issues.'],
		[
			'Next',
			'Filtering, tags, priorities, search, packaging, and richer terminal formatting remain planned work.'
		]
	],
	lessons: [
		[
			'Git workflows in practice',
			'I learned how local history and GitHub fit together through staging, meaningful commits, pulling with rebase, pushing, releases, and resolving a .gitignore conflict.'
		],
		[
			'Persistence without tracking user data',
			'Keeping generated task data and the Python virtual environment out of Git made it clear which files belong to the program and which belong to a local user session.'
		],
		[
			'Small command design decisions',
			'Command functions report whether data changed, so the program knows when to save. That kept the interactive loop simple while making updates predictable.'
		],
		[
			'Useful validation',
			'Handling empty input and quoted whitespace early prevented confusing task data without making the command interface complicated.'
		]
	],
	implemented: [
		'Interactive terminal interface and help command.',
		'Add, list, complete, and delete task commands.',
		'JSON persistence with auto-incrementing IDs.',
		'Input validation and due-date support.',
		'Local tm command for quick launch.'
	],
	inProgress: ['v0.2 development, including the newly added due-date workflow.'],
	planned: [
		'Filters for today, tomorrow, the upcoming week, and all tasks.',
		'Startup dashboard, tags, priorities, sorting, and keyword search.',
		'Better terminal formatting and completed-task archiving.',
		'Python packaging, installation, and a potential macOS launcher.'
	],
	tech: [
		'Python',
		'JSON',
		'CLI design',
		'Command parsing',
		'File persistence',
		'Input validation',
		'Git',
		'GitHub Issues',
		'Releases',
		'Terminal workflow'
	]
} as const;
