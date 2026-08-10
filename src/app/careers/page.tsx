import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://tygon-solutions.vercel.app"),

  title: "Creative Visual Designer Jobs in India | Tygon Solutions",

  description:
    "Explore creative design opportunities at Tygon Solutions for graphic designers, motion designers, illustrators, visual designers, and other creative professionals across India.",

  keywords: [
    "Creative Designer Jobs India",
    "Creative Visual Designer Jobs India",
    "Visual Designer Jobs India",
    "Graphic Designer Jobs India",
    "Motion Graphics Designer Jobs India",
    "Creative Design Careers",
    "Visual Design Careers",
    "Graphic Design Careers India",
    "Motion Design Careers India",
    "Illustration Jobs India",
    "Wireframing Jobs India",
    "Storyboarding Jobs India",
    "Branding Designer Jobs India",
    "Social Media Designer Jobs India",
    "Creative Jobs India",
    "Design Jobs India",
    "Creative Careers India",
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
    title: "Creative Visual Designer Jobs in India | Tygon Solutions",

    description:
      "Tygon Solutions is looking for creative professionals across graphic design, motion graphics, illustration, visual design, wireframing, storyboarding, branding, and social media creative work.",

    url: "/careers",

    siteName: "Tygon Solutions",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tygon Solutions Creative Visual Designer Careers",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Creative Visual Designer Jobs | Tygon Solutions",

    description:
      "Explore creative design opportunities at Tygon Solutions for graphic designers, motion designers, illustrators, visual designers, and creative professionals.",

    images: ["/og-image.png"],
  },
};

export default function CareersPage() {
  return <CareersClient />;
}