# Ramdi Labs website

Initial technical foundation for the official Ramdi Labs website. Ramdi Labs is
a technology studio founded in Acapulco, Mexico, focused on business software,
AI automation, and digital content solutions.

This repository currently contains a minimal temporary page. It is not the
finished website.

## Stack and requirements

- Next.js 16 with the App Router
- React 19
- TypeScript with strict type checking
- Tailwind CSS 4
- ESLint 9 with the Next.js configuration
- Node.js 20.9 or newer (Node.js 24.4.1 was used for the initial setup)
- npm and `package-lock.json`

## Install dependencies

Once the lockfile exists, install the exact dependency versions with:

```bash
npm ci
```

## Commands

```bash
npm run dev        # Start the local development server
npm run build      # Create a production build with webpack
npm run start      # Serve the production build
npm run lint       # Run ESLint
npm run typecheck  # Check TypeScript without emitting files
```

Open [http://localhost:3000](http://localhost:3000) after starting development.

## Structure

```text
src/
  app/
    globals.css  # Global styles and provisional color tokens
    layout.tsx   # Root document, metadata, and language
    page.tsx     # Temporary homepage
  components/   # Reusable components as the website grows
public/          # Static assets
```

Root configuration files define Next.js, TypeScript, Tailwind CSS, and ESLint
behavior. No environment variables are currently required.
