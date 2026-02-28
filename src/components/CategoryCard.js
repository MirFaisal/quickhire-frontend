import Link from "next/link";
import { ArrowRightIcon } from "./icons";
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

const iconMap = {
  Design: DesignIcon,
  Sales: SalesIcon,
  Marketing: MarketingIcon,
  Finance: FinanceIcon,
  Technology: TechnologyIcon,
  Engineering: EngineeringIcon,
  Business: BusinessIcon,
  "Human Resource": HRIcon,
};

export default function CategoryCard({ category, jobCount = 0, highlight = false }) {
  const IconComponent = iconMap[category.name] || DesignIcon;

  return (
    <Link href={`/jobs?category=${category._id}`}>
      <div
        className={`group flex flex-col gap-4 rounded-lg border p-8 transition hover:shadow-md ${
          highlight
            ? "border-primary bg-primary text-white"
            : "border-neutral-20 bg-white text-neutral-100 hover:border-primary hover:bg-primary hover:text-white"
        }`}>
        <IconComponent
          className={`h-12 w-12 ${highlight ? "text-white" : "text-primary group-hover:text-white"}`}
        />
        <h3 className="text-xl font-semibold">{category.name}</h3>
        <div className="flex items-center gap-4">
          <p
            className={`text-lg ${highlight ? "text-white/80" : "text-neutral-80 group-hover:text-white/80"}`}>
            {jobCount} jobs available
          </p>
          <ArrowRightIcon
            className={`h-5 w-5 ${highlight ? "text-white" : "text-neutral-80 group-hover:text-white"}`}
          />
        </div>
      </div>
    </Link>
  );
}
