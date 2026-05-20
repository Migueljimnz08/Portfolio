import React from "react";
import JobCard from "./JobCard/JobCard";

const jobs = [
  {
    date:    '2026 – 2026',
    title:   'Frontend Intern',
    company: 'SEPE Agency',
    bullets: [
      'Assisted in developing UI components for a React-based CRM.',
      'Wrote unit tests using Jest, achieving 80% coverage.',
      'Maintained legacy jQuery projects during migration.',
    ],
    active: false,
    layout: 'rightContent',
  },
  {
    date: '2025 – 2025',
    title: 'Full Stack Bootcamp',
    company: 'TheBridge Intensive',
    bullets: [
      '600+ hours of intensive full-stack training.',
      'Capstone project: A real-time chat app using Socket.io.',
      'Mastery in React stack development.',
    ],
    active: false,
    layout: 'leftContent',
  }
];

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="inner">

        <div className="heading">
          <h2 className="sectionTitle">Experience Timeline</h2>
          <span className="sectionSubtitle">
            tail -f /var/log/career.log
          </span>
        </div>

        <div className="timeline">
          {jobs.map((job) => (
            <JobCard key={job.title} {...job} />
          ))}
        </div>

      </div>

    </section>
  );
};

export default Experience;
