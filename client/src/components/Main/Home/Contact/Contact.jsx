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
    <section className="contact_section" id="contact">
      <div className="contact_inner">
        <div className="contact_grid">

          {/* ── Left — info ── */}
          <article className="contact_left">
            <h2 className="contact_sectionTitle">Let's Collaborate</h2>
            <p className="contact_intro">
              Have a project in mind or looking to hire? I'm currently available
              for freelance work and junior full-time positions.
            </p>

            <ul className="contact_infoList">
              <li className="contact_infoItem">
                <div className="contact_infoIconWrap">
                  <span className={`infoIcon material-symbols-outlined`}>
                    mail
                  </span>
                </div>
                <div>
                  <p className="contact_infoLabel">Email</p>
                  <p className="contact_infoValue">hello@devterminal.io</p>
                </div>
              </li>

              <li className="contact_infoItem">
                <div className="contact_infoIconWrap">
                  <span className={`infoIcon material-symbols-outlined`}>
                    location_on
                  </span>
                </div>
                <div>
                  <p className="contact_infoLabel">Base</p>
                  <p className="contact_infoValue">Remote / Madrid, Spain</p>
                </div>
              </li>
            </ul>
          </article>

          {/* ── Right — form ── */}
          <article className="contact_formCard">
            <form onSubmit={handleSubmit}>
              <div className="contact_formGroup">
                <label htmlFor="name" className="contact_label">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="contact_input"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact_formGroup">
                <label htmlFor="email" className="contact_label">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="contact_input"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact_formGroup">
                <label htmlFor="message" className="contact_label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Describe your project…"
                  className="contact_textarea"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact_submitBtn">
                Send Message
                <span className={`sendIcon material-symbols-outlined`}>
                  send
                </span>
              </button>
            </form>
          </article>

        </div>
      </div>
    </section>
  );
};

export default Contact;
