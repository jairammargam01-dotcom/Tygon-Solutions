import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ArticleLayout from "@/components/ArticleLayout";
import { blogPosts } from "@/content/blogPosts";

import AiBusinessCosts from "@/content/articles/AiBusinessCosts";
import DigitalTransformation from "@/content/articles/DigitalTransformation";
import ReactVsNext from "@/content/articles/ReactVsNext";
import WebsiteDevelopmentCost from "@/content/articles/WebsiteDevelopmentCost";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://tygon-solutions.vercel.app";

const articleComponents = {
  AiBusinessCosts,
  ReactVsNext,
  DigitalTransformation,
  WebsiteDevelopmentCost,
};

const articleFaqs: Record<
  string,
  {
    question: string;
    answer: string;
  }[]
> = {
  "website-development-cost-2026": [
    {
      question: "How much does a business website cost?",
      answer:
        "Most professional business websites typically cost between $1,000 and $5,000 depending on the project's scope, design requirements, and functionality.",
    },
    {
      question: "How long does website development take?",
      answer:
        "A standard business website usually takes 3–6 weeks, while complex e-commerce platforms and custom web applications can take several months.",
    },
    {
      question: "Is a custom website better than WordPress?",
      answer:
        "It depends on your goals. WordPress is suitable for many small websites, while custom-built websites offer greater flexibility, performance, scalability, and long-term control for growing businesses.",
    },
    {
      question: "Does website development include SEO?",
      answer:
        "Professional website development should include technical SEO, responsive design, optimized metadata, fast loading speeds, and a search-engine-friendly site structure.",
    },
    {
      question: "Can my website grow as my business grows?",
      answer:
        "Yes. Modern websites built with scalable technologies can easily support additional pages, new services, integrations, user accounts, and future business requirements.",
    },
  ],

  "how-ai-reduces-business-costs": [
    {
      question: "How does AI reduce business costs?",
      answer:
        "AI automates repetitive tasks, improves decision-making, reduces manual errors, and increases operational efficiency, allowing businesses to lower costs while improving productivity.",
    },
    {
      question: "Can small businesses use AI?",
      answer:
        "Yes. Modern AI tools are affordable and scalable, making them accessible to startups and small businesses as well as large enterprises.",
    },
    {
      question: "Which industries benefit most from AI?",
      answer:
        "Healthcare, finance, manufacturing, retail, logistics, education, and professional services all benefit significantly from AI-driven automation and analytics.",
    },
  ],

  "react-vs-nextjs-business-websites": [
    {
      question: "Is Next.js better than React for SEO?",
      answer:
        "Next.js can make SEO implementation easier because it supports server and static rendering, structured metadata, routing, and other web-focused capabilities. However, React applications can also rank well when they are properly rendered and technically optimized.",
    },
    {
      question: "Should businesses choose React or Next.js?",
      answer:
        "It depends on the project. Next.js is often a strong choice for corporate websites, marketing websites, blogs, e-commerce platforms, and applications that need SEO and server-side capabilities. React can be an excellent choice for highly interactive applications, dashboards, and projects where maximum architectural flexibility is important.",
    },
    {
      question: "Is Next.js faster than React?",
      answer:
        "Not automatically. Next.js provides rendering, caching, image optimization, and other capabilities that can help developers build performant applications, but actual performance depends on the application's architecture, JavaScript, images, database queries, caching, hosting, and other implementation details.",
    },
    {
      question: "Can I migrate an existing React application to Next.js?",
      answer:
        "Yes. Many React applications can be migrated to Next.js. The migration may involve adapting routing, rendering strategies, data fetching, server and client responsibilities, metadata, and deployment depending on the existing application's architecture.",
    },
  ],

  "digital-transformation-business-guide": [
    {
      question: "What is digital transformation?",
      answer:
        "Digital transformation is the process of integrating modern digital technologies into business operations to improve efficiency, customer experience, and long-term growth.",
    },
    {
      question: "Why is digital transformation important?",
      answer:
        "It enables businesses to remain competitive, automate workflows, improve decision-making, and adapt quickly to changing customer expectations and market conditions.",
    },
  ],
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find(
    (post) => post.slug === slug
  );

  if (!post) {
    return {
      title: "Article Not Found | Tygon Solutions",
      description:
        "The requested article could not be found.",
    };
  }

  const articleUrl = `${siteUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | Tygon Solutions`,

    description: post.excerpt,

    keywords: post.keywords,

    authors: [
      {
        name: "Tygon Solutions",
        url: siteUrl,
      },
    ],

    creator: "Tygon Solutions",

    publisher: "Tygon Solutions",

    category: post.category,

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

    alternates: {
      canonical: articleUrl,
    },

    openGraph: {
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedAt ?? post.date,
      tags: post.keywords,

      url: articleUrl,

      siteName: "Tygon Solutions",

      locale: "en_US",

      title: post.title,

      description: post.excerpt,

      images: [
        {
          url: `${siteUrl}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: post.title,

      description: post.excerpt,

      images: [`${siteUrl}${post.image}`],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const post = blogPosts.find(
    (post) => post.slug === slug
  );

  if (!post) {
    notFound();
  }

  const articleUrl = `${siteUrl}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "TechArticle",

    "@id": `${articleUrl}#article`,

    url: articleUrl,

    headline: post.title,

    description: post.excerpt,

    image: {
      "@type": "ImageObject",
      url: `${siteUrl}${post.image}`,
      width: 1200,
      height: 630,
    },

    author: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Tygon Solutions",
    },

    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Tygon Solutions",

      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
        width: 512,
        height: 512,
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },

    articleSection: post.category,

    keywords: post.keywords.join(", "),

    inLanguage: "en-US",

    datePublished: post.date,

    dateModified: post.updatedAt ?? post.date,
  };

  const faqSchema =
    articleFaqs[slug]?.length > 0
      ? {
          "@context": "https://schema.org",

          "@type": "FAQPage",

          "@id": `${articleUrl}#faq`,

          mainEntity: articleFaqs[slug].map((faq) => ({
            "@type": "Question",

            name: faq.question,

            acceptedAnswer: {
              "@type": "Answer",

              text: faq.answer,
            },
          })),
        }
      : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    "@id": `${articleUrl}#breadcrumb`,

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: {
          "@id": siteUrl,
        },
      },

      {
        "@type": "ListItem",

        position: 2,

        name: "Blog",

        item: {
          "@id": `${siteUrl}/blog`,
        },
      },

      {
        "@type": "ListItem",

        position: 3,

        name: post.title,

        item: {
          "@id": articleUrl,
        },
      },
    ],
  };
  const Article =
  articleComponents[
    post.component as keyof typeof articleComponents
  ];

if (!Article) {
  notFound();
}

return (
  <>
    {/* Article Structured Data */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleSchema),
      }}
    />

    {/* FAQ Structured Data */}
    {faqSchema && (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    )}

    {/* Breadcrumb Structured Data */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema),
      }}
    />

    <ArticleLayout
      slug={post.slug}
      title={post.title}
      description={post.excerpt}
      category={post.category}
      date={post.date}
      readTime={post.readTime}
      image={post.image}
      faq={articleFaqs[slug] ?? []}
    >
      <Article />
    </ArticleLayout>
  </>
);
}