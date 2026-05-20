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
    <section className="hero_section" id="hero">
      {/* Decorative brackets */}
      <span className="hero_bracketLeft" aria-hidden="true">{'{'}</span>
      <span className="hero_bracketRight" aria-hidden="true">{'}'}</span>

      <div className="hero_inner">
        <div className="hero_grid">

          {/* ── Left column ── */}
          <article className="left">
            <span className="hero_tagline">
              const profile = new Developer();
            </span>

            <h1 className="hero_headline">
              Building the Future,{' '}
              <span className="hero_accent">One Line</span> at a Time
            </h1>

            <p className="hero_subheading">
              Junior Full Stack Developer specialising in crafting high-performance
              web architectures. I bridge the gap between elegant UI design and
              robust backend logic using modern frameworks.
            </p>

            <div className="hero_ctaRow">
              <a href="#projects" className="hero_btnPrimary">
                View Projects
                <span className={`hero_icon material-symbols-outlined`}>
                  arrow_forward
                </span>
              </a>
              <a href="#contact" className="hero_btnGhost">
                Hire Me
              </a>
            </div>
          </article>

          {/* ── Right column — Terminal ── */}
          <article className="hero_right">
            <div className="hero_terminalCard">
              <div className="hero_terminalHeader">
                <span className="hero_terminalMeta">bash — 80x24</span>
              </div>

              <div className="hero_terminalBody">
                <p className="hero_terminalLine">
                  <span className="prompt">➜ </span>
                  <span className="path">~ </span>
                  <span className="command">whoami</span>
                </p>
                <p className="hero_terminalOutput">Miguel_Ángel_Jiménez_Morante</p>

                <p className="hero_terminalLine">
                  <span className="prompt">➜ </span>
                  <span className="path">~ </span>
                  <span className="command">ls skills/</span>
                </p>

                <div className="hero_skillsGrid">
                  {skills.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>

                <p className="hero_terminalLine">
                  <span className="prompt">➜ </span>
                  <span className="path">~ </span>
                  <span className="command">status --deploy</span>
                </p>
                <p className="hero_buildLine">
                  Building future solutions…{' '}
                  <span className="blink">_</span>
                </p>
              </div>
            </div>

            {/* Ambient glow blob */}
            <div className="hero_glowBlob" aria-hidden="true" />
          </article>

        </div>
      </div>

    </section>
  );
};

export default Hero;
