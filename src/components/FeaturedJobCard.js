import Link from "next/link";
import JobTag from "./JobTag";
import CompanyLogo from "./CompanyLogo";

/* ═════════════════════════════════════════════════════════
   FeaturedJobCard
   Card: bg-white border-[#d6ddeb] p-[24px] flex-col gap-[16px]
   ═════════════════════════════════════════════════════════ */
export default function FeaturedJobCard({ job }) {
  const categoryName = typeof job.category === "object" ? job.category?.name : job.category || "";

  return (
    <Link href={`/jobs/${job._id}`} className="block">
      <div className="flex h-full flex-col items-start gap-[16px] border border-[#D6DDEB] bg-white p-[16px]">
        {/* Header: Logo + Type Tag */}
        <div className="flex w-full items-start justify-between">
          <CompanyLogo company={job.company} size={80} />
          <div className="flex shrink-0 items-center justify-center border border-[#4640DE] px-[12px] py-[4px]">
            <span className="whitespace-nowrap text-center text-[16px] font-normal leading-[1.6] text-[#4640DE]">
              {job.type || "Full Time"}
            </span>
          </div>
        </div>

        {/* Title block */}
        <div className="flex flex-col items-start gap-[2px]">
          <p className="text-[18px] font-semibold leading-[1.6] text-[#25324B]">{job.title}</p>
          <div className="flex items-center gap-[8px]">
            <span className="text-[14px] font-normal leading-[1.6] text-[#515B6F]">{job.company}</span>
            <span className="inline-block h-[4px] w-[4px] shrink-0 rounded-full bg-[#515B6F]" />
            <span className="text-[14px] font-normal leading-[1.6] text-[#515B6F]">{job.location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="line-clamp-2 text-[16px] font-normal leading-[1.6] text-[#7C8493]">
          {job.description || `${job.company} is looking for ${job.title} to help team ...`}
        </p>

        {/* Tags */}
        <div className="mt-auto flex items-start gap-[8px]">
          {categoryName && <JobTag label={categoryName} />}
        </div>
      </div>
    </Link>
  );
}
