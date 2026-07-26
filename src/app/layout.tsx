import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Providers } from "@/components/Providers";
import ScrollToHash from "@/components/ScrollToHash";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://tygon-solutions.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Tygon Solutions | One Partner. Unlimited Digital Solutions.",
    template: "%s | Tygon Solutions",
  },

  description:
    "Tygon Solutions helps businesses build, automate, market, and scale through AI solutions, custom software development, cloud services, cybersecurity, digital marketing, branding, and technology consulting.",

  keywords: [
    "Tygon Solutions",
    "Technology Company",
    "Software Development Company",
    "Software Development Services",
    "AI Solutions",
    "Artificial Intelligence",
    "AI Development Company",
    "Custom Software Development",
    "Web Development",
    "Website Development",
    "Mobile App Development",
    "Cloud Services",
    "Cloud Computing",
    "DevOps",
    "Cybersecurity",
    "Digital Marketing",
    "SEO Services",
    "Branding",
    "UI UX Design",
    "Business Consulting",
    "Technology Consulting",
    "Digital Transformation",
    "Business Automation",
    "Enterprise Software",
    "Technology Partner",
    "Software Company India",
    "IT Services",
    "Application Development",
    "Social Media Marketing",
    "Social Media Management",
  ],

  applicationName: "Tygon Solutions",

  authors: [
    {
      name: "Tygon Solutions",
      url: siteUrl,
    },
  ],

  creator: "Tygon Solutions",

  publisher: "Tygon Solutions",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Tygon Solutions",
    title: "Tygon Solutions | One Partner. Unlimited Digital Solutions.",
    description:
      "Helping businesses build, automate, market, and scale through AI, software engineering, cloud, digital marketing, cybersecurity, and innovative technology solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tygon Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tygon Solutions | One Partner. Unlimited Digital Solutions.",
    description:
      "Helping businesses build, automate, market, and scale through AI, software engineering, cloud, digital marketing, cybersecurity, and innovative technology solutions.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.webmanifest",

  category: "technology",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    "@id": `${siteUrl}/#organization`,

    name: "Tygon Solutions",

    url: siteUrl,

    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.png`,
      width: 512,
      height: 512,
    },

    image: `${siteUrl}/og-image.png`,

    description:
      "Tygon Solutions helps businesses build, automate, market, and scale through AI solutions, software development, cloud services, cybersecurity, digital marketing, branding, and technology consulting.",

    email: "tygonsolutions@gmail.com",

    telephone: "+91-8919655002",

    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },

    sameAs: [
      "https://www.linkedin.com/company/tygon-solutions",
      "https://www.instagram.com/tygon_solutions",
      "https://github.com/jairammargam01-dotcom/Tygon-Solutions",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",

    "@type": "WebSite",

    "@id": `${siteUrl}/#website`,

    url: siteUrl,

    name: "Tygon Solutions",

    description:
      "Helping businesses build, automate, market, and scale through AI, software engineering, cloud, cybersecurity, digital marketing, and innovative technology solutions.",

    publisher: {
      "@id": `${siteUrl}/#organization`,
    },

    inLanguage: "en-US",

    potentialAction: {
      "@type": "SearchAction",

      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/blog?search={search_term_string}`,
      },

      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-background font-sans antialiased text-foreground">
        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Website Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <ScrollToHash />

        <Providers>
          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}