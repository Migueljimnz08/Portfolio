import React from "react";

const TechStackCard = ({ data }) => {
  const { icon, label } = data

  return (
    <div className="stack_chip">
      <span className={`stack_icon material-symbols-outlined`}>
        {icon}
      </span>
      <span className="stack_label">{label}</span>
    </div>
  );
};

export default TechStackCard;
