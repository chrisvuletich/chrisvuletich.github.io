import type { Book, BookStatus, SortOption } from '$lib/types/book';
export const years = (items: Book[]) =>
	[...new Set(items.map((b) => b.yearRead).filter((y): y is number => y !== null))].sort(
		(a, b) => b - a
	);
export const genres = (items: Book[]) =>
	[...new Set(items.map((b) => b.genre).filter((g): g is string => Boolean(g)))].sort();
export function filterBooks(
	items: Book[],
	year: number | 'all',
	query: string,
	status: 'all' | BookStatus,
	rating: string,
	favorites: boolean,
	genre: string
) {
	const q = query.trim().toLowerCase();
	return items.filter(
		(b) =>
			(year === 'all' || b.yearRead === year) &&
			(status === 'all' || b.status === status) &&
			(!favorites || b.favorite) &&
			(!genre || b.genre === genre) &&
			(rating === 'all' ||
				(rating === 'unrated'
					? b.rating === null
					: b.rating !== null && b.rating >= Number(rating))) &&
			(!q ||
				[b.title, b.author, b.genre, b.review, ...(b.tags ?? [])]
					.filter(Boolean)
					.join(' ')
					.toLowerCase()
					.includes(q))
	);
}
export function sortBooks(items: Book[], sort: SortOption) {
	return [...items].sort((a, b) => {
		if (sort === 'title') return a.title.localeCompare(b.title);
		if (sort === 'author') return a.author.localeCompare(b.author);
		if (sort === 'rating-desc') return (b.rating ?? -1) - (a.rating ?? -1);
		if (sort === 'pages-desc') return (b.pageCount ?? -1) - (a.pageCount ?? -1);
		if (sort === 'date-desc' && a.status !== b.status) {
			if (a.status === 'currently-reading') return -1;
			if (b.status === 'currently-reading') return 1;
		}
		const aDate = a.dateFinished ?? '';
		const bDate = b.dateFinished ?? '';
		return sort === 'date-asc' ? aDate.localeCompare(bDate) : bDate.localeCompare(aDate);
	});
}
