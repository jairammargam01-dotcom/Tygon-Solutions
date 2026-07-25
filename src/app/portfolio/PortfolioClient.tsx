"use client";

import { motion } from "motion/react";

const projects = [
  {
    title: "Client Success Stories",
    category: "Web Development & Digital Marketing",
    featured: true,
    tech: [
      "Next.js",
      "React",
      "SEO",
      "Google Ads",
      "Meta Ads",
      "Analytics",
      "Social Media",
      "Branding",
    ],
    description:
      "Helping businesses establish a powerful digital presence through high-performance websites, SEO, paid advertising, branding, social media management, and lead generation.",

    highlights: [
      "Website Development",
      "SEO",
      "Lead Generation",
      "Digital Marketing",
    ],

    gradient: "from-cyan-500/20 to-blue-500/20",

    icon: "🚀",

    companies: [
      {
        name: "Supraja Infracon",
        industry: "Real Estate",
        location: "Hyderabad",
        services: [
          "Corporate Website",
          "UI/UX Design",
          "SEO",
          "Digital Marketing",
          "Brand Visibility",
        ],
      },
      {
        name: "SafeMove",
        industry: "Packers & Movers",
        location: "Hyderabad",
        website: "https://safemove.jaivibe.com",
        services: [
          "Business Website",
          "SEO",
          "Social Media Marketing",
          "Lead Generation",
          "Performance Marketing",
        ],
      },
    ],
  },

  {
    title: "Jessy AI",
    category: "Artificial Intelligence",
    tech: [
      "Python",
      "OpenAI API",
      "Edge-TTS",
      "SpeechRecognition",
      "NLP",
      "Tkinter",
    ],
    description:
      "AI-powered intelligent virtual assistant capable of voice conversations, natural language understanding, code generation, automation, intelligent search, image generation, and real-time information retrieval.",

    highlights: [
      "Voice Commands",
      "AI Chat",
      "Code Generation",
      "Automation",
    ],

    gradient: "from-blue-500/20 to-cyan-500/20",

    icon: "🤖",
  },

  {
    title: "Vog-Balien",
    category: "E-Commerce Platform",

    tech: [
      "React.js",
      "Firebase",
      "Firestore",
      "EmailJS",
      "Node.js",
      "JavaScript",
    ],

    description:
      "Modern fashion e-commerce platform featuring secure Firebase authentication, OTP password recovery, tailor integration, admin dashboard, and scalable cloud architecture.",

    highlights: [
      "Authentication",
      "Admin Panel",
      "Tailor Integration",
      "OTP Recovery",
    ],

    gradient: "from-pink-500/20 to-rose-500/20",

    icon: "🛍️",
  },

  {
    title: "Travel Food",
    category: "Food Delivery Platform",

    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "Gamyam API",
    ],

    description:
      "Food delivery and restaurant management platform featuring live tracking, delivery optimization, ETA prediction, and scalable backend architecture.",

    highlights: [
      "Live Tracking",
      "ETA Prediction",
      "Restaurant Dashboard",
      "Route Optimization",
    ],

    gradient: "from-orange-500/20 to-yellow-500/20",

    icon: "🍔",
  },

  {
    title: "Flipkart Review Analyzer",
    category: "NLP & Generative AI",

    tech: [
      "Python",
      "Streamlit",
      "DistilBERT",
      "spaCy",
      "Gemini API",
      "Selenium",
    ],

    description:
      "AI-powered sentiment analysis platform that automatically scrapes Flipkart reviews, performs NLP, topic modelling, grammar correction, and report generation.",

    highlights: [
      "Sentiment Analysis",
      "Topic Modeling",
      "AI Reports",
      "CSV Export",
    ],

    gradient: "from-purple-500/20 to-fuchsia-500/20",

    icon: "📊",
  },

  {
    title: "Customer Churn Prediction",
    category: "Machine Learning",

    tech: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Pandas",
      "NumPy",
    ],

    description:
      "Enterprise-grade machine learning solution predicting telecom customer churn using ensemble learning and predictive analytics.",

    highlights: [
      "96.8% Accuracy",
      "ROC-AUC 0.989",
      "Ensemble Learning",
      "Business Insights",
    ],

    gradient: "from-sky-500/20 to-blue-500/20",

    icon: "📈",
  },

  {
    title: "Breast Cancer Prediction",
    category: "Healthcare AI",

    tech: [
      "TensorFlow",
      "Keras",
      "Python",
      "Scikit-learn",
      "NumPy",
      "Pandas",
    ],

    description:
      "Artificial Neural Network for early breast cancer prediction using deep learning and intelligent healthcare analytics.",

    highlights: [
      "Deep Learning",
      "ANN",
      "Healthcare AI",
      "Medical Analytics",
    ],

    gradient: "from-red-500/20 to-pink-500/20",

    icon: "🩺",
  },

  {
    title: "Medi+",
    category: "Healthcare Technology",

    tech: [
      "Python",
      "Flask",
      "SQLite",
      "Google Maps API",
      "HTML",
      "CSS",
    ],

    description:
      "Geo-based medicine finder helping users locate nearby pharmacies and medicine availability using Google Maps integration.",

    highlights: [
      "Geo Search",
      "Maps",
      "Nearby Pharmacies",
      "Healthcare",
    ],

    gradient: "from-emerald-500/20 to-green-500/20",

    icon: "💊",
  },

  {
    title: "Alt-Form",
    category: "SaaS Platform",

    tech: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Node.js",
      "REST API",
    ],

    description:
      "Developer-first backend form platform similar to Formspree. Currently under active development before public launch.",

    highlights: [
      "Coming Soon",
      "REST API",
      "Developer Friendly",
      "Dashboard",
    ],

    gradient: "from-indigo-500/20 to-violet-500/20",

    icon: "📨",
  },
];

export default function PortfolioClient() {
  return (
    <section className="container mx-auto px-4 pb-20 pt-40">
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display mb-6 text-4xl font-bold text-white md:text-6xl"
        >
          Our <span className="text-gradient">Portfolio</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mx-auto max-w-3xl text-lg leading-8 text-white/70"
        >
          From AI solutions and enterprise software to business websites,
          digital marketing, automation, machine learning, and SaaS platforms,
          we build technology that helps businesses innovate, scale, and grow.
        </motion.p>
      </div>
            {/* Masonry Layout */}
      <div
        className="columns-1 gap-8 md:columns-2 xl:columns-3"
        style={{ columnGap: "2rem" }}
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.05,
              duration: 0.45,
            }}
            className={`glass-card group mb-8 break-inside-avoid overflow-hidden rounded-3xl border border-white/10 ${
              project.featured
                ? "border-primary/30 shadow-[0_0_35px_rgba(59,130,246,.18)]"
                : ""
            }`}
          >
            <div
              className={`relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
            >
              <div className="absolute inset-0 transition-all duration-700 group-hover:scale-110 group-hover:rotate-2">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.15),transparent_60%)]" />
              </div>

              {project.featured && (
                <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  Featured
                </div>
              )}

              <div className="relative z-10 text-center">
                <div className="mb-4 text-6xl">
                  {project.icon}
                </div>

                <h2 className="font-display px-6 text-2xl font-bold text-white">
                  {project.title}
                </h2>
              </div>
            </div>

            <div className="p-7">
              <div className="mb-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                {project.category}
              </div>

              <p className="mb-6 leading-7 text-white/70">
                {project.description}
              </p>

              {"companies" in project && project.companies && (
                <div className="mb-6 space-y-4">
                  {project.companies.map((company) => (
                    <div
                      key={company.name}
                      className="rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
                    >
                      <h4 className="font-semibold text-white">
                        {company.name}
                      </h4>

                      <p className="mb-2 text-sm text-primary">
                        {company.industry} • {company.location}
                      </p>

                      {company.website && (
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mb-3 block break-all text-sm text-blue-400 hover:underline"
                        >
                          {company.website}
                        </a>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {company.services.map((service) => (
                          <span
                            key={service}
                            className="rounded-full border border-primary/20 bg-primary/10 px-2 py-1 text-xs text-primary"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mb-6 flex flex-wrap gap-2">
                {project.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/80">
                  Technologies
                </h4>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-white"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <div>
                  <p className="text-sm font-medium text-white">
                    Project Status
                  </p>

                  <p className="text-sm text-emerald-400">
                    {project.title === "Alt-Form"
                      ? "Currently in Development"
                      : "Successfully Completed"}
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7h4m0 0v4m0-4L10 14m-4-7H3m0 0v4m0-4l7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
            <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-24 max-w-6xl overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10"
      >
        <div className="p-10 md:p-14">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display mb-6 text-3xl font-bold text-white md:text-5xl">
              Building Digital Products That Drive Business Growth
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-white/70">
              From AI-powered applications and enterprise software to modern
              business websites and performance-driven digital marketing, we
              partner with startups, SMEs, and enterprises to build scalable
              digital solutions that create measurable business impact.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-2 text-4xl font-bold text-primary">
                10+
              </div>

              <h3 className="mb-2 text-lg font-semibold text-white">
                Projects Delivered
              </h3>

              <p className="text-sm leading-6 text-white/60">
                AI solutions, SaaS platforms, enterprise software,
                business websites and digital products.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-2 text-4xl">
                🤖
              </div>

              <h3 className="mb-2 text-lg font-semibold text-white">
                AI & Automation
              </h3>

              <p className="text-sm leading-6 text-white/60">
                LLMs, NLP, Machine Learning, Deep Learning,
                intelligent automation and business AI solutions.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-2 text-4xl">
                💻
              </div>

              <h3 className="mb-2 text-lg font-semibold text-white">
                Software Development
              </h3>

              <p className="text-sm leading-6 text-white/60">
                Full-stack web applications,
                SaaS platforms, enterprise software,
                mobile apps and cloud solutions.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-2 text-4xl">
                📈
              </div>

              <h3 className="mb-2 text-lg font-semibold text-white">
                Digital Growth
              </h3>

              <p className="text-sm leading-6 text-white/60">
                SEO, branding, paid advertising,
                social media marketing,
                content strategy and lead generation.
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-center gap-5 md:flex-row">
            <a
              href="/contact"
              className="rounded-xl bg-primary px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-primary/90"
            >
              Start Your Project
            </a>

            <a
              href="/services"
              className="rounded-xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-primary/40 hover:bg-primary/10"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}