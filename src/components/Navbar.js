"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon, CloseIcon } from "./icons";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-[16px] pb-[16px] pt-[8px] shadow-[inset_0px_-1px_0px_0px_#D6DDEB] md:px-6 md:pb-0 md:pt-0 md:shadow-none lg:px-[124px]">
        {/* Left: Logo + Menu */}
        <div className="flex items-center self-stretch">
          <div className="flex items-center gap-[48px] self-stretch">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image src="/Logo.png" alt="QuickHire" width={152} height={36} className="mt-[2px] shrink-0" />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden items-end gap-[16px] self-stretch md:flex">
              <Link href="/jobs" className="flex flex-col items-start py-[24px]">
                <span className="text-[16px] font-medium leading-[1.6] text-[#515B6F]">Find Jobs</span>
              </Link>
              <Link href="/" className="flex flex-col items-start py-[24px]">
                <span className="text-[16px] font-medium leading-[1.6] text-[#515B6F]">Browse Companies</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Auth Buttons */}
        <div className="hidden h-[78px] items-center justify-center gap-[16px] md:flex">
          <Link href="/" className="flex items-center justify-center px-[24px] py-[12px]">
            <span className="text-[16px] font-bold leading-[1.6] text-[#4640DE]">Login</span>
          </Link>
          {/* Vertical Divider */}
          <div className="h-[48px] w-px bg-[#D6DDEB]"></div>
          <Link href="/" className="flex items-center justify-center bg-[#4640DE] px-[24px] py-[12px]">
            <span className="text-[16px] font-bold leading-[1.6] text-white">Sign Up</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="flex items-center justify-center rounded-full border border-[#D6DDEB] bg-white p-[8px] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu">
          {mobileOpen ? (
            <CloseIcon className="h-[24px] w-[24px] text-[#25324B]" />
          ) : (
            <MenuIcon className="h-[24px] w-[24px] text-[#25324B]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-[#D6DDEB] bg-white px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            <Link
              href="/jobs"
              className="text-[16px] font-medium text-[#4640DE]"
              onClick={() => setMobileOpen(false)}>
              Find Jobs
            </Link>
            <Link
              href="/"
              className="text-[16px] font-medium text-[#515B6F]"
              onClick={() => setMobileOpen(false)}>
              Browse Companies
            </Link>
            <div className="flex flex-col gap-3 pt-4">
              <Link
                href="/"
                className="border border-[#4640DE] py-3 text-center text-[16px] font-bold text-[#4640DE]">
                Login
              </Link>
              <Link href="/" className="bg-[#4640DE] py-3 text-center text-[16px] font-bold text-white">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
