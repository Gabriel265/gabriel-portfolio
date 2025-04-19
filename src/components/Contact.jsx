import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_yurlnib', // Replace with your actual service ID from EmailJS
      'template_qizk04r', // Replace with your actual template ID
      form.current,
      'myG_B8wFyFy6M2U5c' // Replace with your actual public key
    ).then(
      (result) => {
        console.log('Email sent successfully:', result.text);
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        console.error('Failed to send email:', error.text);
        alert("Failed to send message. Please try again later.");
      }
    ).finally(() => {
      setLoading(false);
    });
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input name="name" placeholder="Your Name" required />
        <input name="email" type="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Message..." required />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default Contact;