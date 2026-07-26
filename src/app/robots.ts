import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://tygon-solutions.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",

        allow: [
          "/",
          "/about",
          "/services",
          "/industries",
          "/technologies",
          "/portfolio",
          "/process",
          "/blog",
          "/careers",
          "/contact",
          "/faq",
        ],

        disallow: [
          "/api/",
          "/admin/",
          "/dashboard/",
          "/login/",
          "/private/",
          "/tmp/",
        ],
      },

      {
        userAgent: "Googlebot",

        allow: "/",

        disallow: [
          "/api/",
          "/admin/",
          "/dashboard/",
        ],
      },

      {
        userAgent: "Bingbot",

        allow: "/",

        disallow: [
          "/api/",
          "/admin/",
          "/dashboard/",
        ],
      },
    ],

    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/image-sitemap.xml`,
      `${baseUrl}/feed.xml`,
    ],

    host: baseUrl,
  };
}