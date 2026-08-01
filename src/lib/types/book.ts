export type BookStatus = 'read' | 'currently-reading' | 'paused' | 'did-not-finish';
export type BookFormat = 'kindle' | 'hardcover' | 'paperback' | 'audiobook' | 'other';
export type Ownership = 'own' | 'borrowed' | 'library' | 'digital' | 'unknown';

export type Book = {
	id: string;
	title: string;
	author: string;
	yearRead: number | null;
	pageCount: number | null;
	rating: number | null;
	status: BookStatus;
	dateFinished?: string;
	genre?: string;
	tags?: string[];
	format?: BookFormat;
	cover?: string;
	coverAlt?: string;
	review?: string;
	favorite?: boolean;
	reread?: boolean;
	ownership?: Ownership;
	link?: string;
	accent?: string;
	currentPage?: number;
	startedAt?: string;
};

export type SortOption =
	'date-desc' | 'date-asc' | 'rating-desc' | 'title' | 'author' | 'pages-desc';
