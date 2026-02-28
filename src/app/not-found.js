import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[60vh] items-center justify-center bg-background-light">
        <div className="text-center">
          <h1 className="font-clash text-6xl font-semibold text-primary">404</h1>
          <h2 className="mt-4 text-2xl font-semibold text-neutral-100">Page Not Found</h2>
          <p className="mt-3 text-base text-neutral-60">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-sm bg-primary px-8 py-3 text-base font-bold text-white transition hover:bg-primary/90">
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
