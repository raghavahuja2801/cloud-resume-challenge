// src/pages/home/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch('https://formspree.io/f/xjgnodgp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // fall through — form stays as-is on error
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>

        <div className="contact-grid">
          {/* Left Column - Contact Form */}
          <div className="contact-form-wrapper">
            <div className="contact-card">
              {submitted ? (
                <div className="contact-success">
                  <FaCheckCircle className="contact-success-icon" />
                  <h3 className="contact-success-title">Message Sent!</h3>
                  <p className="contact-success-text">
                    Thanks for reaching out! I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="contact-form-title">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                        className="form-textarea"
                        rows="5"
                        required
                      />
                    </div>
                    <button type="submit" className="submit-btn" disabled={sending}>
                      {sending ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="contact-info-wrapper">
            <div className="contact-card">
              <h3 className="contact-info-title">Contact Information</h3>
              <div className="contact-info-items">
                <div className="contact-info-item">
                  <FaEnvelope className="contact-info-icon" />
                  <div>
                    <p className="contact-info-label">Email</p>
                    <p className="contact-info-value">raghav_ahuja@sfu.ca</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <FaPhone className="contact-info-icon" />
                  <div>
                    <p className="contact-info-label">Phone</p>
                    <p className="contact-info-value">(236) 333-8081</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <FaMapMarkerAlt className="contact-info-icon" />
                  <div>
                    <p className="contact-info-label">Location</p>
                    <p className="contact-info-value">Vancouver, BC</p>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <h4 className="contact-social-title">Connect With Me</h4>
                <div className="contact-social-icons">
                  <a href="https://github.com/raghavahuja2801" className="social-icon" aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href="https://linkedin.com/in/ahuja-raghav" className="social-icon" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                    <a href="https://twitter.com/raghavahuja2801" className="social-icon" aria-label="Twitter">
                      <FaTwitter />
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;