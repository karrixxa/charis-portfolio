import React, { useState } from 'react';
import './Contact.css';

const LINKS = [
  { icon: '✉️', label: 'Email',    val: 'charis.xiong@gmail.com',      href: 'mailto:charis.xiong@gmail.com' },
  { icon: '💼', label: 'LinkedIn', val: 'charis-xiong ↗',     href: 'https://linkedin.com/in/charis-xiong' },
  { icon: '💻', label: 'GitHub',   val: 'karrixxa ↗',      href: 'https://github.com/karrixxa' },
  { icon: '📄', label: 'Resume',   val: 'Download PDF ↓',     href: '/CharisXiongResume.pdf', download: true },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    // Plug in your Formspree / EmailJS endpoint here
    setSent(true);
  };

  return (
    <div className="page-wrap contact-wrap">
      <header className="page-header contact-header">
        <div className="page-eyebrow" style={{ justifyContent: 'center' }}>contact</div>
        <h1>Let's <span>Connect.</span></h1>
        <p>
          Open to research collaborations, data science roles, or just an interesting
          conversation about statistics. Expected graduation is December 2026.
        </p>
      </header>

      <div className="contact-grid">

        {/* form */}
        <div className="card contact-form-card">
          <div className="page-eyebrow" style={{ marginBottom: 18 }}>send a message</div>
          {sent ? (
            <div className="sent-msg">
              <span className="sent-icon">✦</span>
              <h3>Message sent!</h3>
              <p>I'll get back to you soon.</p>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input className="form-input" name="name" type="text"
                  placeholder="Your name" value={form.name} onChange={onChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input className="form-input" name="email" type="email"
                  placeholder="your@email.com" value={form.email} onChange={onChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" name="message" rows={5}
                  placeholder="What's on your mind?" value={form.message} onChange={onChange} />
              </div>
              <button className="btn btn-blue contact-submit" onClick={handleSubmit}>
                Send Message ✦
              </button>
            </div>
          )}
        </div>

        {/* link cards */}
        <div className="contact-links-col">
          {LINKS.map(({ icon, label, val, href, download }) => (
            <div className="card contact-link-card" key={label}>
              <div className="cl-icon">{icon}</div>
              <div className="cl-text">
                <div className="cl-label">{label}</div>
                <a className="cl-val" href={href}
                  target={download ? undefined : '_blank'}
                  rel="noreferrer"
                  download={download || undefined}>
                  {val}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}