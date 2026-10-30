"use client";

import { ArrowUpRight, BriefcaseBusiness, GraduationCap, Workflow } from "lucide-react";
import { m } from "framer-motion";
import { experienceHighlights } from "@/data";

const highlightIcons = {
  client: BriefcaseBusiness,
  automation: Workflow,
  education: GraduationCap,
};

const Experience = () => {
  return (
    <section className="section-wrap" id="experience">
      <div className="section-heading-row">
        <div>
          <p className="section-kicker">Experience &amp; highlights</p>
          <h2 className="section-title">Where I&apos;ve learned by doing.</h2>
        </div>
        <p className="section-intro">
          A short view of the work and foundations behind what I build.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {experienceHighlights.map((card, index) => {
          const Icon = highlightIcons[card.icon as keyof typeof highlightIcons];

          return (
          <m.article
            key={card.id}
            className="experience-card group"
            initial={{ opacity: 1, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.38, delay: index * 0.06, ease: "easeOut" }}
            whileHover={{ y: -3 }}
          >
            <div className="experience-card-topline">
              <span className="experience-logo"><Icon size={21} strokeWidth={1.8} /></span>
              <span className="experience-index">{card.period}</span>
            </div>
            <div className="flex-1">
              <p className="experience-category">{card.category}</p>
              <h3 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                {card.title}
              </h3>
              <p className="experience-organization">{card.organization}</p>
              <p className="mt-2 text-sm leading-6 text-text-muted">
                {card.desc}
              </p>
            </div>
            <ArrowUpRight className="experience-arrow" size={18} aria-hidden="true" />
          </m.article>
        )})}
      </div>
    </section>
  );
};

export default Experience;
