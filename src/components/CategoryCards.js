import Link from "next/link";
import { ArrowRightIcon } from "./icons";

/* ── Desktop Category Card ── */
export function CategoryCard({ category }) {
  const { name, jobs, icon: Icon, highlight } = category;
  const isActive = !!highlight;

  return (
    <Link href={`/jobs?category=${name}`} className="block">
      <div
        className={`flex flex-col gap-[32px] p-[32px] transition-colors ${
          isActive
            ? "bg-[#4640DE]"
            : "border border-[#D6DDEB] bg-white hover:bg-[#4640DE] hover:border-transparent group"
        }`}>
        {/* Icon */}
        <Icon
          className={`h-[48px] w-[48px] ${isActive ? "text-white" : "text-[#4640DE] group-hover:text-white"}`}
        />

        {/* Category Name + Jobs Count */}
        <div className="flex flex-col gap-[12px]">
          <p
            className={`font-clash text-[24px] font-semibold leading-[1.2] ${
              isActive ? "text-white" : "text-[#25324B] group-hover:text-white"
            }`}>
            {name}
          </p>
          <div className="flex items-center gap-[16px]">
            <p
              className={`text-[18px] font-normal leading-[1.6] ${
                isActive ? "text-white" : "text-[#7C8493] group-hover:text-white"
              }`}>
              {jobs} jobs available
            </p>
            <ArrowRightIcon
              className={`h-[24px] w-[24px] ${
                isActive ? "text-white" : "text-[#7C8493] group-hover:text-white"
              }`}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ── Mobile Category Card ── */
export function MobileCategoryCard({ category }) {
  const { name, jobs, icon: Icon } = category;

  return (
    <Link href={`/jobs?category=${name}`} className="block">
      <div className="flex items-center gap-[32px] border border-[#D6DDEB] bg-white p-[16px]">
        {/* Icon — 24px on mobile */}
        <Icon className="h-[24px] w-[24px] shrink-0 text-[#4640DE]" />

        {/* Category Name + Jobs Count */}
        <div className="flex flex-1 flex-col gap-[2px]">
          <p
            className="font-clash text-[20px] font-semibold leading-[1.2] text-[#25324B]"
            style={{ fontFeatureSettings: "'cv11' 1" }}>
            {name === "Human Resource" ? "Human Resources" : name}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-[16px] font-normal leading-[1.6] text-[#7C8493]">{jobs} jobs available</p>
            <ArrowRightIcon className="h-[24px] w-[24px] text-[#7C8493]" />
          </div>
        </div>
      </div>
    </Link>
  );
}
