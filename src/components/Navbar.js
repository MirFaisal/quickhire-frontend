"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon, CloseIcon } from "./icons";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-white">
      <div className="mx-auto flex max-w-[1192px] items-center justify-between px-6 py-4 lg:px-0">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <span className="text-sm font-bold text-white">Q</span>
          </div>
          <span className="text-2xl font-bold text-neutral-100">
            Quick<span className="text-primary">Hire</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/jobs" className="text-base font-medium text-neutral-80 transition hover:text-primary">
            Find Jobs
          </Link>
          <Link href="/" className="text-base font-medium text-neutral-80 transition hover:text-primary">
            Browse Companies
          </Link>
        </div>

        {/* Desktop Auth */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/"
            className="rounded-sm border border-primary px-6 py-3 text-base font-bold text-primary transition hover:bg-primary hover:text-white">
            Login
          </Link>
          <Link
            href="/"
            className="rounded-sm bg-primary px-6 py-3 text-base font-bold text-white transition hover:bg-primary/90">
            Sign Up
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? (
            <CloseIcon className="h-6 w-6 text-neutral-100" />
          ) : (
            <MenuIcon className="h-6 w-6 text-neutral-100" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-neutral-20 bg-white px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            <Link
              href="/jobs"
              className="text-base font-medium text-neutral-80"
              onClick={() => setMobileOpen(false)}>
              Find Jobs
            </Link>
            <Link
              href="/"
              className="text-base font-medium text-neutral-80"
              onClick={() => setMobileOpen(false)}>
              Browse Companies
            </Link>
            <div className="flex flex-col gap-3 pt-4">
              <Link
                href="/"
                className="rounded-sm border border-primary py-3 text-center text-base font-bold text-primary">
                Login
              </Link>
              <Link
                href="/"
                className="rounded-sm bg-primary py-3 text-center text-base font-bold text-white">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
