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
    <section className="notfound_page" ref={pageRef}>
      {/* Decorative brackets */}
      <span className="notfound_bracketLeft" aria-hidden="true">{'{'}</span>
      <span className="notfound_bracketRight" aria-hidden="true">{'}'}</span>

      <div className="notfound_content">

        {/* ── Terminal card ── */}
        <article className="notfound_terminal">

          {/* Chrome bar */}
          <div className="notfound_terminalChrome">
            <div className="notfound_trafficLights">
              <span className={`notfound_dot red`} aria-hidden="true" />
              <span className={`notfound_dot yellow`} aria-hidden="true" />
              <span className={`notfound_dot green`} aria-hidden="true" />
            </div>
            <span className="notfound_terminalPath">Path: ~/errors/404.log</span>
          </div>

          {/* Body */}
          <div className="notfound_terminalBody">

            {/* Prompt line */}
            <p className="notfound_promptLine">
              <span className="promptUser">user@devterminal</span>
              <span className="promptColon">:</span>
              <span className="promptPath">~</span>
              <span className="promptDollar">$</span>
              <span
                className={`promptCmd notfound_cursor`}
                ref={cmdRef}
                data-text="fetch --route current_page"
              />
            </p>

            {/* Error output */}
            <div className="notfound_errorOutput">
              <p className="notfound_errorLine">
                [CRITICAL ERROR] Segment Fault: Memory address not found.
              </p>

              {/* 404 visual */}
              <div className="notfound_errorVisual">
                <span className="notfound_errorCode">404</span>
                <div className="notfound_errorSymbols" aria-hidden="true">
                  <span>&lt;/&gt;</span>
                  <span>[]</span>
                  <span>{'{}'}</span>
                </div>
              </div>

              <p className="notfound_stackTrace">
                Stack trace: Resource.map(path) returned NULL.
              </p>
            </div>

          </div>
        </article>

        {/* ── Copy ── */}
        <h1 className="notfound_heading">Page not found</h1>

        <p className="notfound_subheading">
          Looks like the link you followed is broken, or the page has been
          moved to{' '}
          <span className="notfound_devNull">/miguel/null</span>
          {' '}on our server.
        </p>

        {/* ── CTA ── */}
        <Link to="/" className="notfound_cta">
          <span className={`notfound_ctaIcon material-symbols-outlined`}>
            keyboard_backspace
          </span>
          Back to home
        </Link>

      </div>
    </section>
  );
};

export default NotFound;
