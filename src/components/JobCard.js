import Link from "next/link";

/* ═══════════════════════════════════════════════════════════
   Tag color system — Figma exact values
   ═══════════════════════════════════════════════════════════ */
const TAG_STYLES = {
  Marketing: { bg: "rgba(235,133,51,0.1)", text: "#FFB836" },
  Design: { bg: "rgba(255,101,80,0.1)", text: "#FF6550" },
  Business: { bg: "rgba(70,64,222,0.1)", text: "#4640DE" },
  Technology: { bg: "rgba(86,205,173,0.1)", text: "#56CDAD" },
  Engineering: { bg: "rgba(255,101,80,0.1)", text: "#FF6550" },
  Finance: { bg: "rgba(86,205,173,0.1)", text: "#56CDAD" },
  Sales: { bg: "rgba(235,133,51,0.1)", text: "#FFB836" },
  "Human Resource": { bg: "rgba(70,64,222,0.1)", text: "#4640DE" },
};

function getTagStyle(label) {
  return TAG_STYLES[label] || { bg: "rgba(70,64,222,0.1)", text: "#4640DE" };
}

/* ── Category tag pill (Figma: rounded-[80px] px-[10px] py-[6px]) ── */
export function JobTag({ label }) {
  const s = getTagStyle(label);
  return (
    <span
      className="inline-block whitespace-nowrap rounded-[80px] px-[10px] py-[6px] text-[14px] font-semibold leading-[1.6]"
      style={{ backgroundColor: s.bg, color: s.text }}>
      {label}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════
   Company Logo — first letter with deterministic color + shape
   ═══════════════════════════════════════════════════════════ */
const LOGO_COLORS = [
  "#4640DE",
  "#FF6550",
  "#FFB836",
  "#56CDAD",
  "#26A4FF",
  "#7B61FF",
  "#E05D5D",
  "#0D9488",
  "#515B6F",
  "#EB8533",
];

const LOGO_SHAPES = [
  "rounded-full", // circle
  "rounded-[16px]", // rounded square
  "rounded-[20px_4px_20px_4px]", // diagonal pill
  "rounded-[4px_20px_4px_20px]", // inverse diagonal
  "rounded-[24px_8px]", // asymmetric
  "rounded-[8px_24px]", // asymmetric inverse
];

function hashStr(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

export function CompanyLogo({ company, size = 80 }) {
  const name = company || "C";
  const h = hashStr(name);
  const color = LOGO_COLORS[h % LOGO_COLORS.length];
  const shape = LOGO_SHAPES[h % LOGO_SHAPES.length];
  const letter = name.charAt(0).toUpperCase();

  return (
    <div
      className={`flex items-center justify-center ${shape}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        fontSize: size * 0.4,
        fontWeight: 700,
        color: "#FFFFFF",
        lineHeight: 1,
      }}>
      {letter}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   FeaturedJobCard — Figma 501:1599 exact specs
   Card: bg-white border-[#d6ddeb] p-[24px] flex-col gap-[16px]
   ═══════════════════════════════════════════════════════════ */
export function FeaturedJobCard({ job }) {
  const categoryName = typeof job.category === "object" ? job.category?.name : job.category || "";

  return (
    <Link href={`/jobs/${job._id}`} className="block">
      <div className="flex h-full flex-col items-start gap-[16px] border border-[#D6DDEB] bg-white p-[24px]">
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
            <span className="text-[16px] font-normal leading-[1.6] text-[#515B6F]">{job.company}</span>
            <span className="inline-block h-[4px] w-[4px] shrink-0 rounded-full bg-[#515B6F]" />
            <span className="text-[16px] font-normal leading-[1.6] text-[#515B6F]">{job.location}</span>
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

/* ═══════════════════════════════════════════════════════════
   LatestJobCard — row layout with company icon
   ═══════════════════════════════════════════════════════════ */
export function LatestJobCard({ job }) {
  const categoryName = typeof job.category === "object" ? job.category?.name : job.category || "";

  return (
    <Link href={`/jobs/${job._id}`} className="group block">
      <div className="flex items-start gap-[24px] border border-[#D6DDEB] bg-white p-[24px] transition-shadow hover:shadow-md">
        {/* Company Logo */}
        <CompanyLogo company={job.company} size={64} />

        {/* Content */}
        <div className="flex-1">
          <p className="text-[20px] font-semibold leading-[1.2] text-[#25324B]">{job.title}</p>
          <div className="mt-[4px] flex items-center gap-[8px]">
            <span className="text-[16px] font-normal leading-[1.6] text-[#515B6F]">{job.company}</span>
            <span className="inline-block h-[4px] w-[4px] rounded-full bg-[#515B6F]" />
            <span className="text-[16px] font-normal leading-[1.6] text-[#515B6F]">{job.location}</span>
          </div>
          <div className="mt-[12px] flex flex-wrap gap-[8px]">
            <JobTag label={job.type || "Full Time"} />
            {categoryName && <JobTag label={categoryName} />}
          </div>
        </div>
      </div>
    </Link>
  );
}
