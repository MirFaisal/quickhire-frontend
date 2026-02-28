import Link from "next/link";

const tagColors = {
  "Full Time": "border-primary bg-primary/10 text-primary",
  "Part Time": "border-accent-green bg-accent-green/10 text-accent-green",
  Marketing: "border-accent-yellow bg-accent-yellow/10 text-accent-yellow",
  Design: "border-accent-red bg-accent-red/10 text-accent-red",
  Business: "border-accent-purple bg-accent-purple/10 text-accent-purple",
  Technology: "border-accent-blue bg-accent-blue/10 text-accent-blue",
  Engineering: "border-accent-red bg-accent-red/10 text-accent-red",
  Finance: "border-accent-green bg-accent-green/10 text-accent-green",
  Sales: "border-accent-yellow bg-accent-yellow/10 text-accent-yellow",
  "Human Resource": "border-accent-purple bg-accent-purple/10 text-accent-purple",
};

function getTagColor(tag) {
  return tagColors[tag] || "border-primary bg-primary/10 text-primary";
}

export function JobTag({ label }) {
  return (
    <span
      className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold ${getTagColor(label)}`}>
      {label}
    </span>
  );
}

export function FeaturedJobCard({ job }) {
  const categoryName = typeof job.category === "object" ? job.category?.name : job.category || "";

  return (
    <Link href={`/jobs/${job._id}`} className="group block">
      <div className="rounded-lg border border-neutral-20 p-6 transition hover:border-primary hover:shadow-md">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-10 text-lg font-bold text-primary">
            {job.company?.[0] || "C"}
          </div>
          <JobTag label={job.type || "Full Time"} />
        </div>

        {/* Title */}
        <h3 className="mb-1 text-lg font-semibold text-neutral-100 group-hover:text-primary">{job.title}</h3>

        {/* Company & Location */}
        <p className="mb-3 text-sm text-neutral-60">
          {job.company} · {job.location}
        </p>

        {/* Description */}
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-neutral-60">{job.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">{categoryName && <JobTag label={categoryName} />}</div>
      </div>
    </Link>
  );
}

export function LatestJobCard({ job }) {
  const categoryName = typeof job.category === "object" ? job.category?.name : job.category || "";

  return (
    <Link href={`/jobs/${job._id}`} className="group block">
      <div className="flex items-start gap-6 rounded-lg border border-neutral-20 p-5 transition hover:border-primary hover:shadow-md">
        {/* Company Icon */}
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-neutral-10 text-xl font-bold text-primary">
          {job.company?.[0] || "C"}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="mb-1 text-xl font-semibold text-neutral-100 group-hover:text-primary">
            {job.title}
          </h3>
          <p className="mb-3 text-base text-neutral-60">
            {job.company} · {job.location}
          </p>
          <div className="flex flex-wrap gap-2">
            <JobTag label={job.type || "Full Time"} />
            {categoryName && <JobTag label={categoryName} />}
          </div>
        </div>
      </div>
    </Link>
  );
}
