'use client'
import React, { useState } from 'react';
import '../style/contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }

    setIsSubmitting(true);
    setError('');
    setSuccess(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        throw new Error('Failed to send the message.');
      }
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setSuccess(false);  
      }, 5000);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="contact-container">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924247.1893116032!2d66.49460186151113!3d25.191734380985693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731097454642!5m2!1sen!2s"
            width="100%"
            height="100%"
            title="map"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            scrolling="yes"
          ></iframe>
        </div>
        <div className="contact-form">
          <h3>Contact us</h3>
          <p>Contact us to learn more about our services</p>
          <form onSubmit={handleSubmit}>
          <input
              type="text"
              placeholder="Name"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Message"
              className="form-textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit" className="form-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
          {error && <p className="form-error">{error}</p>}
          {success && <p className="form-success">Message sent successfully!</p>}
          <p className="form-note">
            Your privacy is our priority. All inquiries and messages are kept confidential and secure.
          </p>
        </div>
      </div>
    </section>
  );
};

