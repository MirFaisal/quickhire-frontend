import Link from "next/link";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, DribbbleIcon, LinkedinIcon, TwitterIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-[1192px] px-6 pt-16 pb-8 lg:px-0">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/Logo-white.png" alt="QuickHire" width={152} height={36} />
            </Link>
            <p className="text-base leading-relaxed text-neutral-40">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-white">About</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" className="text-base text-neutral-40 transition hover:text-white">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="/" className="text-base text-neutral-40 transition hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/" className="text-base text-neutral-40 transition hover:text-white">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/" className="text-base text-neutral-40 transition hover:text-white">
                  Advice
                </Link>
              </li>
              <li>
                <Link href="/" className="text-base text-neutral-40 transition hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-white">Resources</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" className="text-base text-neutral-40 transition hover:text-white">
                  Help Docs
                </Link>
              </li>
              <li>
                <Link href="/" className="text-base text-neutral-40 transition hover:text-white">
                  Guide
                </Link>
              </li>
              <li>
                <Link href="/" className="text-base text-neutral-40 transition hover:text-white">
                  Updates
                </Link>
              </li>
              <li>
                <Link href="/" className="text-base text-neutral-40 transition hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-white">Get job notifications</h4>
            <p className="mb-6 text-base text-neutral-40">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 rounded-sm border border-neutral-20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-neutral-40 outline-none focus:border-primary"
              />
              <button className="rounded-sm bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary/90">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-neutral-80/30 pt-8 md:flex-row">
          <p className="text-base text-neutral-40">2024 @ QuickHire. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-neutral-40 transition hover:text-white">
              <FacebookIcon />
            </Link>
            <Link href="/" className="text-neutral-40 transition hover:text-white">
              <InstagramIcon />
            </Link>
            <Link href="/" className="text-neutral-40 transition hover:text-white">
              <DribbbleIcon />
            </Link>
            <Link href="/" className="text-neutral-40 transition hover:text-white">
              <LinkedinIcon />
            </Link>
            <Link href="/" className="text-neutral-40 transition hover:text-white">
              <TwitterIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
