export const towtruckCaseStudy = {
	features: [
		['Real-time detection', 'Processes object detection continuously from a live webcam feed.'],
		['Object tracking', 'Uses YOLO tracking to maintain persistent IDs across frames.'],
		['Vehicle filtering', 'Displays selected classes such as cars, trucks, and buses.'],
		['Confidence scores', 'Shows the model confidence associated with each detection.'],
		['Bounding boxes', 'Uses OpenCV to highlight detected objects in the frame.'],
		['Center-point calculation', 'Calculates and displays object center coordinates.']
	],
	timeline: [
		[
			'First successful face detection',
			'The first milestone: loading OpenCV, detecting a face with a Haar Cascade, and drawing a first detection box.'
		],
		[
			'Finding my first major bug',
			'A misunderstanding of video frames opened hundreds of image windows—a major debugging lesson.'
		],
		[
			'Understanding video streams',
			'Debugging made it clear that OpenCV continuously processes webcam frames instead of creating individual images.'
		],
		[
			'Persistent object tracking',
			'The final milestone: Ultralytics YOLO detections receive persistent tracking IDs while moving through the scene.'
		]
	],
	challenges: [
		[
			'OpenCV coordinate systems',
			'Learning how image coordinates map to boxes, center points, and frame annotations.'
		],
		[
			'Video-frame processing',
			'Understanding that a live feed is a continuous stream rather than a sequence of static image windows.'
		],
		[
			'YOLO output',
			'Learning to interpret pretrained-model detections, classes, and confidence values.'
		],
		[
			'Detection versus tracking',
			'Moving from identifying an object in one frame to following it through a scene with a persistent ID.'
		]
	],
	lessons: [
		'Working with OpenCV and image coordinates.',
		'Drawing graphics and labels directly on video frames.',
		'Debugging real-time applications through small experiments.',
		'Using pretrained machine-learning models responsibly.',
		'Organizing a larger Python project into manageable milestones.',
		'The value of iteration when a first idea evolves into a stronger learning project.'
	],
	tech: ['Python', 'OpenCV', 'Ultralytics YOLO', 'PyTorch', 'NumPy', 'Git', 'GitHub']
} as const;
