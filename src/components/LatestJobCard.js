import Link from "next/link";
import JobTag from "./JobTag";
import CompanyLogo from "./CompanyLogo";

/* ═════════════════════════════════════════════════════════
   LatestJobCard
   Card: bg-white flex gap-[24px] px-[40px] py-[24px]
   ═════════════════════════════════════════════════════════ */
export default function LatestJobCard({ job }) {
  const categoryName = typeof job.category === "object" ? job.category?.name : job.category || "";

  return (
    <Link href={`/jobs/${job._id}`} className="block">
      <div className="flex flex-col items-start gap-[24px] bg-white p-[16px] lg:flex-row lg:px-[40px] lg:py-[24px]">
        {/* Company Logo */}
        <CompanyLogo company={job.company} size={80} />

        {/* Content */}
        <div className="flex flex-col items-start gap-[8px]">
          {/* Job Title */}
          <p className="text-[20px] font-semibold leading-[1.2] text-[#25324B]">{job.title}</p>

          {/* Company · Location */}
          <div className="flex h-[27px] items-center gap-[8px]">
            <span className="text-[16px] font-normal leading-[1.6] text-[#515B6F]">{job.company}</span>
            <span className="inline-block h-[4px] w-[4px] shrink-0 rounded-full bg-[#515B6F]" />
            <span className="text-[16px] font-normal leading-[1.6] text-[#515B6F]">{job.location}</span>
          </div>

          {/* Tags: filled type + divider + outline category tags */}
          <div className="flex items-start gap-[8px]">
            <JobTag label={job.type || "Full-Time"} />
            {/* Vertical divider */}
            <div className="w-px self-stretch bg-[#D6DDEB]" />
            {categoryName && <JobTag label={categoryName} variant="outline" />}
          </div>
        </div>
      </div>
    </Link>
  );
}
