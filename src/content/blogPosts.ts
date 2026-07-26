export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;

  // Name of the article component
  component: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "website-development-cost-2026",
    title:
      "How Much Does Website Development Cost in 2026? A Complete Pricing Guide",
    excerpt:
      "Learn how much website development costs in 2026, what affects pricing, different website types, hidden costs, timelines, and how to choose the right development partner.",
    category: "Web Development",
    date: "2026-07-26",
    readTime: "12 min read",
    image: "/blog/website-development-cost.webp",
    component: "WebsiteDevelopmentCost",
  },

  {
    slug: "how-ai-reduces-business-costs",
    title:
      "How AI Is Reducing Business Costs Across Every Industry",
    excerpt:
      "Discover how Artificial Intelligence is helping businesses reduce operational costs, automate repetitive work, and improve productivity.",
    category: "Artificial Intelligence",
    date: "2026-07-15",
    readTime: "8 min read",
    image: "/blog/ai-business-costs.webp",
    component: "AiBusinessCosts",
  },

  {
    slug: "react-vs-nextjs-business-websites",
    title:
      "React vs Next.js: Which Is Better for Modern Business Websites?",
    excerpt:
      "Compare React and Next.js for SEO, performance, scalability, and developer experience to determine which technology fits your business.",
    category: "Web Development",
    date: "2026-07-15",
    readTime: "9 min read",
    image: "/blog/react-vs-next.webp",
    component: "ReactVsNext",
  },

  {
    slug: "digital-transformation-business-guide",
    title:
      "Digital Transformation: A Complete Guide for Modern Businesses",
    excerpt:
      "Learn how digital transformation helps companies improve efficiency, customer experience, automation, and long-term business growth.",
    category: "Digital Strategy",
    date: "2026-07-15",
    readTime: "10 min read",
    image: "/blog/digital-transformation.webp",
    component: "DigitalTransformation",
  },
];