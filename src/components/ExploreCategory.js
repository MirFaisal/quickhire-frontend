import Link from "next/link";
import {
  DesignIcon,
  SalesIcon,
  MarketingIcon,
  FinanceIcon,
  TechnologyIcon,
  EngineeringIcon,
  BusinessIcon,
  HRIcon,
} from "./icons";

/* ── Static category data matching Figma 501:1597 exactly ── */
const categories = [
  { name: "Design", jobs: 235, icon: DesignIcon },
  { name: "Sales", jobs: 756, icon: SalesIcon },
  { name: "Marketing", jobs: 140, icon: MarketingIcon },
  { name: "Finance", jobs: 325, icon: FinanceIcon },
  { name: "Technology", jobs: 436, icon: TechnologyIcon },
  { name: "Engineering", jobs: 542, icon: EngineeringIcon },
  { name: "Business", jobs: 211, icon: BusinessIcon },
  { name: "Human Resource", jobs: 346, icon: HRIcon },
];

/* ── Arrow Right SVG (inline, matches Figma icon) ── */
function ArrowRight({ className = "" }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
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

export default function ExploreCategory() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-[16px] pt-[40px] lg:px-[124px] lg:pt-[72px]">
        <div className="flex flex-col gap-[32px] lg:gap-[48px]">
          {/* ── Title Row ── */}
          <div className="flex items-end justify-between">
            <h2
              className="font-clash text-[32px] font-semibold leading-[1.2] text-[#25324B] lg:text-[48px] lg:leading-[1.1]"
              style={{ fontFeatureSettings: "'cv11' 1" }}>
              Explore by <span className="text-[#26A4FF]">category</span>
            </h2>
            <Link href="/jobs" className="hidden items-center gap-[16px] sm:flex">
              <span className="text-[16px] font-semibold leading-[1.6] text-[#4640DE]">Show all jobs</span>
              <ArrowRight className="h-[24px] w-[24px] text-[#4640DE]" />
            </Link>
          </div>

          {/* ── Desktop: Category Grid: 2 rows × 4 cols, gap-32 ── */}
          <div className="hidden lg:flex lg:flex-col lg:gap-[32px]">
            {/* Row 1 */}
            <div className="grid grid-cols-4 gap-[32px]">
              {categories.slice(0, 4).map((cat) => (
                <CategoryCard key={cat.name} category={cat} />
              ))}
            </div>
            {/* Row 2 */}
            <div className="grid grid-cols-4 gap-[32px]">
              {categories.slice(4, 8).map((cat) => (
                <CategoryCard key={cat.name} category={cat} />
              ))}
            </div>
          </div>

          {/* ── Mobile: Single column list (Figma 501:4375) ── */}
          <div className="flex flex-col lg:hidden">
            {categories.map((cat) => (
              <MobileCategoryCard key={cat.name} category={cat} />
            ))}
          </div>

          {/* Mobile "Show all jobs" */}
          <div className="pb-4 sm:hidden">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-[16px] text-[16px] font-semibold text-[#4640DE]">
              Show all jobs
              <ArrowRight className="h-[24px] w-[24px]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Individual Category Card ── */
function CategoryCard({ category }) {
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
            <ArrowRight
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

/* ── Mobile Category Card (Figma 501:4375) ── */
function MobileCategoryCard({ category }) {
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
            <ArrowRight className="h-[24px] w-[24px] text-[#7C8493]" />
          </div>
        </div>
      </div>
    </Link>
  );
}
