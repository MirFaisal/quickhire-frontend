import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import CompanyLogos from "@/components/CompanyLogos";
import ExploreCategory from "@/components/ExploreCategory";
import CTASection from "@/components/CTASection";
import FeaturedJobs from "@/components/FeaturedJobs";
import LatestJobs from "@/components/LatestJobs";
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

        <LatestJobs jobs={latestJobs} />
      </main>
      <Footer />
    </>
  );
}
