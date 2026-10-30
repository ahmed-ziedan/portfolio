"use client";

import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { m } from "framer-motion";
import { contactEmail } from "@/data";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/ahmed-ziedan", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ahmedziedan/", icon: Linkedin },
];

const Hero = () => {
  return (
  <section
    id="top"
    className="relative isolate overflow-hidden px-6 pb-20 pt-32 sm:px-8 md:pb-28 md:pt-40 lg:px-16"
  >
    <div aria-hidden="true" className="hero-orb hero-orb-one" />
    <div aria-hidden="true" className="hero-orb hero-orb-two" />

    <div className="relative mx-auto grid min-w-0 max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
      <m.div
        className="relative z-10 min-w-0 text-center lg:text-left"
        initial={{ opacity: 1, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.48, ease: "easeOut" }}
      >
        <p className="eyebrow mx-auto lg:mx-0">
          <span className="status-dot" />
          Ahmed Ziedan <span className="text-border">/</span> .NET Back-End
        </p>

        <h1 className="mt-7 min-w-0 text-[clamp(2.65rem,8vw,6.5rem)] font-extrabold leading-[0.94] tracking-[-0.065em] text-foreground">
          Software
          <span className="block bg-gradient-to-r from-[#70a8ff] via-[#7585ff] to-[#ac84ff] bg-clip-text text-transparent">
            Engineer.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8 lg:mx-0">
          .NET back-end developer with a B.Sc. in Computer Science and Mathematics.
          I build APIs and web applications across the stack.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
          <a href="#projects" className="button-primary group w-full sm:w-auto">
            Explore my work
            <ArrowDownRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
          <a href={`mailto:${contactEmail}`} className="button-secondary w-full sm:w-auto">
            Let&apos;s talk <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-9 flex items-center justify-center gap-3 lg:justify-start">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-text-muted">Find me on</span>
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="social-link"
            >
              <Icon size={17} />
            </a>
          ))}
          <a href={`mailto:${contactEmail}`} aria-label="Email Ahmed" className="social-link">
            <Mail size={17} />
          </a>
        </div>
      </m.div>

      <m.div
        className="relative mx-auto w-full min-w-0 max-w-[34rem] lg:ml-auto"
        initial={{ opacity: 1, y: 10, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.52, delay: 0.08, ease: "easeOut" }}
        whileHover={{ y: -3 }}
      >
        <div aria-hidden="true" className="code-card-glow" />
        <div className="code-card relative overflow-hidden rounded-[1.75rem] border border-white/[0.1] p-4 shadow-2xl shadow-blue-950/40 sm:p-6">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="window-dot bg-[#ff6b6b]" />
              <span className="window-dot bg-[#f8c85b]" />
              <span className="window-dot bg-[#40c98b]" />
            </div>
            <span className="font-mono text-[11px] tracking-wide text-slate-400">CLEAN ARCHITECTURE API</span>
            <span className="rounded-md border border-blue-300/15 bg-blue-300/10 px-2 py-1 font-mono text-[10px] text-blue-200">.NET</span>
          </div>

          <div className="mt-5 rounded-2xl border border-white/[0.08] bg-[#050d1b]/80 p-4 font-mono text-xs leading-7 sm:p-5 sm:text-sm">
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="truncate text-slate-300">/api/v1/Product</span>
              <span className="rounded-md bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-emerald-300">GET</span>
            </div>
            <div className="grid grid-cols-[1.5rem_1fr] gap-x-3 text-slate-500">
              <span>1</span><span><span className="text-violet-300">[ApiController]</span></span>
              <span>2</span><span><span className="text-violet-300">[Route]</span>(<span className="text-amber-200">&quot;api/v1/[controller]&quot;</span>)</span>
              <span>3</span><span><span className="text-violet-300">public class</span> <span className="text-blue-200">ProductController</span></span>
              <span>4</span><span className="text-slate-600">&#123;</span>
              <span>5</span><span className="pl-4"><span className="text-violet-300">public async</span> <span className="text-blue-200">Task</span> GetAll()</span>
              <span>6</span><span className="pl-4 text-slate-600">&#123; ... &#125;</span>
              <span>7</span><span className="text-slate-600">&#125;</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {["C#", "ASP.NET Core", "REST APIs", "SQL Server"].map((skill) => (
              <span key={skill} className="code-chip">{skill}</span>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4 text-xs text-slate-400">
            <span>One of my recent projects</span>
            <a href="#projects" className="inline-flex items-center gap-1.5 font-medium text-blue-200 transition-colors hover:text-white">
              See the work <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </m.div>
    </div>

    <a href="#about" className="hero-scroll-hint" aria-label="Scroll to about section">
      <span /> Scroll to explore
    </a>
  </section>
  );
};

export default Hero;
