import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser'; // Correct import
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_yurlnib', // Replace with your actual service ID from EmailJS
        'template_qizk04r', // Replace with your actual template ID
        form.current,
        'myG_B8wFyFy6M2U5c' // Replace with your actual public key
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error('Failed to send email:', error.text);
          alert('Failed to send message. Please try again later.');
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        marginTop: '40px',
        padding: '0 10px',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Helmet>
        <title>Contact Gabriel Kadiwa | Software & IT Services</title>
        <meta
          name="description"
          content="Contact Gabriel Kadiwa for professional software development, IT support, graphic design, and tutoring services. Reach out via email, phone, or social media."
        />
        <meta
          name="keywords"
          content="contact Gabriel Kadiwa, software development Malawi, IT support, graphic design, tutoring services, web development, email, phone"
        />
        <meta property="og:title" content="Contact Gabriel Kadiwa | Professional Services" />
        <meta
          property="og:description"
          content="Get in touch with Gabriel Kadiwa for expert web development, IT support, graphic design, and tutoring. Email, call, or connect via social media."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gabrielkadiwa.vercel.app/#contact" />
        <meta property="og:image" content="https://gabrielkadiwa.vercel.app/images/contact-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Gabriel Kadiwa" />
        <meta
          name="twitter:description"
          content="Reach Gabriel Kadiwa for software development, IT support, graphic design, and tutoring services via email, phone, or social media."
        />
        <meta name="twitter:image" content="https://gabrielkadiwa.vercel.app/images/contact-og-image.jpg" />
      </Helmet>
      <h2
        style={{
          fontSize: '1.8rem',
          color: 'var(--accent)',
          textAlign: 'center',
          marginBottom: '1.5rem',
        }}
      >
        Contact Me
      </h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'space-between',
        }}
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          style={{
            flex: 1,
            minWidth: '300px',
            background: 'var(--card-bg)',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)',
            transition: 'background 0.3s ease, color 0.3s ease',
          }}
        >
          <input
            name="name"
            placeholder="Your Name"
            required
            style={{
              width: '100%',
              padding: '0.8rem',
              marginBottom: '1rem',
              border: '1px solid var(--accent)',
              borderRadius: '6px',
              background: 'var(--input-bg)',
              color: 'var(--text)',
              fontSize: '1rem',
            }}
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            style={{
              width: '100%',
              padding: '0.8rem',
              marginBottom: '1rem',
              border: '1px solid var(--accent)',
              borderRadius: '6px',
              background: 'var(--input-bg)',
              color: 'var(--text)',
              fontSize: '1rem',
            }}
          />
          <textarea
            name="message"
            placeholder="Message..."
            required
            style={{
              width: '100%',
              padding: '0.8rem',
              marginBottom: '1rem',
              border: '1px solid var(--accent)',
              borderRadius: '6px',
              background: 'var(--input-bg)',
              color: 'var(--text)',
              fontSize: '1rem',
              minHeight: '150px',
              resize: 'vertical',
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              background: loading ? '#ccc' : 'var(--accent)',
              color: 'white',
              border: 'none',
              padding: '0.8rem 1.5rem',
              borderRadius: '6px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontSize: '1rem',
              width: '100%',
            }}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        <div
          style={{
            flex: 1,
            minWidth: '300px',
            background: 'var(--card-bg)',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)',
            transition: 'background 0.3s ease, color 0.3s ease',
          }}
        >
          <h3
            style={{
              fontSize: '1.5rem',
              color: 'var(--accent)',
              marginBottom: '1rem',
            }}
          >
            Get in Touch
          </h3>
          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--text)',
              marginBottom: '0.7rem',
            }}
          >
            <strong>Email:</strong>{' '}
            <a
              href="mailto:gabrielkadiwa@gmail.com"
              style={{
                color: 'var(--accent)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
            >
              gabrielkadiwa@gmail.com
            </a>
          </p>
          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--text)',
              marginBottom: '0.7rem',
            }}
          >
            <strong>Phone:</strong>{' '}
            <a
              href="tel:+265887171231"
              style={{
                color: 'var(--accent)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
            >
              +265 88 717 1231
            </a>
            ,{' '}
            <a
              href="tel:+265995375405"
              style={{
                color: 'var(--accent)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
            >
              +265 99 537 5405
            </a>
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginTop: '1rem',
            }}
          >
            <a
              href="https://twitter.com/justGabriel265"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                color: 'var(--accent)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
            >
              <FaTwitter /> Twitter
            </a>
            <a
              href="https://instagram.com/justGabrielmw"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                color: 'var(--accent)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://facebook.com/profile.php?id=100069183130767"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                color: 'var(--accent)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
            >
              <FaFacebook /> Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/gabriel-kadiwa-b2832b1b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                color: 'var(--accent)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;