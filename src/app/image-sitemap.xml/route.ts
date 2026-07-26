import { blogPosts } from "@/content/blogPosts";

export async function GET() {
  const siteUrl = "https://tygon-solutions.vercel.app";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>

<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>

${blogPosts
  .map(
    (post) => `
<url>

  <loc>${siteUrl}/blog/${post.slug}</loc>

  <image:image>

    <image:loc>${siteUrl}${post.image}</image:loc>

    <image:title><![CDATA[${post.title}]]></image:title>

    <image:caption><![CDATA[${post.excerpt}]]></image:caption>

  </image:image>

</url>
`
  )
  .join("")}

</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control":
        "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}