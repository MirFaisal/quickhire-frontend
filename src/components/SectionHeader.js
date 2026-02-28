import Link from "next/link";
import { ArrowRightIcon } from "./icons";

/* ── Reusable section header with title + "Show all" link ── */
export default function SectionHeader({ children, linkHref = "/jobs", linkText = "Show all jobs" }) {
  return (
    <div className="flex items-end justify-between">
      <h2
        className="font-clash text-[32px] font-semibold leading-[1.2] text-[#25324B] lg:text-[48px] lg:leading-[1.1]"
        style={{ fontFeatureSettings: "'cv11' 1" }}>
        {children}
      </h2>
      <Link href={linkHref} className="hidden items-center gap-[16px] sm:flex">
        <span className="text-[16px] font-semibold leading-[1.6] text-[#4640DE]">{linkText}</span>
        <span className="text-[#4640DE]">
          <ArrowRightIcon className="h-6 w-6" />
        </span>
      </Link>
    </div>
  );
}

/* ── Mobile "Show all" link (shown below content on small screens) ── */
export function MobileSectionLink({ linkHref = "/jobs", linkText = "Show all jobs" }) {
  return (
    <div className="sm:hidden">
      <Link
        href={linkHref}
        className="inline-flex items-center gap-[16px] text-[16px] font-semibold text-[#4640DE]">
        {linkText}
        <ArrowRightIcon className="h-6 w-6" />
      </Link>
    </div>
  );
}
