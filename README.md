# Portfolio Website

A modern, slick portfolio website built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/).

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or pnpm

### Installation

1.  Navigate to the project directory:
    ```bash
    cd portfolio
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    pnpm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    # or
    pnpm dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

The content is managed via `src/data/resume.ts`. Update this file to change your bio, skills, projects, and social links.

## Deployment

### Vercel (Recommended)

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1.  Push this code to a GitHub repository.
2.  Go to Vercel and import the project.
3.  Click **Deploy**.

### Netlify

You can also deploy to Netlify by connecting your GitHub repository and setting the build command to `npm run build` and publish directory to `.next` (or follow Netlify Next.js adapter instructions).

## Features

- **Modern UI**: Clean, minimal design with dark mode support.
- **Animations**: Smooth scroll reveals using Framer Motion.
- **Responsive**: Fully responsive for all devices.
- **Data-Driven**: Content separated from UI for easy updates.
