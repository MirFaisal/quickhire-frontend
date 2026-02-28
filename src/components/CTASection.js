import Link from "next/link";

/* ══════════════════════════════════════════════════════════════
   CTA Section — pixel-perfect match of Figma node 501:1598
   Layout: 1440 max-width, purple polygon BG, text left + dashboard right
   ══════════════════════════════════════════════════════════════ */

export default function CTASection() {
  return (
    <section className="bg-white">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden px-6 py-[72px] lg:px-[124px]">
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
          <div className="z-10 flex w-full flex-col gap-[24px] py-[93px] pl-[70px] lg:w-[364px]">
            <h2
              className="font-clash text-[36px] font-semibold leading-[1.1] text-white sm:text-[48px]"
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
            className="pointer-events-none absolute right-0 top-[68px] z-10 hidden h-[346px] overflow-hidden bg-white lg:block"
            style={{ width: "634px" }}>
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   Dashboard Mockup — CSS illustration matching Figma screenshot
   Scaled at ~0.62x to fit 634×346 viewport, shows:
   - Sidebar with nav items
   - Header with company name + "Post a job" button
   - Greeting, stat cards, chart, right stats panel
   ══════════════════════════════════════════════════════════════ */
function DashboardMockup() {
  return (
    <div className="flex h-[480px] w-[1024px] origin-top-left scale-[0.62] font-sans text-[10px]">
      {/* ── Sidebar ── */}
      <div className="flex w-[170px] shrink-0 flex-col justify-between border-r border-[#d3d6db] bg-[#f8f8fd] py-3">
        <div className="flex flex-col gap-3">
          {/* Logo */}
          <div className="flex items-center gap-1 px-4">
            <div className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#4640DE]">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <circle cx="5" cy="5" r="4" stroke="white" strokeWidth="1.5" />
              </svg>
            </div>
            <span className="text-[11px] font-bold text-[#202430]">QuickHire</span>
          </div>
          {/* Nav items */}
          <nav className="flex flex-col text-[9px]">
            <div className="flex items-center gap-2 border-l-[3px] border-[#4640DE] bg-[#e9ebfd] px-3 py-[6px] font-medium text-[#4640DE]">
              <DashIcon /> Dashboard
            </div>
            <div className="relative flex items-center gap-2 px-4 py-[6px] text-[#7c8493]">
              <NavIcon /> Messages
              <span className="absolute right-3 flex h-[14px] w-[14px] items-center justify-center rounded-full bg-[#4640DE] text-[7px] text-white">
                1
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-[6px] text-[#7c8493]">
              <NavIcon /> Company Profile
            </div>
            <div className="flex items-center gap-2 px-4 py-[6px] text-[#7c8493]">
              <NavIcon /> All Applicants
            </div>
            <div className="flex items-center gap-2 px-4 py-[6px] text-[#7c8493]">
              <NavIcon /> Job Listing
            </div>
            <div className="flex items-center gap-2 px-4 py-[6px] text-[#7c8493]">
              <NavIcon /> My Schedule
            </div>
          </nav>
          {/* Settings section */}
          <div className="mt-1 flex flex-col px-4">
            <p className="mb-1 text-[8px] font-semibold uppercase tracking-wider text-[#a8adb7]">Settings</p>
            <div className="flex items-center gap-2 py-[6px] text-[9px] text-[#7c8493]">
              <NavIcon /> Settings
            </div>
            <div className="flex items-center gap-2 py-[6px] text-[9px] text-[#7c8493]">
              <NavIcon /> Help Center
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="flex flex-1 flex-col overflow-hidden bg-white">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#d6ddeb] px-5 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-[26px] w-[26px] items-center justify-center rounded bg-[#4640DE]">
              <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                <circle cx="5" cy="5" r="4" stroke="white" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <p className="text-[7px] text-[#7c8493]">Company</p>
              <p className="text-[9px] font-semibold text-[#25324B]">Nomad ▾</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-[8px] w-[8px] rounded-full border border-[#d6ddeb]" />
            <div className="h-[20px] w-[20px] rounded-full bg-[#e9ebfd]" />
            <button className="rounded bg-[#4640DE] px-3 py-1 text-[8px] font-bold text-white">
              + Post a job
            </button>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Center Content */}
          <div className="flex-1 overflow-hidden px-5 py-4">
            {/* Greeting */}
            <p className="text-[14px] font-semibold text-[#25324B]">Good morning, Maria</p>
            <p className="mb-3 text-[8px] text-[#7c8493]">
              Here is your job listings statistic report from July 19 - July 25.
            </p>

            {/* Three stat cards */}
            <div className="mb-3 flex gap-2">
              <StatCard
                count="76"
                label="New candidates to review"
                color="bg-[#e9ebfd]"
                accent="text-[#4640DE]"
                arrowColor="bg-[#56CDAD]"
              />
              <StatCard
                count="3"
                label="Schedule for today"
                color="bg-[#56CDAD]"
                accent="text-white"
                arrowColor="bg-white"
              />
              <StatCard
                count="24"
                label="Messages received"
                color="bg-[#FFB836]"
                accent="text-white"
                arrowColor="bg-white"
              />
            </div>

            {/* Job Statistics */}
            <div className="rounded border border-[#d6ddeb] p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[11px] font-semibold text-[#25324B]">Job statistics</p>
                <div className="flex gap-1 text-[8px]">
                  <span className="rounded bg-[#4640DE] px-2 py-[2px] text-white">Week</span>
                  <span className="rounded px-2 py-[2px] text-[#7c8493]">Month</span>
                  <span className="rounded px-2 py-[2px] text-[#7c8493]">Year</span>
                </div>
              </div>
              <div className="mb-1 flex gap-4 text-[8px] text-[#7c8493]">
                <span>Overview</span>
                <span>Jobs View</span>
                <span>Jobs Applied</span>
              </div>
              {/* Chart bars */}
              <div className="flex h-[80px] items-end gap-[6px]">
                {[40, 55, 70, 45, 35, 25, 20].map((h, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-[2px]">
                    <div className="flex w-full gap-[1px]">
                      <div className="flex-1 rounded-t bg-[#e9ebfd]" style={{ height: `${h * 0.8}px` }} />
                      <div className="flex-1 rounded-t bg-[#FFB836]" style={{ height: `${h * 0.6}px` }} />
                      <div className="flex-1 rounded-t bg-[#4640DE]" style={{ height: `${h * 0.45}px` }} />
                    </div>
                    <span className="text-[7px] text-[#7c8493]">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                    </span>
                  </div>
                ))}
              </div>
              {/* Chart legend + stats */}
              <div className="mt-2 flex items-center justify-between">
                <div className="flex gap-3 text-[7px] text-[#7c8493]">
                  <span className="flex items-center gap-1">
                    <span className="inline-block h-[4px] w-[4px] rounded-full bg-[#e9ebfd]" />
                    Job View
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="inline-block h-[4px] w-[4px] rounded-full bg-[#4640DE]" />
                    Job Applied
                  </span>
                </div>
                <div className="flex gap-4 text-right">
                  <div>
                    <p className="text-[7px] text-[#7c8493]">Job Views</p>
                    <p className="text-[13px] font-semibold text-[#25324B]">2,342</p>
                    <p className="text-[7px] text-[#56CDAD]">This Week 6.4% ▲</p>
                  </div>
                  <div>
                    <p className="text-[7px] text-[#7c8493]">Job Applied</p>
                    <p className="text-[13px] font-semibold text-[#25324B]">654</p>
                    <p className="text-[7px] text-[#56CDAD]">This Week 0.5% ▲</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats Panel */}
          <div className="w-[160px] shrink-0 border-l border-[#d6ddeb] p-3">
            <p className="mb-1 text-[7px] text-[#7c8493]">Jul 19 - Jul 25 ▾</p>
            {/* Job Open */}
            <div className="mb-3 rounded border border-[#d6ddeb] p-2">
              <p className="text-[8px] font-semibold text-[#25324B]">Job Open</p>
              <p className="text-[18px] font-bold text-[#25324B]">12</p>
              <p className="text-[7px] text-[#7c8493]">Jobs Opened</p>
            </div>
            {/* Applicants Summary */}
            <div className="rounded border border-[#d6ddeb] p-2">
              <p className="text-[8px] font-semibold text-[#25324B]">Applicants Summary</p>
              <p className="text-[18px] font-bold text-[#25324B]">67</p>
              <p className="mb-2 text-[7px] text-[#7c8493]">Applicants</p>
              {/* Stacked bar */}
              <div className="mb-1 flex h-[6px] w-full overflow-hidden rounded-full">
                <div className="h-full w-[40%] bg-[#4640DE]" />
                <div className="h-full w-[15%] bg-[#56CDAD]" />
                <div className="h-full w-[20%] bg-[#26A4FF]" />
                <div className="h-full w-[15%] bg-[#FFB836]" />
                <div className="h-full w-[10%] bg-[#FF6550]" />
              </div>
              {/* Legend */}
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-[6px]">
                <span className="flex items-center gap-[2px]">
                  <span className="inline-block h-[4px] w-[4px] rounded-sm bg-[#4640DE]" />
                  Full Time: 45
                </span>
                <span className="flex items-center gap-[2px]">
                  <span className="inline-block h-[4px] w-[4px] rounded-sm bg-[#56CDAD]" />
                  Internship: 32
                </span>
                <span className="flex items-center gap-[2px]">
                  <span className="inline-block h-[4px] w-[4px] rounded-sm bg-[#26A4FF]" />
                  Part-Time: 24
                </span>
                <span className="flex items-center gap-[2px]">
                  <span className="inline-block h-[4px] w-[4px] rounded-sm bg-[#FF6550]" />
                  Contract: 10
                </span>
                <span className="flex items-center gap-[2px]">
                  <span className="inline-block h-[4px] w-[4px] rounded-sm bg-[#FFB836]" />
                  Remote: 22
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Small reusable sub-components ── */

function StatCard({ count, label, color, accent, arrowColor }) {
  return (
    <div className={`flex flex-1 items-center gap-2 rounded ${color} px-3 py-2`}>
      <div>
        <p className={`text-[16px] font-bold ${accent}`}>{count}</p>
        <p className={`text-[7px] ${accent === "text-white" ? "text-white/80" : "text-[#515B6F]"}`}>
          {label}
        </p>
      </div>
      <div
        className={`ml-auto flex h-[14px] w-[14px] items-center justify-center rounded-full ${arrowColor}`}>
        <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
          <path
            d="M1 3h4M5 3L3 1"
            stroke={accent === "text-white" ? "#56CDAD" : "#4640DE"}
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

function DashIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="1" y="1" width="5" height="5" rx="1" stroke="#4640DE" strokeWidth="1.2" />
      <rect x="8" y="1" width="5" height="5" rx="1" stroke="#4640DE" strokeWidth="1.2" />
      <rect x="1" y="8" width="5" height="5" rx="1" stroke="#4640DE" strokeWidth="1.2" />
      <rect x="8" y="8" width="5" height="5" rx="1" stroke="#4640DE" strokeWidth="1.2" />
    </svg>
  );
}

function NavIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="2" y="3" width="10" height="1.5" rx="0.5" fill="#7c8493" />
      <rect x="2" y="6.5" width="6" height="1.5" rx="0.5" fill="#7c8493" />
      <rect x="2" y="10" width="8" height="1.5" rx="0.5" fill="#7c8493" />
    </svg>
  );
}
