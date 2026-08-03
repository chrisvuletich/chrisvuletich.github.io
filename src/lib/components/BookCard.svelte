<script lang="ts">
	import type { Book } from '$lib/types/book';
	let {
		book,
		expanded = false,
		onToggle
	}: { book: Book; expanded?: boolean; onToggle?: () => void } = $props();
	const rating = $derived(book.rating === null ? 'Unrated' : `★ ${book.rating.toFixed(1)}`);
	const detailId = $derived(`book-details-${book.id}`);
</script>

<article class="book-card" style={`--book-accent:${book.accent ?? '#7b6351'}`}>
	<button
		class="book-card__trigger"
		type="button"
		aria-expanded={expanded}
		aria-controls={detailId}
		onclick={onToggle}
	>
		<div class="book-cover">
			{#if book.cover}<img
					src={book.cover}
					alt={book.coverAlt ?? `Cover of ${book.title} by ${book.author}`}
				/>{:else}<span>{book.title}</span><small>{book.author}</small>{/if}
		</div>
		<div class="book-card__copy">
			<p class="book-card__meta">
				{book.status === 'read'
					? 'Read'
					: book.status === 'currently-reading'
						? 'Currently reading'
						: book.status === 'next-up'
							? 'Next up'
							: book.status === 'paused'
								? 'Paused'
								: 'Did not finish'}{#if book.favorite}<span aria-label="Favorite">★ Favorite</span
					>{/if}
			</p>
			<h2>{book.title}</h2>
			<p class="book-card__author">{book.author}</p>
			<p class="book-card__rating">
				{rating}{#if book.yearRead}
					<span>· {book.yearRead}</span>{/if}
			</p>
			<span class="book-card__cue">View book →</span>
		</div>
	</button>
	{#if expanded}<section class="book-details" id={detailId}>
			<div class="book-details__cover">
				{#if book.cover}<img src={book.cover} alt="" />{/if}
			</div>
			<div>
				<p class="eyebrow">Reading journal entry</p>
				<h3>{book.title}</h3>
				<p class="book-card__author">{book.author}</p>
				{#if book.review}<p class="book-details__review">{book.review}</p>{/if}
				<dl>
					{#if book.status}<div>
							<dt>Status</dt>
							<dd>{book.status.replaceAll('-', ' ')}</dd>
						</div>{/if}{#if book.yearRead}<div>
							<dt>Read</dt>
							<dd>{book.yearRead}</dd>
						</div>{/if}{#if book.dateFinished}<div>
							<dt>Finished</dt>
							<dd>{book.dateFinished}</dd>
						</div>{/if}{#if book.pageCount}<div>
							<dt>Pages</dt>
							<dd>{book.pageCount}</dd>
						</div>{/if}{#if book.genre}<div>
							<dt>Genre</dt>
							<dd>{book.genre}</dd>
						</div>{/if}{#if book.format}<div>
							<dt>Format</dt>
							<dd>{book.format}</dd>
						</div>{/if}{#if book.ownership}<div>
							<dt>Ownership</dt>
							<dd>{book.ownership}</dd>
						</div>{/if}{#if book.reread}<div>
							<dt>Reread</dt>
							<dd>Yes</dd>
						</div>{/if}
				</dl>
				{#if book.tags?.length}<p class="book-details__tags">
						{book.tags.join(' · ')}
					</p>{/if}{#if book.link}<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
					<a class="text-link" href={book.link}>Visit link →</a>{/if}
			</div>
		</section>{/if}
</article>
