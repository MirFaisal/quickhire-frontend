import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSearch from "@/components/HeroSearch";
import CategoryCard from "@/components/CategoryCard";
import { FeaturedJobCard, LatestJobCard } from "@/components/JobCard";
import { ArrowRightIcon } from "@/components/icons";
import { getJobs, getCategories } from "@/lib/api";

export const metadata = {
  title: "QuickHire - Discover More Than 5000+ Jobs",
  description:
    "QuickHire is a great platform for job seekers passionate about startups. Find your dream job easier with thousands of listings in design, marketing, technology, and more.",
};

export default async function HomePage() {
  let jobs = [];
  let categories = [];

  try {
    const [jobsData, categoriesData] = await Promise.all([getJobs(), getCategories()]);
    jobs = jobsData.data || jobsData || [];
    categories = categoriesData.data || categoriesData || [];
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
  }

  const featuredJobs = jobs.slice(0, 8);
  const latestJobs = jobs.slice(0, 8);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1192px] px-6 pt-16 pb-20 lg:px-0">
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between">
              {/* Left Content */}
              <div className="max-w-xl text-center lg:text-left">
                <h1 className="font-clash text-5xl font-semibold leading-tight text-neutral-100 sm:text-6xl lg:text-[72px] lg:leading-[1.1]">
                  Discover
                  <br />
                  more than
                  <br />
                  <span className="text-secondary">5000+ Jobs</span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-neutral-60">
                  Great platform for the job seeker that searching for new career heights and passionate about
                  startups.
                </p>

                {/* Search Bar */}
                <div className="mt-8">
                  <HeroSearch />
                </div>

                {/* Popular Tags */}
                <p className="mt-6 text-base text-neutral-60">
                  Popular :{" "}
                  <span className="text-neutral-100">UI Designer, UX Researcher, Android, Admin</span>
                </p>
              </div>

              {/* Right Hero Image Placeholder */}
              <div className="hidden lg:block">
                <div className="relative h-[400px] w-[500px]">
                  {/* Decorative gradient pattern */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-80 w-80 rounded-full bg-tertiary/50"></div>
                  </div>
                  <div className="absolute top-8 right-8 rounded-xl bg-white p-4 shadow-lg">
                    <p className="text-3xl font-bold text-primary">5000+</p>
                    <p className="text-sm text-neutral-60">Job Openings</p>
                  </div>
                  <div className="absolute bottom-8 left-8 rounded-xl bg-white p-4 shadow-lg">
                    <p className="text-3xl font-bold text-accent-green">200+</p>
                    <p className="text-sm text-neutral-60">Companies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Logos Section */}
        <section className="bg-white py-10">
          <div className="mx-auto max-w-[1192px] px-6 lg:px-0">
            <p className="mb-8 text-center text-lg text-neutral-60">Companies we helped grow</p>
            <div className="flex flex-wrap items-center justify-center gap-10 opacity-50 grayscale md:gap-16">
              {["Vodafone", "Intel", "Tesla", "AMD", "Talkit"].map((name) => (
                <span key={name} className="text-2xl font-bold text-neutral-100">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Explore by Category */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1192px] px-6 lg:px-0">
            <div className="mb-12 flex items-end justify-between">
              <h2 className="font-clash text-4xl font-semibold text-neutral-100 sm:text-5xl">
                Explore by <span className="text-secondary">category</span>
              </h2>
              <Link
                href="/jobs"
                className="hidden items-center gap-2 text-base font-semibold text-primary transition hover:underline sm:flex">
                Show all jobs <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categories.length > 0
                ? categories.slice(0, 8).map((cat, i) => (
                    <CategoryCard
                      key={cat._id}
                      category={cat}
                      jobCount={
                        jobs.filter((j) => {
                          const catId = typeof j.category === "object" ? j.category?._id : j.category;
                          return catId === cat._id;
                        }).length
                      }
                      highlight={i === 2}
                    />
                  ))
                : [
                    "Design",
                    "Sales",
                    "Marketing",
                    "Finance",
                    "Technology",
                    "Engineering",
                    "Business",
                    "Human Resource",
                  ].map((name, i) => (
                    <CategoryCard
                      key={name}
                      category={{ _id: name, name }}
                      jobCount={0}
                      highlight={i === 2}
                    />
                  ))}
            </div>
            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/jobs"
                className="inline-flex items-center gap-2 text-base font-semibold text-primary">
                Show all jobs <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-[1192px] px-6 text-center lg:px-0">
            <h2 className="font-clash text-4xl font-semibold text-white sm:text-5xl">
              Start posting
              <br />
              jobs today
            </h2>
            <p className="mt-4 text-lg text-white/80">Start posting jobs for only $10.</p>
            <Link
              href="/"
              className="mt-8 inline-block rounded-sm bg-white px-8 py-4 text-base font-bold text-primary transition hover:bg-neutral-10">
              Sign Up For Free
            </Link>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1192px] px-6 lg:px-0">
            <div className="mb-12 flex items-end justify-between">
              <h2 className="font-clash text-4xl font-semibold text-neutral-100 sm:text-5xl">
                Featured <span className="text-secondary">jobs</span>
              </h2>
              <Link
                href="/jobs"
                className="hidden items-center gap-2 text-base font-semibold text-primary transition hover:underline sm:flex">
                Show all jobs <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
            {featuredJobs.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {featuredJobs.map((job) => (
                  <FeaturedJobCard key={job._id} job={job} />
                ))}
              </div>
            ) : (
              <p className="text-center text-neutral-60">No jobs available yet. Check back soon!</p>
            )}
          </div>
        </section>

        {/* Latest Jobs Open */}
        <section className="bg-background-light py-16">
          <div className="mx-auto max-w-[1192px] px-6 lg:px-0">
            <div className="mb-12 flex items-end justify-between">
              <h2 className="font-clash text-4xl font-semibold text-neutral-100 sm:text-5xl">
                Latest <span className="text-secondary">jobs open</span>
              </h2>
              <Link
                href="/jobs"
                className="hidden items-center gap-2 text-base font-semibold text-primary transition hover:underline sm:flex">
                Show all jobs <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
            {latestJobs.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {latestJobs.map((job) => (
                  <LatestJobCard key={job._id} job={job} />
                ))}
              </div>
            ) : (
              <p className="text-center text-neutral-60">No jobs available yet. Check back soon!</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
