import React from 'react';
import '../style/contact.css';

export default function Contact() {
  return (
    <section id='contact' className="contact-section">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="contact-container">
        <div className="contact-map">
          <iframe
            src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924247.1893116032!2d66.49460186151113!3d25.191734380985693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731097454642!5m2!1sen!2s"                                                                                      
            width="100%"
            height="100%"
            title='map'
            style={{ border: '0' }}
            allowFullScreen={true}
            loading="lazy"
            scrolling='yes'
          ></iframe>
        </div>
        <div className="contact-form">
          <h3>Contact us</h3>
          <p>Contact us to learn more about our services</p>
          <form>
            <input type="text" placeholder="Name" className="form-input" required />
            <input type="email" placeholder="Email" className="form-input" required />
            <textarea placeholder="Message" className="form-textarea" required></textarea>
            <button type="submit" className="form-submit">Submit</button>
          </form>
          <p className="form-note">
            Your privacy is our priority. All inquiries and messages are kept confidential and secure.
          </p>
        </div>
      </div>
    </section>
  );
}
