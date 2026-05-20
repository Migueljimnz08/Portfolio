import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

const projects = [
  {
    path: '~/saas-platform',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsJEK0jHD1yn-2qi1hg8CkGiVP7o2NCTt4ziukrAcnjgyPJW2SB4OLhj94T1fTxluDX-1-UcU6BcO6R71MQgFigfBK0IcJ2lZ9TzE0UEwojkQUsQtNJL_qujiT4XYPN13cW8JshpNOHrvPRHpZDTPRyc20ZyzNkegseUwXQjs--kWm2XZ4fMk5awgXfrRkRS7d6QovYxig8kBzBNIE-tYiQ1zHyzBH-nAuqlEaj8p4Jl2-rI1URTUSpWT71cJHls6DXh8la7zixchz',
    title: 'Nebula Dashboard',
    desc: 'A complex analytical dashboard for cloud infrastructure monitoring. Built with Next.js and Chart.js.',
    links: [
      { label: 'Demo', icon: 'open_in_new', href: '#', variant: 'primary' },
      { label: 'GitHub', icon: 'terminal', href: '#', variant: 'secondary' },
    ],
  },
]

const Projects = () => {
  return (
    <section className="projects_section" id="projects">
      <div className="projects_inner">

        {/* Header row */}
        <article className="projects_headerRow">
          <div className="projects_headerLeft">
            <span className="projects_sectionLabel">./projects --all</span>
            <h2 className="projects_sectionTitle">Selected Works</h2>
          </div>
          <p className="projects_headerDesc">
            Building robust solutions with clean code and intuitive UX.
          </p>
        </article>

        {/* Cards */}
        <article className="projects_grid">
          {projects.map((project) => (<ProjectCard key={project.title} data={project} />))}
        </article>

      </div>
    </section>
  );
};

export default Projects;
