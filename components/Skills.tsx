import { Braces, Cloud, Database, Layers3, Wrench } from "lucide-react";
import { skillCategories } from "@/data/skills";

const categoryDetails: Record<string, { icon: typeof Braces; accent: string; layout: string }> = {
  Backend: { icon: Braces, accent: "text-blue-300 bg-blue-400/10", layout: "xl:col-span-3" },
  Frontend: { icon: Layers3, accent: "text-violet-300 bg-violet-400/10", layout: "xl:col-span-3" },
  Database: { icon: Database, accent: "text-cyan-300 bg-cyan-400/10", layout: "xl:col-span-2" },
  Tools: { icon: Wrench, accent: "text-sky-300 bg-sky-400/10", layout: "xl:col-span-2" },
  Cloud: { icon: Cloud, accent: "text-indigo-300 bg-indigo-400/10", layout: "xl:col-span-2" },
};

const Skills = () => {
  return (
    <section id="skills" className="section-wrap">
      <div className="section-heading-row">
        <div>
          <p className="section-kicker">The toolkit</p>
          <h2 className="section-title">Skills that turn ideas into software.</h2>
        </div>
        <p className="section-intro">
          A practical mix of back-end, front-end, data, and delivery tools.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {skillCategories.map((category) => {
            const details = categoryDetails[category.name] ?? categoryDetails.Backend;
            const Icon = details.icon;

            return (
              <article
                key={category.name}
                className={`skill-card ${details.layout}`}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className={`skill-icon ${details.accent}`}>
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <h3 className="text-base font-semibold tracking-tight text-foreground">
                    {category.name}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2" aria-label={`${category.name} skills`}>
                  {category.skills.map((skill) => (
                    <li key={skill} className="skill-chip">{skill}</li>
                  ))}
                </ul>
              </article>
            );
          })}
      </div>
    </section>
  );
};

export default Skills;
