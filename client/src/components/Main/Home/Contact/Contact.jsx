import { useState } from "react";

const Contact = () => {

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to my email service / API
    console.log('Form submitted:', form);
  };

  return (
    <section className="section" id="contact">
      <div className="inner">
        <div className="grid">

          {/* ── Left — info ── */}
          <article className="left">
            <h2 className="sectionTitle">Let's Collaborate</h2>
            <p className="intro">
              Have a project in mind or looking to hire? I'm currently available
              for freelance work and junior full-time positions.
            </p>

            <ul className="infoList">
              <li className="infoItem">
                <div className="infoIconWrap">
                  <span className={`infoIcon material-symbols-outlined`}>
                    mail
                  </span>
                </div>
                <div>
                  <p className="infoLabel">Email</p>
                  <p className="infoValue">hello@devterminal.io</p>
                </div>
              </li>

              <li className="infoItem">
                <div className="infoIconWrap">
                  <span className={`infoIcon material-symbols-outlined`}>
                    location_on
                  </span>
                </div>
                <div>
                  <p className="infoLabel">Base</p>
                  <p className="infoValue">Remote / Madrid, Spain</p>
                </div>
              </li>
            </ul>
          </article>

          {/* ── Right — form ── */}
          <article className="formCard">
            <form onSubmit={handleSubmit}>
              <div className="formGroup">
                <label htmlFor="name" className="label">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="input"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formGroup">
                <label htmlFor="email" className="label">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="input"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formGroup">
                <label htmlFor="message" className="label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Describe your project…"
                  className="textarea"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="submitBtn">
                Send Message
                <span className={`sendIcon material-symbols-outlined`}>
                  send
                </span>
              </button>
            </form>
          </article>

        </div>
      </div>
      Contact
    </section>
  );
};

export default Contact;
