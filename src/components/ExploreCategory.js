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
import { CategoryCard, MobileCategoryCard } from "./CategoryCards";
import SectionHeader, { MobileSectionLink } from "./SectionHeader";

/* ── Static category data ── */
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

export default function ExploreCategory() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-[16px] pt-[40px] lg:px-[124px] lg:pt-[72px]">
        <div className="flex flex-col gap-[32px] lg:gap-[48px]">
          {/* ── Title Row ── */}
          <SectionHeader>
            Explore by <span className="text-[#26A4FF]">category</span>
          </SectionHeader>

          {/* ── Desktop: Category Grid ── */}
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

          {/* ── Mobile: Single column list ── */}
          <div className="flex flex-col lg:hidden">
            {categories.map((cat) => (
              <MobileCategoryCard key={cat.name} category={cat} />
            ))}
          </div>

          {/* Mobile "Show all jobs" */}
          <div className="pb-4">
            <MobileSectionLink />
          </div>
        </div>
      </div>
    </section>
  );
}
