import { error } from '@sveltejs/kit';
import { getProject, projects } from '$lib/data/projects';

export const prerender = true;
export const entries = () => projects.map((project) => ({ slug: project.slug }));

export function load({ params }) {
	const project = getProject(params.slug);
	if (!project) error(404, 'Project not found');
	return { project };
}
