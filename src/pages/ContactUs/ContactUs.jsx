import React, { useState } from 'react';
import { 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Building2,
  User,
  ExternalLink,
  AlertCircle
} from 'lucide-react';
import './ContactUs.css';

export default function ContactUs({ onNavigateHome }) {
  const [customerType, setCustomerType] = useState('shop'); // 'shop' or 'individual'
  const [formData, setFormData] = useState({
    shopName: '',
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        shopName: '',
        name: '',
        email: '',
        phone: '',
        location: '',
        message: ''
      });
    }, 800);
  };

  const whatsappDirectUrl = `https://wa.me/919745968558?text=${encodeURIComponent(
    'Hello VeeVees Trading, I have a wholesale/dealer enquiry regarding power tools.'
  )}`;

  return (
    <div className="contact-page">
      {/* Breadcrumbs */}
      <div className="contact-breadcrumbs-bar">
        <div className="container">
          <nav className="breadcrumbs-nav" aria-label="Breadcrumb">
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigateHome(); }}>
              Home
            </a>
            <ChevronRight size={14} className="breadcrumb-sep" />
            <span className="breadcrumb-current">Contact us</span>
          </nav>
        </div>
      </div>

      <div className="container contact-main-container">
        {/* Page Title */}
        <div className="contact-header-section">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Get in touch with Kerala's premier wholesale power tools & hardware distributor
          </p>
        </div>

        {/* Notice Banner */}
        <div className="contact-notice-card">
          <div className="notice-icon-wrap">
            <AlertCircle size={24} />
          </div>
          <div className="notice-text">
            <h3>An Important Message to our Valued Customers</h3>
            <p>
              We’re working diligently to reach any customer who has requested contact. We’re tools enthusiasts who understand how eager our customers and dealer partners are to get their equipment and genuine spare parts.
            </p>
          </div>
        </div>

        <div className="contact-grid-layout">
          {/* ============ LEFT COLUMN: CONTACT CARDS & DETAILS ============ */}
          <div className="contact-info-col">
            {/* Sales Contact Card */}
            <div className="info-box-card">
              <div className="info-box-header">
                <div className="info-icon-badge yellow-badge">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="info-category-label">Sales & Wholesale Enquiries</span>
                  <h3 className="info-phone-title">
                    <a href="tel:+914842003045">+91 484 200 3045</a>
                  </h3>
                </div>
              </div>
              <div className="info-hours-row">
                <Clock size={16} className="hours-icon" />
                <div className="hours-text">
                  <p><strong>Monday to Saturday:</strong> 8:30 AM – 6:00 PM</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
              </div>
              <div className="info-card-actions">
                <a href="tel:+914842003045" className="quick-call-btn">
                  <Phone size={14} />
                  <span>Call Sales Desk</span>
                </a>
                <a 
                  href={whatsappDirectUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="quick-wa-btn"
                >
                  <MessageSquare size={14} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Technical Support Card */}
            <div className="info-box-card">
              <div className="info-box-header">
                <div className="info-icon-badge dark-badge">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="info-category-label">Direct Support & Spares</span>
                  <h3 className="info-phone-title">
                    <a href="tel:+918078400145">+91 8078 400 145</a>
                  </h3>
                </div>
              </div>
              <div className="info-hours-row">
                <Clock size={16} className="hours-icon" />
                <div className="hours-text">
                  <p><strong>Monday to Friday:</strong> 9:00 AM – 6:00 PM</p>
                  <p><strong>Saturday / Sunday:</strong> Closed</p>
                </div>
              </div>
            </div>

            {/* Email Contact Card */}
            <div className="info-box-card">
              <div className="info-box-header">
                <div className="info-icon-badge yellow-badge">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="info-category-label">Email Us</span>
                  <h3 className="info-phone-title">
                    <a href="mailto:veeveestc@gmail.com">veeveestc@gmail.com</a>
                  </h3>
                </div>
              </div>
              <p className="email-subtext">Send us quotations, purchase orders, or dealership requests anytime.</p>
            </div>

            {/* Office Location Card */}
            <div className="info-box-card address-card">
              <div className="info-box-header">
                <div className="info-icon-badge dark-badge">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="info-category-label">Our Main Location</span>
                  <h4 className="office-title">Perumbavoor Office & Warehouse</h4>
                </div>
              </div>
              <address className="office-address">
                Muckanamchery Building, PO, Cherukunnam, Asamannoor, Perumbavoor, Kerala 683549, India
              </address>
              <a 
                href="https://maps.app.goo.gl/JbCJpLwHp3A418cH9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="directions-link"
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* ============ RIGHT COLUMN: ENQUIRY FORM ============ */}
          <div className="contact-form-col">
            <div className="form-wrapper-card">
              <div className="form-header-area">
                <h2 className="form-main-title">Enquiry</h2>
                <p className="form-intro-text">
                  Please select an option to help us best serve you.
                </p>
              </div>

              {isSubmitted && (
                <div className="submission-success-banner">
                  <CheckCircle2 size={24} className="success-icon" />
                  <div>
                    <h4>Thank you for your enquiry!</h4>
                    <p>Our sales team will get in touch with you shortly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-custom-form">
                {/* Customer Type Selector */}
                <div className="form-section-block">
                  <label className="field-group-label">How can we help you? *</label>
                  <div className="type-toggle-options">
                    <label className={`type-option-card ${customerType === 'shop' ? 'selected' : ''}`}>
                      <input 
                        type="radio" 
                        name="customer-type" 
                        value="shop"
                        checked={customerType === 'shop'}
                        onChange={() => setCustomerType('shop')}
                      />
                      <Building2 size={18} />
                      <span className="option-title">Shop / Hardware Dealer</span>
                    </label>

                    <label className={`type-option-card ${customerType === 'individual' ? 'selected' : ''}`}>
                      <input 
                        type="radio" 
                        name="customer-type" 
                        value="individual"
                        checked={customerType === 'individual'}
                        onChange={() => setCustomerType('individual')}
                      />
                      <User size={18} />
                      <span className="option-title">Individual / Contractor</span>
                    </label>
                  </div>
                </div>

                {/* Conditional Field: Shop Name */}
                {customerType === 'shop' && (
                  <div className="form-group-field">
                    <label htmlFor="shopName">Shop / Business Name *</label>
                    <input 
                      type="text" 
                      id="shopName" 
                      name="shopName"
                      required
                      placeholder="e.g. Kerala Hardware & Tools Mart"
                      value={formData.shopName}
                      onChange={handleChange}
                      className="form-control-input"
                    />
                  </div>
                )}

                {/* Name & Phone Grid */}
                <div className="form-row-2col">
                  <div className="form-group-field">
                    <label htmlFor="name">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      placeholder="e.g. Suresh Kumar"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control-input"
                    />
                  </div>

                  <div className="form-group-field">
                    <label htmlFor="phone">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control-input"
                    />
                  </div>
                </div>

                {/* Email & Location Grid */}
                <div className="form-row-2col">
                  <div className="form-group-field">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      placeholder="e.g. contact@yourbusiness.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control-input"
                    />
                  </div>

                  <div className="form-group-field">
                    <label htmlFor="location">District / Location in Kerala *</label>
                    <input 
                      type="text" 
                      id="location" 
                      name="location"
                      required
                      placeholder="e.g. Ernakulam, Thrissur, Kottayam"
                      value={formData.location}
                      onChange={handleChange}
                      className="form-control-input"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="form-group-field">
                  <label htmlFor="message">Your Message / Products Needed *</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    rows={5}
                    placeholder="Mention the brands, models (e.g. Super Steel Chainsaws, Makita Drills, De Neers Tools) or wholesale quantity needed..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control-input form-textarea"
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="contact-submit-btn"
                >
                  {isSubmitting ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Enquiry Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ============ BOTTOM FULL-WIDTH GOOGLE MAP ============ */}
        <section className="contact-map-section">
          <div className="map-card-container">
            <div className="map-header-bar">
              <div className="map-header-text">
                <MapPin size={20} className="map-pin-icon" />
                <h3>Find Us on Google Maps</h3>
                <span className="map-address-sub">Veevees Trading Corporation, Asamannoor, Perumbavoor</span>
              </div>
              <a 
                href="https://maps.app.goo.gl/JbCJpLwHp3A418cH9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="map-open-btn"
              >
                <span>Get Driving Directions</span>
                <ExternalLink size={14} />
              </a>
            </div>
            <div className="map-iframe-wrapper">
              <iframe 
                title="Veevees Trading Corporation Google Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3927.9772551763845!2d76.5412646!3d10.1009473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e33681077cd7%3A0xbb1c3318162e2a10!2sVeevees%20Trading%20Corporation!5e0!3m2!1sen!2sin!4v1724910202311!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
