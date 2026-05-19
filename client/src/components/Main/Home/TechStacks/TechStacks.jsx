import React from "react";
import TechStackCard from "./TechStackCard/TechStackCard";

const techs = [
  { icon: 'code', label: 'React' },
  { icon: 'terminal', label: 'Node.js' },
  { icon: 'palette', label: 'Sass' },
  { icon: 'integration_instructions', label: 'JavaScript' },
  { icon: 'database', label: 'Postgres' },
];

const TechStacks = () => {
  return (
    <section className="section" id="stack">
      <div className="inner">

        <article className="heading">
          <h2 className="title">Tech I Master</h2>
          <div className="divider" />
        </article>

        <article className="grid">
          {techs.map(({tech}) => ( <TechStackCard data={tech} />))}
        </article>

      </div>
    </section>
  );
};

export default TechStacks;
