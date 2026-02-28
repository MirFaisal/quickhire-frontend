# QuickHire Frontend

Public-facing frontend for the **QuickHire** job board platform. Built with **Next.js 16**, **Tailwind CSS
v4**, and **React 19** — featuring server-side rendering, responsive design, and a clean UI based on Figma
designs.

## Features

- **Landing Page** — Hero section with search, company logos, category explorer, featured jobs, latest jobs,
  and CTA
- **Job Listings** — Browse all jobs with search by keyword, filter by category, and filter by location
- **Job Detail** — Full job description with company overview sidebar and application form
- **Apply Flow** — Submit applications (name, email, resume link, cover note) directly from job pages
- **Server Components** — Pages use Next.js App Router server components for fast initial loads
- **Responsive Design** — Fully responsive across desktop, tablet, and mobile
- **SEO** — Dynamic meta titles/descriptions on every page

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **Epilogue** (body font, Google Fonts)
- **Clash Display** (heading font, Fontshare)

## Getting Started

### Prerequisites

- Node.js 18+
- Backend API running at `http://localhost:5000`

### Installation

```bash
npm install
```

### Environment

Create `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind + design tokens
│   ├── layout.js            # Root layout with fonts & meta
│   ├── loading.js           # Loading spinner
│   ├── not-found.js         # 404 page
│   ├── page.js              # Landing page (server component)
│   └── jobs/
│       ├── page.js           # Job listings (server component)
│       ├── JobListingsClient.js  # Client-side search/filter
│       └── [id]/
│           ├── page.js       # Job detail (server component)
│           └── ApplyForm.js  # Application form (client component)
├── components/
│   ├── Navbar.js            # Navigation bar
│   ├── Footer.js            # Footer
│   ├── HeroSearch.js        # Hero search form
│   ├── JobCard.js           # FeaturedJobCard + LatestJobCard
│   ├── CategoryCard.js      # Category card
│   └── icons.js             # SVG icon components
└── lib/
    └── api.js               # API utility functions
```

## Design System

| Token         | Value     |
| ------------- | --------- |
| Primary       | `#4640DE` |
| Secondary     | `#CCCCF5` |
| Neutral 100   | `#25324B` |
| Neutral 80    | `#515B6F` |
| Neutral 60    | `#7C8493` |
| Background    | `#F8F8FD` |
| Accent Green  | `#56CDAD` |
| Accent Yellow | `#FFB836` |
| Accent Red    | `#FF6550` |
| Accent Blue   | `#26A4FF` |

## API Endpoints Used

| Method | Endpoint            | Description                                                  |
| ------ | ------------------- | ------------------------------------------------------------ |
| GET    | `/api/jobs`         | List all jobs (supports `?search`, `?category`, `?location`) |
| GET    | `/api/jobs/:id`     | Get single job                                               |
| GET    | `/api/categories`   | List all categories                                          |
| POST   | `/api/applications` | Submit application                                           |
