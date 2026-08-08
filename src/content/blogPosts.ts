export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  updatedAt?: string;

  readTime: string;
  image: string;
  keywords: string[];

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
    updatedAt: "2026-07-26",
    readTime: "12 min read",
    image: "/blog/website-development-cost.webp",
    keywords: [
      "website development cost",
      "website development pricing",
      "website development company",
      "website development services",
      "website cost 2026",
      "business website cost",
      "custom website development",
      "website development guide",
      "website pricing guide",
      "cost to build a website",
      "professional website development",
      "corporate website development",
      "ecommerce website cost",
      "web development pricing",
      "website development India",
    ],
    component: "WebsiteDevelopmentCost",
  },

  {
    slug: "how-ai-reduces-business-costs",
    title:
      "How AI Is Reducing Business Costs Across Every Industry",
    excerpt:
      "Learn how businesses can use AI to reduce operational costs, automate repetitive workflows, improve productivity, optimize decision-making, and measure the real ROI of AI implementation.",
    category: "Artificial Intelligence",
    date: "2026-08-08",
    readTime: "20 min read",
    image: "/blog/ai-business-costs.webp",
    keywords: [
      "AI for business",
      "AI business automation",
      "artificial intelligence",
      "AI cost reduction",
      "AI automation",
      "business automation",
      "AI productivity",
      "AI solutions",
      "AI consulting",
      "business AI",
      "machine learning",
      "generative AI",
      "AI transformation",
      "AI services",
      "AI development company",
      "AI workflow automation",
      "AI customer support",
      "AI document processing",
      "AI predictive analytics",
      "AI forecasting",
      "AI cybersecurity",
      "AI business strategy",
      "AI ROI",
      "AI implementation",
      "AI for small business",
      "enterprise AI",
      "AI use cases",
      "AI cost savings",
      "AI digital transformation",
    ],
    component: "AiBusinessCosts",
  },

  {
    slug: "react-vs-nextjs-business-websites",

    title:
      "React vs Next.js: Which Is Better for Modern Business Websites?",

    excerpt:
      "Compare React and Next.js across SEO, rendering, performance, routing, scalability, security, deployment, SaaS, e-commerce, and business use cases to determine which technology is right for your project.",

    category: "Web Development",

    date: "2026-07-15",

    updatedAt: "2026-08-08",

    readTime: "20 min read",

    image: "/blog/react-vs-next.webp",

    keywords: [
      "React vs Next.js",
      "React vs Next.js for business",
      "Next.js vs React",
      "Next.js SEO",
      "React SEO",
      "Next.js business website",
      "React website",
      "Next.js development",
      "React development",
      "Next.js performance",
      "React performance",
      "Next.js rendering",
      "React rendering",
      "SSR vs CSR",
      "Server Components",
      "Client Components",
      "Next.js routing",
      "React routing",
      "Next.js scalability",
      "React scalability",
      "Next.js for SaaS",
      "React for SaaS",
      "Next.js ecommerce",
      "React ecommerce",
      "business website framework",
      "web development framework",
      "frontend development",
      "full stack React",
      "Next.js guide",
      "React guide",
    ],

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
    keywords: [
      "digital transformation",
      "business transformation",
      "digital strategy",
      "digital business",
      "cloud transformation",
      "AI transformation",
      "business automation",
      "technology consulting",
      "digital innovation",
      "enterprise transformation",
      "digital modernization",
      "IT consulting",
      "business technology",
      "digital solutions",
      "digital consulting",
    ],
    component: "DigitalTransformation",
  },
];