import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(true);

  // Handle scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close WhatsApp widget
  const closeWhatsApp = () => {
    setShowWhatsApp(false);
    // Optional: Re-show after 30 seconds
    setTimeout(() => setShowWhatsApp(true), 30000);
  };

  return (
    <>
      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            background: 'var(--accent)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            cursor: 'pointer',
            zIndex: 1000,
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            opacity: showScrollTop ? 1 : 0,
            transform: showScrollTop ? 'scale(1)' : 'scale(0.8)',
          }}
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}

      {/* WhatsApp Widget */}
      {showWhatsApp && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '10px',
          }}
        >
          <button
            onClick={closeWhatsApp}
            style={{
              background: 'var(--card-bg)',
              color: 'var(--text)',
              border: '1px solid var(--accent)',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'background 0.3s ease, color 0.3s ease',
            }}
            aria-label="Close WhatsApp widget"
          >
            ✕
          </button>
          <a
            href="https://wa.me/+265995375405?text=Hello%20Gabriel,%20I'm%20interested%20in%20your%20services!"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#25D366',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              textDecoration: 'none',
            }}
            aria-label="Chat with Gabriel on WhatsApp"
          >
            <FaWhatsapp size={30} />
          </a>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;