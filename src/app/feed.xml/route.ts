import { blogPosts } from "@/content/blogPosts";

export async function GET() {
  const siteUrl = "https://tygon-solutions.vercel.app";

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>

<title>Tygon Solutions Blog</title>

<link>${siteUrl}</link>

<description>
Latest insights on AI, Software Development, Cloud Computing, Digital Marketing, Cyber Security and Digital Transformation.
</description>

<language>en-us</language>

${blogPosts
  .map(
    (post) => `
<item>

<title><![CDATA[${post.title}]]></title>

<link>${siteUrl}/blog/${post.slug}</link>

<guid>${siteUrl}/blog/${post.slug}</guid>

<description><![CDATA[${post.excerpt}]]></description>

<pubDate>${new Date(post.date).toUTCString()}</pubDate>

</item>
`
  )
  .join("")}

</channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml",
      "Cache-Control":
        "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}