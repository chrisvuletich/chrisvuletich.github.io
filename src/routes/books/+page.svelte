<script lang="ts">
	import BookCard from '$lib/components/BookCard.svelte';
	import { books } from '$lib/data/books';
	import { readingGoals } from '$lib/data/readingGoals';
	import { filterBooks, genres, sortBooks, years } from '$lib/utils/bookFilters';
	import { stats } from '$lib/utils/bookStats';
	import type { BookStatus, SortOption } from '$lib/types/book';

	const availableYears = years(books);
	let selectedStatsYear = $state<number | 'all'>(availableYears[0] ?? 'all');
	let selectedLibraryYear = $state<number | 'all'>(availableYears[0] ?? 'all');
	let librarySearch = $state('');
	let libraryStatus = $state<'all' | BookStatus>('all');
	let libraryRating = $state('all');
	let libraryFavorites = $state(false);
	let libraryGenre = $state('');
	let librarySort = $state<SortOption>('date-desc');
	let expanded = $state<string | null>(null);
	const booksForStats = $derived(
		selectedStatsYear === 'all'
			? books
			: books.filter((book) => book.yearRead === selectedStatsYear)
	);
	const booksForLibraryYear = $derived(
		selectedLibraryYear === 'all'
			? books
			: books.filter((book) => book.yearRead === selectedLibraryYear)
	);
	const filteredLibraryBooks = $derived(
		sortBooks(
			filterBooks(
				books,
				selectedLibraryYear,
				librarySearch,
				libraryStatus,
				libraryRating,
				libraryFavorites,
				libraryGenre
			),
			librarySort
		)
	);
	const summary = $derived(stats(booksForStats));
	const nightstandBooks = $derived(books.filter((book) => book.status === 'currently-reading'));
	function clearLibraryFilters() {
		selectedLibraryYear = availableYears[0] ?? 'all';
		librarySearch = '';
		libraryStatus = 'all';
		libraryRating = 'all';
		libraryFavorites = false;
		libraryGenre = '';
		librarySort = 'date-desc';
	}
</script>

<svelte:head
	><title>Books | Christopher Vuletich</title><meta
		name="description"
		content="A personal reading journal containing books Christopher Vuletich has read, ratings, reviews, and yearly reading statistics."
	/><link rel="canonical" href="https://vuletich.dev/books" /><meta
		property="og:title"
		content="Books | Christopher Vuletich"
	/><meta
		property="og:description"
		content="A personal reading journal with books, ratings, reviews, and yearly statistics."
	/><meta property="og:url" content="https://vuletich.dev/books" /></svelte:head
>
<main class="books-page page">
	<header class="books-intro">
		<p class="eyebrow">Reading journal</p>
		<h1>Books</h1>
		<p>
			A record of the books I’ve read, the stories that stayed with me, and what I’m reading now.
		</p>
	</header>
	<section class="books-range" aria-label="Statistics period">
		<div class="year-picker">
			<label for="stats-year">Statistics Period</label><select
				id="stats-year"
				bind:value={selectedStatsYear}
				>{#each availableYears as option (option)}<option value={option}>{option}</option
					>{/each}<option value="all">All Time</option></select
			>
		</div>
		<p>{selectedStatsYear === 'all' ? 'All-time reading' : `${selectedStatsYear} reading`}</p>
	</section>
	<section class="book-stats" aria-label="Reading statistics">
		<div><span>Books finished</span><strong>{summary.finished}</strong></div>
		<div>
			<span>Pages read</span><strong>{summary.pages || '—'}</strong>{#if summary.unknownPages}<small
					>Known page total</small
				>{/if}
		</div>
		<div>
			<span>Average rating</span><strong
				>{summary.average === null ? '—' : summary.average.toFixed(1)}</strong
			>
		</div>
		<div><span>Favorites</span><strong>{summary.favorites}</strong></div>
		<div><span>Currently reading</span><strong>{summary.current}</strong></div>
	</section>
	{#if selectedStatsYear !== 'all' && readingGoals[selectedStatsYear]}<section class="reading-goal">
			<span>{summary.finished} of {readingGoals[selectedStatsYear]} books</span><progress
				value={summary.finished}
				max={readingGoals[selectedStatsYear]}
				>{summary.finished} of {readingGoals[selectedStatsYear]}</progress
			>
		</section>{/if}
	{#if nightstandBooks.length}<section class="nightstand" aria-labelledby="nightstand-title">
			<div>
				<p class="eyebrow">A warm corner</p>
				<h2 id="nightstand-title">On the nightstand</h2>
				<p>Books currently keeping me company.</p>
			</div>
			<ul>
				{#each nightstandBooks as book (book.id)}<li
						style={`--book-accent:${book.accent ?? '#8c684b'}`}
					>
						<div class="nightstand__spine">
							{#if book.cover}<img src={book.cover} alt="" />{:else}<span>{book.title}</span>{/if}
						</div>
						<p><strong>{book.title}</strong><span>{book.author}</span></p>
					</li>{/each}
			</ul>
		</section>{/if}
	<section class="library" aria-labelledby="library-title">
		<div class="library__heading">
			<div>
				<p class="eyebrow">Library index</p>
				<h2 id="library-title">
					{filteredLibraryBooks.length}
					{filteredLibraryBooks.length === 1 ? 'book' : 'books'}
				</h2>
			</div>
		</div>
		<details class="library-filters">
			<summary>Filters</summary>
			<div class="book-controls">
				<label
					>Search <input
						bind:value={librarySearch}
						placeholder="Title, author, genre, or tag"
					/></label
				>{#if librarySearch}<button type="button" onclick={() => (librarySearch = '')}
						>Clear search</button
					>{/if}<label
					>Year Read <select bind:value={selectedLibraryYear}
						><option value="all">All Years</option>{#each availableYears as option (option)}<option
								value={option}>{option}</option
							>{/each}</select
					></label
				><label
					>Status <select bind:value={libraryStatus}
						><option value="all">All</option><option value="read">Read</option><option
							value="currently-reading">Currently Reading</option
						><option value="next-up">Next Up</option><option value="paused">Paused</option><option
							value="did-not-finish">Did Not Finish</option
						></select
					></label
				>
				<details class="more-filters">
					<summary>More Filters</summary><label
						>Rating <select bind:value={libraryRating}
							><option value="all">All ratings</option><option value="5">5 stars</option><option
								value="4">4 stars and up</option
							><option value="3">3 stars and up</option><option value="unrated">Unrated</option
							></select
						></label
					><label
						>Genre <select bind:value={libraryGenre}
							><option value="">All genres</option
							>{#each genres(booksForLibraryYear) as item (item)}<option value={item}>{item}</option
								>{/each}</select
						></label
					>
				</details>
				><label
					>Sort <select bind:value={librarySort}
						><option value="date-desc">Date finished: newest</option><option value="date-asc"
							>Date finished: oldest</option
						><option value="rating-desc">Rating: highest</option><option value="title"
							>Title: A–Z</option
						><option value="author">Author: A–Z</option><option value="pages-desc"
							>Pages: highest</option
						></select
					></label
				><label class="favorite-filter"
					><input type="checkbox" bind:checked={libraryFavorites} /> Favorites only</label
				><button type="button" onclick={clearLibraryFilters}>Clear filters</button>
			</div>
		</details>
		<div class="book-grid">
			{#each filteredLibraryBooks as book (book.id)}<BookCard
					{book}
					expanded={expanded === book.id}
					onToggle={() => (expanded = expanded === book.id ? null : book.id)}
				/>{:else}<p class="books-empty">
					No books match this view{librarySearch ? ` for “${librarySearch}”` : ''}. Try another
					filter.
				</p>{/each}
		</div>
	</section>
</main>
