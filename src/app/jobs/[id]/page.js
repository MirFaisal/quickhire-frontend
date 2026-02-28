import { getJobById } from "@/lib/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JobTag } from "@/components/JobCard";
import ApplyForm from "./ApplyForm";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export async function generateMetadata({ params }) {
  const { id } = await params;
  try {
    const data = await getJobById(id);
    const job = data.data || data;
    return {
      title: `${job.title} at ${job.company} - QuickHire`,
      description: job.description?.slice(0, 160),
    };
  } catch {
    return {
      title: "Job Not Found - QuickHire",
      description: "The job you are looking for could not be found.",
    };
  }
}

export default async function JobDetailPage({ params }) {
  const { id } = await params;
  let job = null;

  try {
    const data = await getJobById(id);
    job = data.data || data;
  } catch (error) {
    console.error("Failed to fetch job:", error.message);
  }

  if (!job) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-[60vh] items-center justify-center bg-background-light">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-neutral-100">Job Not Found</h1>
            <p className="mt-3 text-neutral-60">
              The job listing you&apos;re looking for doesn&apos;t exist or has been removed.
            </p>
            <Link
              href="/jobs"
              className="mt-6 inline-block rounded-sm bg-primary px-6 py-3 text-base font-bold text-white transition hover:bg-primary/90">
              Browse All Jobs
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const categoryName = typeof job.category === "object" ? job.category?.name : job.category || "";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background-light">
        {/* Breadcrumb + Header */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1192px] px-6 py-10 lg:px-0">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-sm text-neutral-60">
              <Link href="/" className="transition hover:text-primary">
                Home
              </Link>
              <span>/</span>
              <Link href="/jobs" className="transition hover:text-primary">
                Jobs
              </Link>
              <span>/</span>
              <span className="text-neutral-100">{job.title}</span>
            </div>

            {/* Job Header */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-5">
                {/* Company Icon */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-neutral-10 text-2xl font-bold text-primary">
                  {job.company?.[0] || "C"}
                </div>
                <div>
                  <h1 className="text-3xl font-semibold text-neutral-100">{job.title}</h1>
                  <p className="mt-1 text-lg text-neutral-60">
                    {job.company} · {job.location}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <JobTag label={job.type || "Full Time"} />
                    {categoryName && <JobTag label={categoryName} />}
                  </div>
                </div>
              </div>

              {/* Apply Button (Desktop) */}
              <a
                href="#apply"
                className="hidden shrink-0 rounded-sm bg-primary px-8 py-3 text-base font-bold text-white transition hover:bg-primary/90 sm:inline-block">
                Apply Now
              </a>
            </div>
          </div>
        </section>

        {/* Job Content */}
        <section className="py-10">
          <div className="mx-auto max-w-[1192px] px-6 lg:px-0">
            <div className="flex flex-col gap-8 lg:flex-row">
              {/* Main Content */}
              <div className="flex-1">
                {/* Description */}
                <div className="rounded-lg border border-neutral-20 bg-white p-8">
                  <h2 className="mb-4 text-xl font-semibold text-neutral-100">Description</h2>
                  <div className="prose max-w-none text-base leading-relaxed text-neutral-80 whitespace-pre-line">
                    {job.description}
                  </div>
                </div>

                {/* Requirements */}
                {job.requirements && job.requirements.length > 0 && (
                  <div className="mt-6 rounded-lg border border-neutral-20 bg-white p-8">
                    <h2 className="mb-4 text-xl font-semibold text-neutral-100">Requirements</h2>
                    <ul className="list-inside list-disc space-y-2 text-base text-neutral-80">
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Apply Form */}
                <div id="apply" className="mt-6 scroll-mt-6">
                  <ApplyForm jobId={job._id} jobTitle={job.title} />
                </div>
              </div>

              {/* Sidebar */}
              <aside className="w-full shrink-0 lg:w-80">
                {/* Job Overview */}
                <div className="rounded-lg border border-neutral-20 bg-white p-6">
                  <h3 className="mb-5 text-lg font-semibold text-neutral-100">Job Overview</h3>
                  <div className="flex flex-col gap-5">
                    <div>
                      <p className="text-sm text-neutral-60">Job Title</p>
                      <p className="mt-1 font-medium text-neutral-100">{job.title}</p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-60">Company</p>
                      <p className="mt-1 font-medium text-neutral-100">{job.company}</p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-60">Location</p>
                      <p className="mt-1 font-medium text-neutral-100">{job.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-60">Job Type</p>
                      <p className="mt-1 font-medium text-neutral-100">{job.type || "Full Time"}</p>
                    </div>
                    {categoryName && (
                      <div>
                        <p className="text-sm text-neutral-60">Category</p>
                        <p className="mt-1 font-medium text-neutral-100">{categoryName}</p>
                      </div>
                    )}
                    {job.salary && (
                      <div>
                        <p className="text-sm text-neutral-60">Salary</p>
                        <p className="mt-1 font-medium text-neutral-100">{job.salary}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile Apply Button */}
                <a
                  href="#apply"
                  className="mt-4 block w-full rounded-sm bg-primary py-4 text-center text-base font-bold text-white transition hover:bg-primary/90 sm:hidden">
                  Apply Now
                </a>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
