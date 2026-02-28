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
      <div className="mx-auto max-w-[1440px] px-[16px] py-[40px] lg:px-6 lg:py-[48px] lg:pl-[124px] lg:pr-[122px]">
        <div className="flex flex-col gap-[32px]">
          <p className="text-[18px] font-normal leading-[1.6] text-[#202430] opacity-50">
            Companies we helped grow
          </p>

          {/* Desktop: horizontal row */}
          <div className="hidden items-center justify-between md:flex">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className={`relative shrink-0 ${logo.className || ""}`}
                style={{ width: logo.width, height: logo.height }}>
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
              </div>
            ))}
          </div>

          {/* Mobile: 2-column grid */}
          <div className="md:hidden">
            <div className="flex gap-[73px]">
              {/* Left column */}
              <div className="flex flex-col gap-[40px]">
                <div className={`relative shrink-0`} style={{ width: 154, height: 40 }}>
                  <Image src="/images/logos/vodafone.svg" alt="Vodafone" fill className="object-contain" />
                </div>
                <div className={`relative shrink-0`} style={{ width: 108, height: 32 }}>
                  <Image src="/images/logos/talkit.svg" alt="Talkit" fill className="object-contain" />
                </div>
              </div>
              {/* Right column */}
              <div className="flex flex-col gap-[48px]">
                <div className={`relative shrink-0 opacity-30`} style={{ width: 82, height: 32 }}>
                  <Image src="/images/logos/intel.svg" alt="Intel" fill className="object-contain" />
                </div>
                <div className={`relative shrink-0`} style={{ width: 116, height: 28 }}>
                  <Image src="/images/logos/amd.svg" alt="AMD" fill className="object-contain" />
                </div>
              </div>
            </div>
            {/* Tesla — below, left-aligned */}
            <div className="mt-[40px]">
              <div className={`relative shrink-0 opacity-30`} style={{ width: 183, height: 24 }}>
                <Image src="/images/logos/tesla.svg" alt="Tesla" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
