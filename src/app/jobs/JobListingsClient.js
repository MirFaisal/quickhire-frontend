"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { LatestJobCard, JobTag } from "@/components/JobCard";
import { SearchIcon, LocationIcon } from "@/components/icons";

export default function JobListingsClient({
  initialJobs,
  categories,
  initialSearch,
  initialCategory,
  initialLocation,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(initialSearch);
  const [location, setLocation] = useState(initialLocation);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [jobs, setJobs] = useState(initialJobs);
  const [loading, setLoading] = useState(false);

  const fetchJobs = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search.trim()) params.set("search", search.trim());
      if (selectedCategory) params.set("category", selectedCategory);
      if (location.trim()) params.set("location", location.trim());

      const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
      const res = await fetch(`${API_BASE}/jobs?${params.toString()}`);
      const data = await res.json();
      setJobs(data.data || data || []);
    } catch (err) {
      console.error("Failed to fetch jobs:", err);
    } finally {
      setLoading(false);
    }
  }, [search, selectedCategory, location]);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (search.trim()) params.set("search", search.trim());
    if (selectedCategory) params.set("category", selectedCategory);
    if (location.trim()) params.set("location", location.trim());
    router.push(`/jobs?${params.toString()}`);
    fetchJobs();
  };

  const handleCategoryClick = (catId) => {
    const newCat = selectedCategory === catId ? "" : catId;
    setSelectedCategory(newCat);
    const params = new URLSearchParams();
    if (search.trim()) params.set("search", search.trim());
    if (newCat) params.set("category", newCat);
    if (location.trim()) params.set("location", location.trim());
    router.push(`/jobs?${params.toString()}`);
  };

  useEffect(() => {
    fetchJobs();
  }, [selectedCategory, fetchJobs]);

  // Get unique locations from jobs
  const locations = [...new Set(initialJobs.map((j) => j.location).filter(Boolean))];

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      {/* Sidebar Filters */}
      <aside className="w-full shrink-0 lg:w-64">
        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-6">
          <div className="mb-4 flex items-center gap-2 rounded-lg border border-neutral-20 bg-white px-4 py-3">
            <SearchIcon className="h-5 w-5 shrink-0 text-neutral-60" />
            <input
              type="text"
              placeholder="Job title or keyword"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm text-neutral-100 outline-none placeholder:text-neutral-40"
            />
          </div>
          <div className="mb-4 flex items-center gap-2 rounded-lg border border-neutral-20 bg-white px-4 py-3">
            <LocationIcon className="h-5 w-5 shrink-0 text-neutral-60" />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-transparent text-sm text-neutral-100 outline-none placeholder:text-neutral-40"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-sm bg-primary py-3 text-sm font-bold text-white transition hover:bg-primary/90">
            Search
          </button>
        </form>

        {/* Category Filter */}
        <div className="rounded-lg border border-neutral-20 bg-white p-5">
          <h3 className="mb-4 text-base font-semibold text-neutral-100">Category</h3>
          <div className="flex flex-col gap-2">
            {categories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => handleCategoryClick(cat._id)}
                className={`rounded-lg px-4 py-2.5 text-left text-sm transition ${
                  selectedCategory === cat._id
                    ? "bg-primary font-semibold text-white"
                    : "text-neutral-80 hover:bg-neutral-10"
                }`}>
                {cat.name}
              </button>
            ))}
            {selectedCategory && (
              <button
                onClick={() => handleCategoryClick("")}
                className="mt-2 text-left text-sm font-medium text-primary hover:underline">
                Clear filter
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Job Results */}
      <div className="flex-1">
        {/* Results Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">All Jobs</h2>
            <p className="mt-1 text-sm text-neutral-60">
              Showing {jobs.length} result{jobs.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Active Filters */}
          <div className="hidden flex-wrap gap-2 sm:flex">
            {search && (
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                &quot;{search}&quot;
                <button
                  onClick={() => {
                    setSearch("");
                    router.push("/jobs");
                  }}
                  className="ml-1 text-primary/60 hover:text-primary">
                  ×
                </button>
              </span>
            )}
          </div>
        </div>

        {/* Results */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          </div>
        ) : jobs.length > 0 ? (
          <div className="flex flex-col gap-4">
            {jobs.map((job) => (
              <LatestJobCard key={job._id} job={job} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-neutral-20 bg-white py-20 text-center">
            <p className="text-lg font-semibold text-neutral-100">No jobs found</p>
            <p className="mt-2 text-sm text-neutral-60">
              Try adjusting your search or filter to find what you&apos;re looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
