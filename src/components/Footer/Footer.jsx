import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MessageSquare,
  ArrowUp,
  User
} from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer className="site-footer">
        {/* Main Footer Container */}
        <div className="container footer-main-container">
          {/* Left Column - Brand & Address */}
          <div className="footer-left-col">
            <a href="#" className="footer-logo">
              <img 
                src="/images/logoy.png" 
                alt="VeeVees Trading Corporation" 
                onError={(e) => {
                  e.target.src = "/images/logo-new.png";
                }}
              />
            </a>

            {/* Social Icons */}
            <div className="footer-social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Address */}
            <address className="footer-address">
              Muckanamchery Building, PO, Cherukunnam, Asamannoor, Perumbavoor, Kerala 683549, India, PIN- 683 549
            </address>

            <a 
              href="https://maps.app.goo.gl/JbCJpLwHp3A418cH9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="show-on-map-link"
            >
              Show on map
            </a>
          </div>

          {/* Right Column - Contacts */}
          <div className="footer-right-col">
            <h6 className="footer-help-title">Need help? / Quick contacts</h6>

            <div className="footer-phone-wrapper">
              <Phone size={22} className="footer-phone-icon" />
              <a href="tel:+914842003045" className="footer-phone-number">
                +91 484 200 3045
              </a>
            </div>

            <p className="footer-business-hours">
              Monday - Saturday: 9:00 am - 06:00 pm
            </p>

            {/* Quick Contact Buttons */}
            <div className="footer-contact-actions">
              <a 
                href="mailto:info@veevees.co.in" 
                className="contact-action-btn email-btn" 
                title="Send Email"
              >
                <Mail size={16} />
              </a>
              <a 
                href="https://m.me" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-action-btn messenger-btn" 
                title="Facebook Messenger"
              >
                <MessageSquare size={16} />
              </a>
              <a 
                href="viber://chat" 
                className="contact-action-btn viber-btn" 
                title="Viber"
              >
                <MessageCircle size={16} />
              </a>
              <a 
                href="https://wa.me/914842003045" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-action-btn whatsapp-btn" 
                title="WhatsApp"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.04-1.08l-.29-.17-3.12.82.83-3.04-.19-.3a8.216 8.216 0 0 1-1.26-4.46c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="footer-bottom-bar">
          <div className="container footer-bottom-container">
            <div className="footer-copyright-text">
              <span>© 2026 VeeVees. All rights reserved.</span>
              <span className="footer-divider">|</span>
              <a href="#terms">Terms and Conditions</a>
              <span className="footer-divider">|</span>
              <a href="#privacy">Privacy Policy</a>
              <span className="footer-divider">|</span>
              <a href="#sitemap">Sitemap</a>
            </div>

            <div className="footer-payment-methods">
              <img 
                src="/images/payments1.png" 
                alt="Payment methods: Apple Pay, Google Pay, Mastercard, PayPal, Visa, Amex" 
              />
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <a 
        href="https://wa.me/914842003045" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-whatsapp-btn"
        aria-label="WhatsApp Chat"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.04-1.08l-.29-.17-3.12.82.83-3.04-.19-.3a8.216 8.216 0 0 1-1.26-4.46c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.3z" />
        </svg>
      </a>

      {showScrollTop && (
        <button 
          onClick={scrollToTop} 
          className="floating-scroll-top-btn"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      <button 
        className="floating-user-btn"
        aria-label="Account Settings"
      >
        <User size={20} />
      </button>
    </>
  );
}
