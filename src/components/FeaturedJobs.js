"use client";

import Link from "next/link";
import { FeaturedJobCard } from "./JobCard";
import { ArrowRightIcon } from "./icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function FeaturedJobs({ jobs = [] }) {
  const featuredJobs = jobs.slice(0, 8);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-[16px] pb-[40px] pt-0 lg:px-[124px] lg:pb-[72px]">
        <div className="flex flex-col gap-[24px] lg:gap-[48px]">
          {/* ── Title Row ── */}
          <div className="flex items-end justify-between">
            <h2
              className="font-clash text-[32px] font-semibold leading-[1.2] text-[#25324B] lg:text-[48px] lg:leading-[1.1]"
              style={{ fontFeatureSettings: "'cv11' 1" }}>
              Featured <span className="text-[#26A4FF]">jobs</span>
            </h2>
            <Link href="/jobs" className="hidden items-center gap-[16px] sm:flex">
              <span className="text-[16px] font-semibold leading-[1.6] text-[#4640DE]">Show all jobs</span>
              <span className="text-[#4640DE]">
                <ArrowRightIcon className="h-6 w-6" />
              </span>
            </Link>
          </div>

          {/* ── Desktop: Job Cards Grid 2 rows × 4 cols ── */}
          {featuredJobs.length > 0 ? (
            <>
              <div className="hidden lg:flex lg:flex-col lg:gap-[32px]">
                {/* Row 1 */}
                <div className="grid grid-cols-4 gap-[32px]">
                  {featuredJobs.slice(0, 4).map((job) => (
                    <FeaturedJobCard key={job._id} job={job} />
                  ))}
                </div>
                {/* Row 2 */}
                {featuredJobs.length > 4 && (
                  <div className="grid grid-cols-4 gap-[32px]">
                    {featuredJobs.slice(4, 8).map((job) => (
                      <FeaturedJobCard key={job._id} job={job} />
                    ))}
                  </div>
                )}
              </div>

              {/* ── Mobile: Swiper slider ── */}
              <div className="lg:hidden">
                <Swiper
                  spaceBetween={16}
                  slidesPerView={1.15}
                  breakpoints={{
                    480: { slidesPerView: 1.5 },
                    640: { slidesPerView: 2.2 },
                  }}>
                  {featuredJobs.map((job) => (
                    <SwiperSlide key={job._id}>
                      <FeaturedJobCard job={job} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </>
          ) : (
            <p className="text-center text-[16px] text-[#7C8493]">No jobs available yet. Check back soon!</p>
          )}

          {/* Mobile "Show all jobs" */}
          <div className="sm:hidden">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-[16px] text-[16px] font-semibold text-[#4640DE]">
              Show all jobs
              <ArrowRightIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
