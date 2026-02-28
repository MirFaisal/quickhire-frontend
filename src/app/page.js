import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import CompanyLogos from "@/components/CompanyLogos";
import ExploreCategory from "@/components/ExploreCategory";
import CTASection from "@/components/CTASection";
import FeaturedJobs from "@/components/FeaturedJobs";
import { LatestJobCard } from "@/components/JobCard";
import { ArrowRightIcon } from "@/components/icons";
import { getJobs } from "@/lib/api";

export const metadata = {
  title: "QuickHire - Discover More Than 5000+ Jobs",
  description:
    "QuickHire is a great platform for job seekers passionate about startups. Find your dream job easier with thousands of listings in design, marketing, technology, and more.",
};

export default async function HomePage() {
  let jobs = [];

  try {
    const jobsData = await getJobs();
    jobs = jobsData.data || jobsData || [];
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

        <ExploreCategory />

        <CTASection />

        <FeaturedJobs jobs={featuredJobs} />

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
