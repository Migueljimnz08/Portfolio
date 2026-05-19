import { useEffect, useRef, React } from "react";
import { Link } from 'react-router-dom';

const NotFound = () => {
  const pageRef = useRef(null);
  const cmdRef = useRef(null);

  // Mouse tracking — drives the radial gradient origin via CSS vars
  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      page.style.setProperty('--mouse-x', `${x}%`);
      page.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Terminal typing animation
  useEffect(() => {
    const el = cmdRef.current;
    if (!el) return;

    const fullText = el.dataset.text;
    el.textContent = '';
    let i = 0;

    const timer = setTimeout(() => {
      const type = () => {
        if (i < fullText.length) {
          el.textContent += fullText.charAt(i);
          i++;
          setTimeout(type, 50);
        }
      };
      type();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="page" ref={pageRef}>
      {/* Decorative brackets */}
      <span className="bracketLeft" aria-hidden="true">{'{'}</span>
      <span className="bracketRight" aria-hidden="true">{'}'}</span>

      <div className="content">

        {/* ── Terminal card ── */}
        <article className="terminal">

          {/* Chrome bar */}
          <div className="terminalChrome">
            <div className="trafficLight">
              <span className={`dot red`} aria-hidden="true" />
              <span className={`dot yellow`} aria-hidden="true" />
              <span className={`dot green`} aria-hidden="true" />
            </div>
            <span className="terminalPath">Path: ~/errors/404.log</span>
          </div>

          {/* Body */}
          <div className="terminalBody">

            {/* Prompt line */}
            <p className="promptLine">
              <span className="promptUser">user@devterminal</span>
              <span className="promptColon">:</span>
              <span className="promptPath">~</span>
              <span className="promptDollar">$</span>
              <span
                className={`promptCmd cursor`}
                ref={cmdRef}
                data-text="fetch --route current_page"
              />
            </p>

            {/* Error output */}
            <div className="errorOutput">
              <p className="errorLine">
                [CRITICAL ERROR] Segment Fault: Memory address not found.
              </p>

              {/* 404 visual */}
              <div className="errorVisual">
                <span className="errorCode">404</span>
                <div className="errorSymbols" aria-hidden="true">
                  <span>&lt;/&gt;</span>
                  <span>[]</span>
                  <span>{'{}'}</span>
                </div>
              </div>

              <p className="stackTrace">
                Stack trace: Resource.map(path) returned NULL.
              </p>
            </div>

          </div>
        </article>

        {/* ── Copy ── */}
        <h1 className="heading">Page not found</h1>

        <p className="subheading">
          Looks like the link you followed is broken, or the page has been
          moved to{' '}
          <span className="devNull">/miguel/null</span>
          {' '}on our server.
        </p>

        {/* ── CTA ── */}
        <Link to="/" className="cta">
          <span className={`ctaIcon material-symbols-outlined`}>
            keyboard_backspace
          </span>
          Back to home
        </Link>

      </div>
    </section>
  );
};

export default NotFound;
