"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { m } from "framer-motion";
import { projects } from "@/data";

const technologyNames: Record<string, string> = {
  "/csharp.webp": "C#",
  "/dotnet.svg": ".NET",
  "/ef.svg": "EF Core",
  "/bootstrap.webp": "Bootstrap",
  "/sql.svg": "SQL Server",
  "/swagger.svg": "Swagger",
  "/angular.svg": "Angular",
  "/ts.svg": "TypeScript",
  "/tail.svg": "Tailwind",
  "/html.svg": "HTML",
  "/css.svg": "CSS",
  "/next.svg": "Next.js",
};

const RecentProjects = () => {
  return (
    <section className="section-wrap" id="projects">
      <div className="section-heading-row">
        <div>
          <p className="section-kicker">Selected work</p>
          <h2 className="section-title">A few things I&apos;ve built.</h2>
        </div>
        <p className="section-intro">
          Web applications, APIs, and digital experiences from recent projects.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {projects.map((item, index) => (
          <m.article
            key={item.id}
            className="project-card group"
            initial={{ opacity: 1, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.38, delay: index % 2 * 0.06, ease: "easeOut" }}
            whileHover={{ y: -3, transition: { duration: 0.18 } }}
          >
            <div className="project-image-wrap">
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 560px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
              />
              <div className="project-image-shade" />
              <span className="project-number">PROJECT {String(index + 1).padStart(2, "0")}</span>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="text-lg font-bold leading-snug tracking-tight text-foreground sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-6 text-text-muted">
                {item.des}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${item.title} technologies`}>
                {item.iconLists.map((icon, index) => (
                  <li key={`${icon}-${index}`} className="project-tech">
                    <Image src={icon} alt="" width={15} height={15} className="object-contain" />
                    {technologyNames[icon] ?? icon}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-5 border-t border-white/[0.08] pt-4">
                {item.live && (
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-primary"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                )}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <Github size={15} />
                    Source
                  </a>
                )}
              </div>
            </div>
          </m.article>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
