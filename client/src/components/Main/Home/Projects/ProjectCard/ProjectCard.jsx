import React from "react";

const ProjectCard = ({ data }) => {
  const { title, img, path, desc, links } = data

  return (
    <div className="project_card">

      <div className="project_imgWrapper">
        <img
          src={img}
          alt={title}
          className="project_img"
        />
        <span className="project_path">{path}</span>
      </div>

      <div className="project_body">
        <h3 className="project_title">{title}</h3>
        <p className="project_desc">{desc}</p>

        <div className="project_links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`project_link ${[link.variant]}`}
            >
              {link.label}
              <span className={`project_linkIcon material-symbols-outlined`}>
                {link.icon}
              </span>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;
