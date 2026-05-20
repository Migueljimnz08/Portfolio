import React from "react";
import TechStackCard from "./TechStackCard/TechStackCard";

const techs = [
  { icon: 'code', label: 'React' },
  { icon: 'code', label: 'HTML' },
  { icon: 'terminal', label: 'Node.js' },
  { icon: 'palette', label: 'CSS' },
  { icon: 'palette', label: 'Sass' },
  { icon: 'integration_instructions', label: 'JavaScript' },
  { icon: 'database', label: 'Postgres' },
];

const TechStacks = () => {
  return (
    <section className="tech_section" id="stack">
      <div className="tech_inner">

        <article className="tech_heading">
          <h2 className="tech_title">Tech I Master</h2>
          <div className="tech_divider" />
        </article>

        <article className="tech_grid">
          {techs.map((tech) => ( <TechStackCard key={tech.label} data={tech} />))}
        </article>

      </div>
    </section>
  );
};

export default TechStacks;
