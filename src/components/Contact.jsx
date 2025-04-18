import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'your_service_id', // from EmailJS
      'your_template_id',
      form.current,
      'your_public_key'
    ).then(
      result => alert("Message sent!"),
      error => alert("Failed to send.")
    );
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input name="name" placeholder="Your Name" required />
        <input name="email" type="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Message..." required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
