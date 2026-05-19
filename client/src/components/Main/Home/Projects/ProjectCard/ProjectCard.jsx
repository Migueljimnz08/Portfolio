import React from "react";

const ProjectCard = ({ data }) => {
  const { title, img, path, desc, links } = data

  return (
    <div key={title} className="card">

      <div className="imgWrapper">
        <img
          src={img}
          alt={title}
          className="cardImg"
        />
        <span className="cardPath">{path}</span>
      </div>

      <div className="cardBody">
        <h3 className="cardTitle">{title}</h3>
        <p className="cardDesc">{desc}</p>

        <div className="cardLinks">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`cardLink ${[link.variant]}`}
            >
              {link.label}
              <span className={`linkIcon material-symbols-outlined`}>
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
