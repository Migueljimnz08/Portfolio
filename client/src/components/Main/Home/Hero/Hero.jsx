import React from "react";

const skills = [
  'react.js', 'node.js',
  'javascript', 'css',
  'postgresql', 'docker',
  'html', 'sass',
  'express.js', 'APIs'
];

const Hero = () => {
  return (
    <section className="section" id="hero">
      {/* Decorative brackets */}
      <span className="bracketLeft" aria-hidden="true">{'{'}</span>
      <span className="bracketRight" aria-hidden="true">{'}'}</span>

      <div className="inner">
        <div className="grid">

          {/* ── Left column ── */}
          <article className="left">
            <span className="tagline">
              const profile = new Developer();
            </span>

            <h1 className="headline">
              Building the Future,{' '}
              <span className="accent">One Line</span> at a Time
            </h1>

            <p className="subheading">
              Junior Full Stack Developer specialising in crafting high-performance
              web architectures. I bridge the gap between elegant UI design and
              robust backend logic using modern frameworks.
            </p>

            <div className="ctaRow">
              <a href="#projects" className="btnPrimary">
                View Projects
                <span className={`icon material-symbols-outlined`}>
                  arrow_forward
                </span>
              </a>
              <a href="#contact" className="btnGhost">
                Hire Me
              </a>
            </div>
          </article>

          {/* ── Right column — Terminal ── */}
          <article className="right">
            <div className="terminalCard">
              <div className="terminalHeader">
                <span className="terminalMeta">bash — 80x24</span>
              </div>

              <div className="terminalBody">
                <p className="terminalLine">
                  <span className="prompt">➜ </span>
                  <span className="path">~ </span>
                  <span className="command">whoami</span>
                </p>
                <p className="terminalOutput">Miguel_Ángel_Jiménez_Morante</p>

                <p className="terminalLine">
                  <span className="prompt">➜ </span>
                  <span className="path">~ </span>
                  <span className="command">ls skills/</span>
                </p>

                <div className="skillsGrid">
                  {skills.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>

                <p className="terminalLine">
                  <span className="prompt">➜ </span>
                  <span className="path">~ </span>
                  <span className="command">status --deploy</span>
                </p>
                <p className="buildLine">
                  Building future solutions…{' '}
                  <span className="blink">_</span>
                </p>
              </div>
            </div>

            {/* Ambient glow blob */}
            <div className="glowBlob" aria-hidden="true" />
          </article>

        </div>
      </div>

    </section>
  );
};

export default Hero;
