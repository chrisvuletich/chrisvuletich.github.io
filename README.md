# Christopher Vuletich — Portfolio

Source code for [vuletich.dev](https://vuletich.dev), the personal portfolio of Christopher Vuletich. The site documents selected software projects, including Rocky, TowTruck Alert, and OneTask CLI.

## Built with

- SvelteKit 5 and TypeScript
- Plain CSS with a responsive editorial design system
- `@sveltejs/adapter-static` for static-site generation
- GitHub Pages and GitHub Actions for deployment

## Adding a Book

1. Open `src/lib/data/books.ts` and copy the example object in its header comment.
2. Fill in the required fields, then add optional review, tags, and metadata.
3. Optionally add a local cover under `static/images/books/` and set its path in the book object.
4. Run `npm run check` and `npm run build` before committing and pushing.

## License

This repository contains personal portfolio content. Please do not reuse the written content or visual design as your own.
