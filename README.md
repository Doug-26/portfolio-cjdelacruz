# Profile Portfolio - Christian Jay P. De La Cruz

Personal profile portfolio built with Angular 22. This site highlights experience, skills, projects, education, and contact details in a single-page layout.

## Tech Stack

- Angular 22.0.8
- TypeScript 6.0.3
- RxJS 7.8.x
- Tailwind CSS 4 (tooling available in dependencies)

## Features

- Standalone Angular component architecture
- Section-based portfolio layout:
	- Hero
	- About
	- Skills
	- Experience
	- Projects
	- Education
	- Contact
- Centralized portfolio data model in src/app/data/profile.ts

## Project Structure

Key files and folders:

- src/app/app.html - root composition of all sections
- src/app/components/ - reusable section components
- src/app/data/profile.ts - profile content and typed interfaces
- src/app/directives/reveal.directive.ts - reveal animation behavior

## Prerequisites

- Node.js 20+ (project currently verified with Node.js 26.5.0)
- npm 11+

## Getting Started

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm start
```

Open in browser:

```text
http://localhost:4200
```

## Available Scripts

- npm start - run Angular dev server
- npm run build - create production build
- npm run watch - build in watch mode (development config)
- npm test - run unit tests

## Build Output

Production build artifacts are generated in:

```text
dist/profile-portfolio
```

## Angular Version

This project is upgraded to Angular 22.

Quick version check:

```bash
ng version
```

Expected core versions:

- @angular/core: 22.0.8
- @angular/cli: 22.0.8

