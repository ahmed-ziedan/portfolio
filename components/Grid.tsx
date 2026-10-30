import { ArrowUpRight, Braces, Download, Layers3, MessageCircle } from "lucide-react";
import { cvLink } from "@/data";

const Grid = () => {
  return (
    <section id="about" className="section-wrap pt-8 md:pt-12">
      <div className="section-heading-row">
        <div>
          <p className="section-kicker">A little about my work</p>
          <h2 className="section-title">From the API to the interface.</h2>
        </div>
        <p className="section-intro">
          I focus on .NET back-end development and bring experience building
          full-stack web applications.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="about-card about-card-featured">
          <span className="about-icon"><Braces size={19} /></span>
          <div>
            <p className="about-label">My focus</p>
            <h3>Back-end development</h3>
            <p>C#, ASP.NET Core, REST APIs, and SQL Server.</p>
          </div>
          <span aria-hidden="true" className="about-card-orbit" />
        </article>

        <article className="about-card">
          <span className="about-icon about-icon-purple"><Layers3 size={19} /></span>
          <div>
            <p className="about-label">Across the stack</p>
            <h3>Web application development</h3>
            <p>Angular, Next.js, TypeScript, and modern CSS.</p>
          </div>
        </article>

        <article className="about-card">
          <span className="about-icon about-icon-cyan"><MessageCircle size={19} /></span>
          <div>
            <p className="about-label">How I work</p>
            <h3>Collaboration comes first</h3>
            <p>Clear communication, thoughtful solutions, and room to learn.</p>
          </div>
        </article>

        <a
          href={cvLink}
          target="_blank"
          rel="noopener noreferrer"
          className="about-card about-card-cv group"
          aria-label="Open Ahmed Ziedan's CV"
        >
          <span className="about-icon about-icon-cv"><Download size={19} /></span>
          <div>
            <p className="about-label">Want the details?</p>
            <h3>Take a look at my CV</h3>
            <p>Experience, education, and technical background.</p>
          </div>
          <ArrowUpRight className="about-card-arrow" size={20} />
        </a>
      </div>
    </section>
  );
};

export default Grid;
