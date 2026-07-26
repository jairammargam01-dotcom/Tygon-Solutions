import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://tygon-solutions.vercel.app"),

  title:
    "Remote Motion Graphics Designer & Video Editor Jobs | Full-Time",

  description:
    "Tygon Solutions is hiring a full-time remote Motion Graphics Designer & Video Editor. Create engaging motion graphics, advertisements, YouTube videos, social media reels, animations, and branded visual content. Apply today.",

  keywords: [
    "Motion Graphics Designer Jobs",
    "Video Editor Jobs",
    "Motion Graphics Jobs",
    "Motion Designer",
    "Remote Motion Graphics Designer",
    "Remote Video Editor",
    "Remote Creative Jobs",
    "Remote Jobs India",
    "Adobe After Effects Jobs",
    "Adobe Premiere Pro Jobs",
    "YouTube Video Editor",
    "Social Media Video Editor",
    "Animation Jobs",
    "Creative Careers",
    "Video Editing Careers",
    "Creative Designer Jobs",
    "Tygon Solutions Careers",
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
    title:
      "Remote Motion Graphics Designer & Video Editor | Careers",

    description:
      "We're hiring a full-time remote Motion Graphics Designer & Video Editor. Join Tygon Solutions and work on exciting motion graphics, advertisements, YouTube videos, animations, and social media content.",

    url: "/careers",

    siteName: "Tygon Solutions",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Remote Motion Graphics Designer & Video Editor",

    description:
      "Apply for our full-time remote Motion Graphics Designer & Video Editor position and become part of the Tygon Solutions creative team.",
  },
};

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",

  title: "Motion Graphics Designer & Video Editor",

  description:
    "Tygon Solutions is hiring a full-time Remote Motion Graphics Designer & Video Editor. You'll create motion graphics, advertisements, YouTube videos, social media content, branding assets, and animations while collaborating with our creative team.",

  identifier: {
    "@type": "PropertyValue",
    name: "Tygon Solutions",
    value: "MOTION-GRAPHICS-VIDEO-EDITOR-2026",
  },

  datePosted: "2026-07-20",

  validThrough: "2026-12-31T23:59:59+05:30",

  employmentType: "FULL_TIME",

  jobLocationType: "TELECOMMUTE",

  applicantLocationRequirements: {
    "@type": "Country",
    name: "India",
  },

  hiringOrganization: {
    "@type": "Organization",
    name: "Tygon Solutions",
    sameAs: "https://tygon-solutions.vercel.app",
    logo: "https://tygon-solutions.vercel.app/logo.png",
  },

  industry: "Information Technology",

  occupationalCategory: "Motion Graphics Designer",

  workHours: "Full-Time",

  directApply: true,

  url: "https://tygon-solutions.vercel.app/careers",

  applicationContact: {
    "@type": "ContactPoint",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSeaKztvzQSHEsRFeHMGky4nSET248Ifs4E-zL_YLuOdYTEFWg/viewform?usp=header",
    contactType: "Job Application",
  },
};

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingSchema),
        }}
      />

      <CareersClient />
    </>
  );
}