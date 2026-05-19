import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

const projects = []

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="inner">

        {/* Header row */}
        <article className="headerRow">
          <div className="headerLeft">
            <span className="sectionLabel">./projects --all</span>
            <h2 className="sectionTitle">Selected Works</h2>
          </div>
          <p className="headerDesc">
            Building robust solutions with clean code and intuitive UX.
          </p>
        </article>

        {/* Cards */}
        <article className="grid">
          {projects.map((project) => (<ProjectCard key={project.title} data={project}/>))}
        </article>

      </div>
    </section>
  );
};

export default Projects;
