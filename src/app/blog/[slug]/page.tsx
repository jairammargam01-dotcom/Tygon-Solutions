import { notFound } from "next/navigation";
import type { Metadata } from "next";

import ArticleLayout from "@/components/ArticleLayout";
import { blogPosts } from "@/content/blogPosts";

import AiBusinessCosts from "@/content/articles/AiBusinessCosts";
import ReactVsNext from "@/content/articles/ReactVsNext";
import DigitalTransformation from "@/content/articles/DigitalTransformation";
import WebsiteDevelopmentCost from "@/content/articles/WebsiteDevelopmentCost";

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
    };
  }

  return {
    title: `${post.title} | Tygon Solutions`,
    description: post.excerpt,

    alternates: {
      canonical: `/blog/${post.slug}`,
    },

    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://tygon-solutions.vercel.app/blog/${post.slug}`,
      type: "article",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
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

  const Article =
    articleComponents[
      post.component as keyof typeof articleComponents
    ];

  if (!Article) {
    notFound();
  }

  return (
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
  );
}