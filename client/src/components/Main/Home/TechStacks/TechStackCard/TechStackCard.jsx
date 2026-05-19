import React from "react";

const TechStackCard = ({ data }) => {
  const { icon, label } = data

  return (
    <div className="chip">
      <span className={`icon material-symbols-outlined`}>
        {icon}
      </span>
      <span className="label">{label}</span>
    </div>
  );
};

export default TechStackCard;
