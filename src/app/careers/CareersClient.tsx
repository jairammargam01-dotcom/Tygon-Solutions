"use client";

import { motion } from "motion/react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const positions = [
  {
    title: "Creative Visual Designer",
    type: "Flexible",
    location: "India",
    department: "Creative & Design",
    arrangement: "Hybrid",
  },
];

export default function CareersClient() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/50">
          Careers
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Join Tygon Solutions
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
          We’re looking for creative professionals to join our growing
          <strong className="text-white"> Creative &amp; Design </strong>
          team. If you have strong skills in graphic design, motion graphics,
          digital illustration, wireframing, storyboarding, or other visual
          design disciplines, we’d love to see your work.
        </p>

        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/60">
          You don’t need experience in every area. We’re primarily interested
          in your creativity, design skills, problem-solving ability, and the
          quality of your portfolio.
        </p>
      </div>

      <div className="space-y-4">
        {positions.map((position, index) => (
          <motion.div
            key={position.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="glass-card flex flex-col items-start justify-between gap-6 p-6 transition-colors hover:bg-white/10 md:flex-row md:items-center md:p-8"
          >
            <div>
              <h2 className="mb-3 text-xl font-bold text-white">
                {position.title}
              </h2>

              <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  {position.department}
                </span>

                <span>{position.type}</span>

                <span>• {position.arrangement}</span>

                <span>• {position.location}</span>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/50">
                Opportunities across graphic design, motion graphics,
                illustration, wireframing, storyboarding, branding, social
                media creatives, and visual design.
              </p>
            </div>

            <Button asChild variant="outline" className="shrink-0">
              <Link
                href="https://forms.gle/mknED12hfdkUJAv27"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </Link>
            </Button>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-3xl text-center">
        <p className="text-sm leading-relaxed text-white/50">
          We welcome applications from candidates interested in full-time,
          part-time, freelance, or contract opportunities.
        </p>
      </div>
    </section>
  );
}