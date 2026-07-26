"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  CalendarDays,
  Clock,
  ChevronDown,
  Link as LinkIcon,
  List,
} from "lucide-react";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/content/blogPosts";

interface FAQItem {
  question: string;
  answer: string;
}

interface ArticleLayoutProps {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  children: React.ReactNode;
  faq?: FAQItem[];
}

export default function ArticleLayout({
  slug,
  title,
  description,
  category,
  date,
  readTime,
  image,
  children,
  faq = [],
}: ArticleLayoutProps) {
  const [progress, setProgress] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const [headings, setHeadings] = useState<
    {
      id: string;
      text: string;
      level: number;
    }[]
  >([]);

  const [activeHeading, setActiveHeading] = useState("");
 
  function slugify(text: string) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  }

  async function copyHeadingLink(id: string) {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;

    try {
      await navigator.clipboard.writeText(url);
    } catch {
      //
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const current = window.scrollY;

      const percentage =
        total <= 0 ? 0 : (current / total) * 100;

      setProgress(percentage);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll(
        "article h2, article h3"
      )
    ) as HTMLHeadingElement[];

    const parsed = elements.map((heading) => {
      if (!heading.id) {
        heading.id = heading.innerText
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");
      }

      return {
        id: heading.id,
        text: heading.innerText,
        level: heading.tagName === "H2" ? 2 : 3,
      };
    });

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHeadings(parsed);

    elements.forEach((heading) => {
      heading.classList.add("group");

      if (heading.querySelector(".heading-anchor")) {
        return;
      }

      const button = document.createElement("button");

      button.className =
        "heading-anchor ml-3 opacity-0 transition-opacity group-hover:opacity-100";

      button.innerHTML = "🔗";

      button.onclick = (e) => {
        e.preventDefault();
        copyHeadingLink(heading.id || slugify(heading.innerText));
      };

      heading.appendChild(button);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
      }
    );

    elements.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  const sortedPosts = [...blogPosts].sort(
    (a, b) =>
      new Date(b.updatedAt ?? b.date).getTime() -
      new Date(a.updatedAt ?? a.date).getTime()
  );

  const currentIndex = sortedPosts.findIndex(
    (post) => post.slug === slug
  );

  const previousArticle =
    currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;

  const nextArticle =
    currentIndex < sortedPosts.length - 1
      ? sortedPosts[currentIndex + 1]
      : null;

  const currentPost = blogPosts.find(
    (post) => post.slug === slug
  );

  const relatedPosts = blogPosts
    .filter((post) => post.slug !== slug)
    .map((post) => {
      let score = 0;

      // Highest weight: same category
      if (post.category === currentPost?.category) {
        score += 100;
      }

      // Medium weight: shared keywords
      const sharedKeywords = post.keywords.filter((keyword) =>
        currentPost?.keywords.includes(keyword)
      ).length;

      score += sharedKeywords * 15;

      return {
        ...post,
        score,
      };
    })
    .sort((a, b) => {
      if (a.score !== b.score) {
        return b.score - a.score;
      }

      return (
        new Date(b.updatedAt ?? b.date).getTime() -
        new Date(a.updatedAt ?? a.date).getTime()
      );
    })
    .slice(0, 3);

  const articleUrl = `https://tygon-solutions.vercel.app/blog/${slug}`;

  const shareLinkedIn =
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      articleUrl
    )}`;

  const shareFacebook =
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      articleUrl
    )}`;

  const hasToc = headings.length > 2;

  

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(articleUrl);
    } catch {
      //
    }
  }

  return (
    <>
      {/* Reading Progress */}
      <div className="fixed top-0 left-0 z-[999] h-1 w-full bg-white/5">
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-200 ease-out"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <section className="pt-40 pb-24">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Breadcrumb */}
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/50">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
            <span>/</span>
            <span className="text-white">{title}</span>
          </nav>

          {/* Back */}
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-primary transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Category */}
          <span className="mb-6 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            {category}
          </span>

          {/* Title */}
          <h1 className="mb-6 text-5xl font-display font-bold leading-tight text-white lg:text-6xl">
            {title}
          </h1>

          {/* Description */}
          <p className="mb-10 max-w-4xl text-xl leading-relaxed text-white/60">
            {description}
          </p>

          {/* Meta */}
          <div className="mb-10 flex flex-wrap items-center gap-8 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              {date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {readTime}
            </div>
            <div>Tygon Solutions Editorial Team</div>
          </div>

          {/* Share Buttons */}
          <div className="mb-12 flex flex-wrap gap-3">
            <button
              onClick={copyLink}
              className="glass-card flex items-center gap-2 rounded-xl px-4 py-2 hover:bg-white/10"
            >
              <LinkIcon className="h-4 w-4" />
              Copy Link
            </button>
            <a
              href={shareLinkedIn}
              target="_blank"
              rel="noreferrer"
              className="glass-card flex items-center gap-2 rounded-xl px-4 py-2 hover:bg-white/10"
            >
              <FaLinkedinIn className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={shareFacebook}
              target="_blank"
              rel="noreferrer"
              className="glass-card flex items-center gap-2 rounded-xl px-4 py-2 hover:bg-white/10"
            >
              <FaFacebookF className="h-4 w-4" />
              Facebook
            </a>
          </div>

          {/* Hero Image */}
          <Image
            src={image}
            alt={title}
            width={1400}
            height={800}
            priority
            className="mb-16 h-[450px] w-full rounded-3xl object-cover"
          />

          {/* Author */}
          <div className="glass-card mb-16 rounded-3xl p-8">
            <h3 className="mb-3 text-2xl font-bold text-white">
              About the Author
            </h3>
            <p className="leading-relaxed text-white/70">
              Tygon Solutions Editorial Team publishes practical insights on
              Artificial Intelligence, Software Engineering, Cloud Computing,
              Digital Marketing, Enterprise Technology, Cyber Security and
              Digital Transformation. Every article is reviewed by experienced
              technology professionals before publication.
            </p>
          </div>

          {/* Mobile TOC */}
          {hasToc && (
            <details className="glass-card mb-10 rounded-2xl p-5 lg:hidden">
              <summary className="cursor-pointer text-lg font-semibold text-white">
                Table of Contents
              </summary>

              <nav className="mt-5 space-y-2">
                {headings.map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className="block rounded-lg px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white"
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            </details>
          )}

          <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
            {/* Sticky TOC */}
            <aside className="hidden lg:block">
              {hasToc && (
                <div className="sticky top-28">
                  <div className="glass-card rounded-2xl p-6">
                    <div className="mb-6 flex items-center gap-2">
                      <List className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-white">
                        Table of Contents
                      </h3>
                    </div>

                    <nav className="space-y-2">
                      {headings.map((heading) => (
                        <a
                          key={heading.id}
                          href={`#${heading.id}`}
                          className={`block rounded-lg px-3 py-2 text-sm transition-all ${
                            activeHeading === heading.id
                              ? "bg-primary text-white"
                              : "text-white/60 hover:bg-white/5 hover:text-white"
                          } ${heading.level === 3 ? "ml-4" : ""}`}
                        >
                          {heading.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              )}
            </aside>

            {/* Article */}
            <article
              className="
                prose
                prose-invert
                prose-lg
                lg:prose-xl
                max-w-none

                prose-headings:scroll-mt-32
                prose-headings:font-display
                prose-headings:text-white
                prose-headings:font-bold

                prose-h2:mt-14
                prose-h2:mb-6
                prose-h2:border-b
                prose-h2:border-white/10
                prose-h2:pb-3

                prose-h3:mt-10
                prose-h3:mb-4

                prose-p:text-white/80
                prose-p:leading-8

                prose-a:text-primary
                prose-a:no-underline

                prose-strong:text-white

                prose-li:text-white/80

                prose-img:rounded-2xl
                prose-img:shadow-xl
              "
            >
              {children}
            </article>
          </div>

          {/* FAQ */}
          {faq.length > 0 && (
            <section className="mt-24">
              <h2 className="mb-10 text-4xl font-display font-bold text-white">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faq.map((item, index) => {
                  const isOpen = openFAQ === index;

                  return (
                    <div
                      key={index}
                      className="glass-card overflow-hidden rounded-2xl"
                    >
                      <button
                        onClick={() =>
                          setOpenFAQ(isOpen ? null : index)
                        }
                        className="flex w-full items-center justify-between p-6 text-left"
                      >
                        <span className="text-lg font-semibold text-white">
                          {item.question}
                        </span>

                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p className="leading-relaxed text-white/70">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Previous / Next */}
          {(previousArticle || nextArticle) && (
            <section className="mt-24">
              <div className="grid gap-6 md:grid-cols-2">
                {previousArticle && (
                  <Link
                    href={`/blog/${previousArticle.slug}`}
                    className="glass-card rounded-2xl border border-white/10 p-6 transition-all hover:border-primary"
                  >
                    <p className="mb-2 text-sm text-white/40">
                      Previous Article
                    </p>

                    <h3 className="text-xl font-bold text-white">
                      {previousArticle.title}
                    </h3>
                  </Link>
                )}

                {nextArticle && (
                  <Link
                    href={`/blog/${nextArticle.slug}`}
                    className="glass-card rounded-2xl border border-white/10 p-6 transition-all hover:border-primary"
                  >
                    <p className="mb-2 text-sm text-white/40">
                      Next Article
                    </p>

                    <h3 className="text-xl font-bold text-white">
                      {nextArticle.title}
                    </h3>
                  </Link>
                )}
              </div>
            </section>
          )}

          {/* Related Articles */}
          <section className="mt-28">
            <h2 className="mb-10 text-4xl font-display font-bold text-white">
              Related Articles
            </h2>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {relatedPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-28">
            <div className="glass-card rounded-3xl p-10 text-center md:p-16">
              <h2 className="mb-6 text-4xl font-display font-bold text-white">
                Ready to Build Your Next Digital Product?
              </h2>

              <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-white/70">
                Whether you’re planning an AI solution, business website,
                enterprise software, mobile application, cloud platform, or
                complete digital transformation, our team is ready to help you
                build secure, scalable and future-ready solutions.
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-xl bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90"
                >
                  Schedule a Consultation
                </Link>
                <Link
                  href="/services"
                  className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}