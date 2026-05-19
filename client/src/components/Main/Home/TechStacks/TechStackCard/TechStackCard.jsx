import React from "react";

const TechStackCard = ({ data }) => {
  const { icon, label } = data

  return (
    <div key={label} className="chip">
      <span className={`chipIcon material-symbols-outlined`}>
        {icon}
      </span>
      <span className="chipLabel">{label}</span>
    </div>
  );
};

export default TechStackCard;
