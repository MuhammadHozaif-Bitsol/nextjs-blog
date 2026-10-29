# Next Blog

A small blog built with the Next.js App Router. It fetches posts from the JSONPlaceholder API, lists them, and shows each post on its own page.

## Tech stack

- Next.js 16 (App Router, `cacheComponents`, React Compiler)
- React 19
- TypeScript
- Tailwind CSS 4

## Features

- Home page with a shared navbar (Home, Posts) and footer
- `/posts` lists all posts from `https://jsonplaceholder.typicode.com/posts`; the fetch is cached with the `"use cache"` directive
- `/posts/[id]` shows a single post and returns a 404 page when the post is not found

## Getting started

```bash
npm install
npm run dev      # start the dev server at http://localhost:3000
npm run build    # production build
npm run start    # run the production build
npm run lint     # run ESLint
```

No environment variables are required.

## Project structure

```
app/
  layout.tsx          Root layout with Navbar and Footer
  page.tsx            Home page
  posts/page.tsx      Post list
  posts/[id]/page.tsx Post detail
components/           Navbar and Footer
```
