import React from "react";

function JobInfo({ title, company, bullets }) {
  return (
    <>
      <p className="jobTitle">{title}</p>
      <p className="company">{company}</p>
      <ul className="bulletList">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </>
  );
}

function DateBadge({ date }) {
  return <span className="jobCard_dateBadge">{date}</span>;
};

const JobCard = ({ date, title, company, bullets, active, layout }) => {

  const isLeftContent = layout === 'leftContent';

  return (
    <div className="jobCard_row">

      {/* Left cell */}
      <div className={`jobCard_cell jobCard_cellLeft`}>
        {isLeftContent
          ? <JobInfo title={title} company={company} bullets={bullets} />
          : <DateBadge date={date} />
        }
      </div>

      {/* Centre dot */}
      <div
        className={`jobCard_dot ${active ? "jobCard_active" : "jobCard_inactive"}`}
        aria-hidden="true"
      />

      {/* Right cell */}
      <div className={`jobCard_cell jobCard_cellRight`}>
        {isLeftContent
          ? <DateBadge date={date} />
          : <JobInfo title={title} company={company} bullets={bullets} />
        }
      </div>
    </div>
  );
};

export default JobCard;
