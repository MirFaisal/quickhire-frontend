import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import CompanyLogos from "@/components/CompanyLogos";
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
        <HeroBanner />

        <CompanyLogos />

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
