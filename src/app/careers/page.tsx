import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://tygon-solutions.vercel.app"),

  title: "Creative Visual Designer Jobs in India | Tygon Solutions",

  description:
    "Explore creative design opportunities at Tygon Solutions. We welcome graphic designers, motion designers, illustrators, visual designers, UI/UX designers, and creative professionals across India.",

  keywords: [
    "Creative Designer Jobs India",
    "Visual Designer Jobs India",
    "UI UX Designer Jobs India",
    "Graphic Designer Jobs India",
    "Motion Graphics Designer Jobs India",
    "Creative Design Careers",
    "Visual Design Careers",
    "UI UX Careers India",
    "Graphic Design Careers India",
    "Motion Design Careers India",
    "Illustration Jobs India",
    "Wireframing Jobs India",
    "Storyboarding Jobs India",
    "Creative Jobs India",
    "Design Jobs India",
    "Tygon Solutions Careers",
    "Tygon Solutions Jobs",
    "Tygon Studios",
  ],

  alternates: {
    canonical: "/careers",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Creative Design Careers in India | Tygon Solutions",

    description:
      "Tygon Solutions is looking for creative professionals across UI/UX design, graphic design, motion graphics, illustration, visual design, wireframing, and storyboarding.",

    url: "/careers",

    siteName: "Tygon Solutions",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tygon Solutions Careers",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Creative Design Careers | Tygon Solutions",

    description:
      "Explore creative design opportunities at Tygon Solutions for UI/UX designers, graphic designers, motion designers, illustrators, and visual creatives.",

    images: ["/og-image.png"],
  },
};

export default function CareersPage() {
  return <CareersClient />;
}