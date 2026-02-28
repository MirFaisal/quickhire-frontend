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
      className="flex w-full flex-col gap-4 rounded-lg bg-white p-4 shadow-lg sm:flex-row sm:items-center">
      {/* Job Title Input */}
      <div className="flex flex-1 items-center gap-3 border-b border-neutral-20 pb-4 sm:border-r sm:border-b-0 sm:pr-4 sm:pb-0">
        <SearchIcon className="h-6 w-6 shrink-0 text-neutral-100" />
        <input
          type="text"
          placeholder="Job title or keyword"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="w-full bg-transparent text-base text-neutral-100 outline-none placeholder:text-neutral-40"
        />
      </div>

      {/* Location Input */}
      <div className="flex flex-1 items-center gap-3 border-b border-neutral-20 pb-4 sm:border-r sm:border-b-0 sm:pr-4 sm:pb-0">
        <LocationIcon className="h-6 w-6 shrink-0 text-neutral-100" />
        <input
          type="text"
          placeholder="Florence, Italy"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full bg-transparent text-base text-neutral-100 outline-none placeholder:text-neutral-40"
        />
      </div>

      {/* Search Button */}
      <button
        type="submit"
        className="rounded-sm bg-primary px-8 py-4 text-base font-bold text-white transition hover:bg-primary/90">
        Search my job
      </button>
    </form>
  );
}
