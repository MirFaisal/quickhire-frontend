"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchIcon, LocationIcon } from "./icons";

export default function HeroSearch() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (jobTitle.trim()) params.set("search", jobTitle.trim());
    if (location.trim()) params.set("location", location.trim());
    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex h-auto w-full flex-col bg-white p-[16px] shadow-[0px_79px_128px_0px_rgba(192,192,192,0.09),0px_28.836px_46.722px_0px_rgba(192,192,192,0.06),0px_13.999px_22.683px_0px_rgba(192,192,192,0.05),0px_6.863px_11.119px_0px_rgba(192,192,192,0.04),0px_2.714px_4.397px_0px_rgba(192,192,192,0.03)] sm:h-[89px] sm:flex-row sm:items-center sm:justify-center">
      {/* ── Job Title Input ── */}
      <div className="flex flex-1 items-center self-stretch">
        <div className="flex h-full flex-1 items-center gap-[16px] px-[16px]">
          <SearchIcon className="h-[24px] w-[24px] shrink-0 text-[#25324B]" />
          <div className="flex h-full flex-1 flex-col items-start justify-between pt-[20px]">
            <input
              type="text"
              placeholder="Job title or keyword"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full bg-transparent text-[16px] font-normal leading-[1.6] text-[#25324B] outline-none placeholder:text-[#7C8493] placeholder:opacity-50"
            />
            <div className="h-px w-full bg-[#D6DDEB]" />
          </div>
        </div>
      </div>

      {/* ── Location Input ── */}
      <div className="flex flex-1 items-center self-stretch">
        <div className="flex h-full flex-1 items-center gap-[16px] pl-[16px] pr-[24px]">
          <LocationIcon className="h-[24px] w-[24px] shrink-0 text-[#25324B]" />
          <div className="flex h-full flex-1 flex-col items-start justify-between pt-[20px]">
            <div className="flex w-full items-center justify-between">
              <input
                type="text"
                placeholder="Florence, Italy"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent text-[16px] font-normal leading-[1.6] text-[#25324B] outline-none placeholder:text-[#25324B] placeholder:opacity-90"
              />
              {/* Chevron Down */}
              <svg
                className="h-[24px] w-[24px] shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 9L12 15L18 9"
                  stroke="#25324B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="h-px w-full bg-[#D6DDEB]" />
          </div>
        </div>
      </div>

      {/* ── Search Button ── */}
      <div className="flex items-center self-stretch sm:mt-2">
        <button
          type="submit"
          className="flex h-full w-full items-center justify-center bg-[#4640DE] px-[27px] py-[14px] transition hover:bg-[#4640DE]/90">
          <span className="whitespace-nowrap text-[18px] font-bold leading-[1.6] text-white">
            Search my job
          </span>
        </button>
      </div>
    </form>
  );
}
