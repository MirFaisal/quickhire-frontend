import { getJobs, getCategories } from "@/lib/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobListingsClient from "./JobListingsClient";

export const metadata = {
  title: "Find Jobs - QuickHire",
  description:
    "Browse and search thousands of job listings. Filter by category, location, and job type to find your perfect role.",
};

export default async function JobsPage({ searchParams }) {
  const params = await searchParams;
  let jobs = [];
  let categories = [];

  try {
    const [jobsData, categoriesData] = await Promise.all([
      getJobs({
        search: params?.search || "",
        category: params?.category || "",
        location: params?.location || "",
      }),
      getCategories(),
    ]);
    jobs = jobsData.data || jobsData || [];
    categories = categoriesData.data || categoriesData || [];
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background-light">
        {/* Page Header */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1192px] px-6 py-12 lg:px-0">
            <h2
              className="font-clash text-[32px] font-semibold leading-[1.2] text-[#25324B] lg:text-[48px] lg:leading-[1.1]"
              style={{ fontFeatureSettings: "'cv11' 1" }}>
              Find your <span className="text-[#26A4FF]">dream job</span>
            </h2>
            <p className="mt-3 text-lg text-neutral-60">
              Find your next career at companies like HubSpot, Nike, and Dropbox
            </p>
          </div>
        </section>

        {/* Jobs Content */}
        <section className="py-10">
          <div className="mx-auto max-w-[1192px] px-6 lg:px-0">
            <JobListingsClient
              initialJobs={jobs}
              categories={categories}
              initialSearch={params?.search || ""}
              initialCategory={params?.category || ""}
              initialLocation={params?.location || ""}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
