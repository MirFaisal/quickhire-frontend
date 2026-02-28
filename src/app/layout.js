import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "QuickHire - Discover Your Dream Job",
  description:
    "QuickHire is a great platform for job seekers passionate about startups. Find your dream job easier with 5000+ listings.",
  keywords: ["jobs", "hiring", "career", "startups", "quickhire"],
  openGraph: {
    title: "QuickHire - Discover Your Dream Job",
    description: "Find your dream job easier with 5000+ listings on QuickHire.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@600&display=swap" rel="stylesheet" />
      </head>
      <body className={`${epilogue.variable} antialiased`}>{children}</body>
    </html>
  );
}
