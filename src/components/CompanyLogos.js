import Image from "next/image";

const logos = [
  { src: "/images/logos/vodafone.svg", alt: "Vodafone", width: 154, height: 40 },
  { src: "/images/logos/intel.svg", alt: "Intel", width: 82, height: 32, className: "opacity-30" },
  { src: "/images/logos/tesla.svg", alt: "Tesla", width: 183, height: 24, className: "opacity-30" },
  { src: "/images/logos/amd.svg", alt: "AMD", width: 116, height: 28 },
  { src: "/images/logos/talkit.svg", alt: "Talkit", width: 108, height: 32 },
];

export default function CompanyLogos() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-[48px] lg:pl-[124px] lg:pr-[122px]">
        <div className="flex flex-col gap-[32px]">
          <p className="text-[18px] font-normal leading-[1.6] text-[#202430] opacity-50">
            Companies we helped grow
          </p>
          <div className="flex flex-wrap items-center justify-between gap-6 md:flex-nowrap">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className={`relative shrink-0 ${logo.className || ""}`}
                style={{ width: logo.width, height: logo.height }}>
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
