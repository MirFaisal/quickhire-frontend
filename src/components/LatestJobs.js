import Link from "next/link";
import { LatestJobCard } from "./JobCard";
import { ArrowRightIcon } from "./icons";

/* ══════════════════════════════════════════════════════════════
   Latest Jobs Open
   BG: #F8F8FD with diagonal line pattern on right
   ══════════════════════════════════════════════════════════════ */
export default function LatestJobs({ jobs = [] }) {
  const latestJobs = jobs.slice(0, 8);

  return (
    <section className="relative overflow-hidden bg-[#F8F8FD]">
      {/* ── Decorative diagonal pattern (right side) ── */}
      <svg
        className="pointer-events-none absolute right-[-100px] top-[83px] hidden h-[794px] w-[860px] lg:block"
        viewBox="0 0 860 794"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true">
        <g opacity="0.4" stroke="#CCCCF5" strokeWidth="2" strokeDasharray="10 10">
          <line x1="0" y1="0" x2="860" y2="794" />
          <line x1="100" y1="0" x2="960" y2="794" />
          <line x1="200" y1="0" x2="1060" y2="794" />
          <line x1="300" y1="0" x2="1160" y2="794" />
          <line x1="-100" y1="200" x2="760" y2="994" />
          <line x1="-100" y1="400" x2="760" y2="1194" />
          <line x1="400" y1="0" x2="1260" y2="794" />
          <line x1="500" y1="0" x2="1360" y2="794" />
          <line x1="600" y1="0" x2="1460" y2="794" />
          <line x1="0" y1="794" x2="860" y2="0" />
          <line x1="100" y1="794" x2="960" y2="0" />
          <line x1="200" y1="794" x2="1060" y2="0" />
          <line x1="300" y1="794" x2="1160" y2="0" />
          <line x1="400" y1="794" x2="1260" y2="0" />
          <line x1="500" y1="794" x2="1360" y2="0" />
          <line x1="600" y1="794" x2="1460" y2="0" />
          <line x1="-100" y1="594" x2="760" y2="-200" />
          <line x1="-100" y1="394" x2="760" y2="-400" />
        </g>
      </svg>

      <div className="relative z-10 mx-auto max-w-[1440px] px-[16px] py-[40px] lg:px-[124px] lg:py-[72px]">
        <div className="flex flex-col gap-[24px] lg:gap-[48px]">
          {/* ── Title Row ── */}
          <div className="flex items-end justify-between">
            <h2
              className="font-clash text-[32px] font-semibold leading-[1.2] text-[#25324B] lg:text-[48px]"
              style={{ fontFeatureSettings: "'cv11' 1" }}>
              Latest <span className="text-[#26A4FF]">jobs open</span>
            </h2>
            <Link href="/jobs" className="hidden items-center gap-[16px] sm:flex">
              <span className="text-[16px] font-semibold leading-[1.6] text-[#4640DE]">Show all jobs</span>
              <span className="text-[#4640DE]">
                <ArrowRightIcon className="h-6 w-6" />
              </span>
            </Link>
          </div>

          {/* ── Job Cards: 2 columns ── */}
          {latestJobs.length > 0 ? (
            <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2 lg:gap-x-[32px] lg:gap-y-[16px]">
              {latestJobs.map((job) => (
                <LatestJobCard key={job._id} job={job} />
              ))}
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
              <ArrowRightIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
