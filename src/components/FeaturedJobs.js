import Link from "next/link";
import { FeaturedJobCard } from "./JobCard";

/* ── Arrow Right SVG ── */
function ArrowRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 12H19M19 12L12 5M19 12L12 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FeaturedJobs({ jobs = [] }) {
  const featuredJobs = jobs.slice(0, 8);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-6 pb-[72px] lg:px-[124px]">
        <div className="flex flex-col gap-[48px]">
          {/* ── Title Row ── */}
          <div className="flex items-end justify-between">
            <h2
              className="font-clash text-[32px] font-semibold leading-[1.1] text-[#25324B] sm:text-[40px] lg:text-[48px]"
              style={{ fontFeatureSettings: "'cv11' 1" }}>
              Featured <span className="text-[#26A4FF]">jobs</span>
            </h2>
            <Link href="/jobs" className="hidden items-center gap-[16px] sm:flex">
              <span className="text-[16px] font-semibold leading-[1.6] text-[#4640DE]">Show all jobs</span>
              <span className="text-[#4640DE]">
                <ArrowRight />
              </span>
            </Link>
          </div>

          {/* ── Job Cards Grid: 2 rows × 4 cols ── */}
          {featuredJobs.length > 0 ? (
            <div className="flex flex-col gap-[32px]">
              {/* Row 1 */}
              <div className="grid grid-cols-1 gap-[32px] sm:grid-cols-2 lg:grid-cols-4">
                {featuredJobs.slice(0, 4).map((job) => (
                  <FeaturedJobCard key={job._id} job={job} />
                ))}
              </div>
              {/* Row 2 */}
              {featuredJobs.length > 4 && (
                <div className="grid grid-cols-1 gap-[32px] sm:grid-cols-2 lg:grid-cols-4">
                  {featuredJobs.slice(4, 8).map((job) => (
                    <FeaturedJobCard key={job._id} job={job} />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <p className="text-center text-[16px] text-[#7C8493]">No jobs available yet. Check back soon!</p>
          )}

          {/* Mobile "Show all jobs" */}
          <div className="text-center sm:hidden">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-[16px] text-[16px] font-semibold text-[#4640DE]">
              Show all jobs
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
