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
- **Modular Components** — Reusable section headers, job cards, category cards, and icon system

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **Swiper 11** (carousels)
- **Epilogue** (body font, Google Fonts)
- **Clash Display** (heading font, Fontshare)

## Getting Started

### Prerequisites

- Node.js 18+
- QuickHire Backend API — [deployed](https://quickhire-backend-xs81.onrender.com) or running locally

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/MirFaisal/QuickHire-frontend.git
cd quickhire-frontend

# 2. Install dependencies
npm install
```

### Environment

Create `.env.local`:

```
NEXT_PUBLIC_API_URL=https://quickhire-backend-xs81.onrender.com/api
```

> For local development, use `http://localhost:5000/api` instead.

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
│   ├── globals.css               # Tailwind v4 + design tokens
│   ├── layout.js                 # Root layout with fonts & meta
│   ├── loading.js                # Loading spinner
│   ├── not-found.js              # 404 page
│   ├── page.js                   # Landing page (server component)
│   └── jobs/
│       ├── page.js               # Job listings (server component)
│       ├── JobListingsClient.js  # Client-side search/filter with debounce
│       └── [id]/
│           ├── page.js           # Job detail (server component)
│           └── ApplyForm.js      # Application form (client component)
├── components/
│   ├── Navbar.js                 # Navigation bar with mobile hamburger menu
│   ├── Footer.js                 # Site footer with links
│   ├── HeroBanner.js             # Hero section with background pattern & image
│   ├── HeroSearch.js             # Search bar in hero section
│   ├── CompanyLogos.js           # Company logo strip
│   ├── ExploreCategory.js        # Category explorer section (Swiper carousel on mobile)
│   ├── CategoryCards.js          # CategoryCard + MobileCategoryCard components
│   ├── FeaturedJobs.js           # Featured jobs section
│   ├── LatestJobs.js             # Latest jobs section
│   ├── CTASection.js             # Call-to-action section
│   ├── DashboardMockup.js        # CSS-only dashboard illustration for CTA
│   ├── SectionHeader.js          # Reusable section header with "Show all" link
│   ├── JobCard.js                # Barrel re-export for job card components
│   ├── FeaturedJobCard.js        # Featured job card component
│   ├── LatestJobCard.js          # Latest job card component
│   ├── JobTag.js                 # Tag with category-based color system
│   ├── CompanyLogo.js            # Deterministic company logo generator
│   └── icons.js                  # SVG icon components (ArrowRight, Search, Map, etc.)
└── lib/
    └── api.js                    # API utility functions (getJobs, getJobById, getCategories, submitApplication)
```

## Design System

| Token         | Value     |
| ------------- | --------- |
| Primary       | `#4640DE` |
| Secondary     | `#CCCCF5` |
| Neutral 100   | `#25324B` |
| Neutral 80    | `#515B6F` |
| Neutral 60    | `#7C8493` |
| Neutral 20    | `#D6DDEB` |
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

## Author

**Mir Faisal Ahmad**
