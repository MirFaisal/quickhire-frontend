"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { LatestJobCard, JobTag } from "@/components/JobCard";
import { SearchIcon, LocationIcon } from "@/components/icons";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

/* ── Debounce hook ── */
function useDebounce(value, delay = 400) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

/* ── Build URLSearchParams helper ── */
function buildParams({ search, category, location }) {
  const p = new URLSearchParams();
  if (search?.trim()) p.set("search", search.trim());
  if (category) p.set("category", category);
  if (location?.trim()) p.set("location", location.trim());
  return p;
}

export default function JobListingsClient({
  initialJobs,
  categories,
  initialSearch,
  initialCategory,
  initialLocation,
  initialError,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(initialSearch);
  const [location, setLocation] = useState(initialLocation);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [jobs, setJobs] = useState(initialJobs);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(initialError || null);

  // Debounce text inputs — auto-search as-you-type
  const debouncedSearch = useDebounce(search, 400);
  const debouncedLocation = useDebounce(location, 400);

  // Abort controller ref for cancelling in-flight requests
  const abortRef = useRef(null);

  // Track if this is the initial mount to skip the first auto-fetch
  const isInitialMount = useRef(true);

  const fetchJobs = useCallback(
    async (overrides = {}) => {
      // Cancel any in-flight request
      if (abortRef.current) abortRef.current.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      setLoading(true);
      setError(null);

      try {
        const params = buildParams({
          search: overrides.search ?? debouncedSearch,
          category: overrides.category ?? selectedCategory,
          location: overrides.location ?? debouncedLocation,
        });

        const res = await fetch(`${API_BASE}/jobs?${params.toString()}`, {
          signal: controller.signal,
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || `Something went wrong (${res.status})`);
        }

        setJobs(data.data || data || []);
      } catch (err) {
        if (err.name === "AbortError") return; // request cancelled, ignore
        console.error("Failed to fetch jobs:", err);
        setError(err.message || "Failed to load jobs. Please try again.");
        setJobs([]);
      } finally {
        setLoading(false);
      }
    },
    [debouncedSearch, selectedCategory, debouncedLocation],
  );

  // Sync URL + fetch when debounced values or category change
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    const params = buildParams({
      search: debouncedSearch,
      category: selectedCategory,
      location: debouncedLocation,
    });
    router.replace(`/jobs?${params.toString()}`, { scroll: false });
    fetchJobs();
  }, [debouncedSearch, selectedCategory, debouncedLocation]); // eslint-disable-line react-hooks/exhaustive-deps

  // Cleanup abort on unmount
  useEffect(() => {
    return () => {
      if (abortRef.current) abortRef.current.abort();
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchJobs({ search, location }); // immediate, bypass debounce
    const params = buildParams({ search, category: selectedCategory, location });
    router.replace(`/jobs?${params.toString()}`, { scroll: false });
  };

  const handleCategoryClick = (catId) => {
    setSelectedCategory((prev) => (prev === catId ? "" : catId));
  };

  const clearFilter = (key) => {
    if (key === "search") setSearch("");
    if (key === "location") setLocation("");
    if (key === "category") setSelectedCategory("");
  };

  const clearAll = () => {
    setSearch("");
    setLocation("");
    setSelectedCategory("");
  };

  // Find selected category name for chip display
  const selectedCategoryName = useMemo(
    () => categories.find((c) => c._id === selectedCategory)?.name || "",
    [categories, selectedCategory],
  );

  // Active filter count
  const activeFilterCount = [search.trim(), selectedCategory, location.trim()].filter(Boolean).length;

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      {/* Sidebar Filters */}
      <aside className="w-full shrink-0 lg:w-64">
        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-6">
          <div className="mb-4 flex items-center gap-2 rounded-lg border border-neutral-20 bg-white px-4 py-3 transition-colors focus-within:border-primary">
            <SearchIcon className="h-5 w-5 shrink-0 text-neutral-60" />
            <input
              type="text"
              placeholder="Job title or keyword"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm text-neutral-100 outline-none placeholder:text-neutral-40"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="shrink-0 text-neutral-40 hover:text-neutral-80">
                ×
              </button>
            )}
          </div>
          <div className="mb-4 flex items-center gap-2 rounded-lg border border-neutral-20 bg-white px-4 py-3 transition-colors focus-within:border-primary">
            <LocationIcon className="h-5 w-5 shrink-0 text-neutral-60" />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-transparent text-sm text-neutral-100 outline-none placeholder:text-neutral-40"
            />
            {location && (
              <button
                type="button"
                onClick={() => setLocation("")}
                className="shrink-0 text-neutral-40 hover:text-neutral-80">
                ×
              </button>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-sm bg-primary py-3 text-sm font-bold text-white transition hover:bg-primary/90 disabled:opacity-60">
            {loading ? "Searching..." : "Search"}
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
                onClick={() => clearFilter("category")}
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
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-100">All Jobs</h2>
            <p className="mt-1 text-sm text-neutral-60">
              Showing {jobs.length} result{jobs.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Active Filter Chips */}
          {activeFilterCount > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {search.trim() && (
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  &quot;{search.trim()}&quot;
                  <button
                    onClick={() => clearFilter("search")}
                    className="ml-1 text-primary/60 hover:text-primary">
                    ×
                  </button>
                </span>
              )}
              {selectedCategoryName && (
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {selectedCategoryName}
                  <button
                    onClick={() => clearFilter("category")}
                    className="ml-1 text-primary/60 hover:text-primary">
                    ×
                  </button>
                </span>
              )}
              {location.trim() && (
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  📍 {location.trim()}
                  <button
                    onClick={() => clearFilter("location")}
                    className="ml-1 text-primary/60 hover:text-primary">
                    ×
                  </button>
                </span>
              )}
              {activeFilterCount > 1 && (
                <button onClick={clearAll} className="text-xs font-medium text-red-500 hover:underline">
                  Clear all
                </button>
              )}
            </div>
          )}
        </div>

        {/* Results */}
        {error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 px-6 py-10 text-center">
            <p className="text-lg font-semibold text-red-600">Something went wrong</p>
            <p className="mt-2 text-sm text-red-500">{error}</p>
            <button
              onClick={() => {
                setError(null);
                fetchJobs();
              }}
              className="mt-4 rounded-sm bg-primary px-6 py-2 text-sm font-bold text-white transition hover:bg-primary/90">
              Try Again
            </button>
          </div>
        ) : loading ? (
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
