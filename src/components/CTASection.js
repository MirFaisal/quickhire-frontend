import Link from "next/link";
import DashboardMockup from "./DashboardMockup";

export default function CTASection() {
  return (
    <section className="bg-white">
      {/* ── Desktop Layout ── */}
      <div className="relative mx-auto hidden max-w-[1440px] overflow-hidden px-6 py-[72px] lg:block lg:px-[124px]">
        {/* ── Purple background polygon shape ── */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 558"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
          <path d="M124 135.5V486H1123.71L1316 391.5V72H252.706L124 135.5Z" fill="#4640DE" />
        </svg>

        {/* ── Content: text left + dashboard right ── */}
        <div className="relative flex min-h-[414px] items-center">
          {/* Left: text content */}
          <div className="z-10 flex w-[364px] flex-col gap-[24px] py-[93px] pl-[70px]">
            <h2
              className="font-clash text-[48px] font-semibold leading-[1.1] text-white"
              style={{ fontFeatureSettings: "'cv11' 1" }}>
              Start posting
              <br />
              jobs today
            </h2>
            <p className="text-[16px] font-medium leading-[1.6] text-white">
              Start posting jobs for only $10.
            </p>
            <Link
              href="/"
              className="inline-flex w-fit items-center justify-center bg-white px-[24px] py-[12px] text-[16px] font-bold leading-[1.6] text-[#4640DE] transition hover:bg-[#f0f0ff]">
              Sign Up For Free
            </Link>
          </div>

          {/* Right: Dashboard mockup illustration */}
          <div
            className="pointer-events-none absolute right-0 top-[68px] z-10 h-[346px] overflow-hidden bg-white"
            style={{ width: "634px" }}>
            <DashboardMockup />
          </div>
        </div>
      </div>

      {/* ── Mobile Layout ── */}
      <div className="relative overflow-hidden lg:hidden">
        {/* Solid purple background */}
        <div className="bg-[#4640DE] px-[16px] pb-[60px] pt-[88px]">
          {/* Text content — centered */}
          <div className="flex flex-col items-center gap-[16px]">
            <h2
              className="font-clash text-center text-[32px] font-semibold leading-[1.2] text-white"
              style={{ fontFeatureSettings: "'cv11' 1" }}>
              Start posting jobs today
            </h2>
            <p className="text-center text-[16px] font-medium leading-[1.6] text-white">
              Start posting jobs for only $10.
            </p>
            <Link
              href="/"
              className="flex w-full items-center justify-center bg-white px-[24px] py-[12px] text-[16px] font-bold leading-[1.6] text-[#4640DE]">
              Sign Up For Free
            </Link>
          </div>
        </div>

        {/* Dashboard mockup — overlaps from purple into white */}
        <div className="relative -mt-[10px] px-[16px] pb-[24px]">
          <div
            className="pointer-events-none overflow-hidden bg-white shadow-[0px_79px_128px_0px_rgba(192,192,192,0.09),0px_28.836px_46.722px_0px_rgba(192,192,192,0.06)]"
            style={{ height: "246px" }}>
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
