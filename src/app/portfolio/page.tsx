import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title:
    "Portfolio | AI, Software Development, Websites & Digital Marketing | Tygon Solutions",

  description:
    "Explore the Tygon Solutions portfolio featuring AI applications, enterprise software, SaaS platforms, business websites, e-commerce solutions, healthcare technology, machine learning, SEO, digital marketing, branding, paid advertising, and business growth solutions.",

  keywords: [
    "Tygon Solutions Portfolio",
    "Software Development Portfolio",
    "AI Development Company",
    "Artificial Intelligence Projects",
    "Machine Learning Projects",
    "Deep Learning Projects",
    "Generative AI",
    "LLM Development",
    "NLP Projects",
    "Python Development",
    "Next.js Development",
    "React Development",
    "Node.js Development",
    "Full Stack Development",
    "Custom Software Development",
    "Enterprise Software Development",
    "SaaS Development Company",
    "Business Website Development",
    "Corporate Website Design",
    "E-Commerce Development",
    "Healthcare Software",
    "Healthcare AI",
    "Digital Marketing Agency",
    "SEO Services",
    "Search Engine Optimization",
    "Social Media Marketing",
    "Google Ads",
    "Meta Ads",
    "Lead Generation",
    "Performance Marketing",
    "Branding Services",
    "Content Marketing",
    "Web Development Hyderabad",
    "Digital Marketing Hyderabad",
    "Real Estate Website Development",
    "Packers and Movers Website",
  ],

  alternates: {
    canonical: "/portfolio",
  },

  openGraph: {
    title:
      "Portfolio | AI, Software Development, Websites & Digital Marketing | Tygon Solutions",

    description:
      "Discover AI applications, SaaS products, enterprise software, business websites, SEO campaigns, branding, and digital marketing solutions delivered by Tygon Solutions.",

    url: "/portfolio",

    siteName: "Tygon Solutions",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tygon Solutions Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Portfolio | AI, Software Development & Digital Marketing | Tygon Solutions",

    description:
      "Explore our portfolio of AI solutions, SaaS platforms, enterprise software, business websites, SEO, branding, and digital marketing projects.",

    images: ["/og-image.png"],
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

  category: "Technology",

  authors: [
    {
      name: "Tygon Solutions",
    },
  ],
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}