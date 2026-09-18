import React from 'react';
import { ChevronRight, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import './LegalPages.css';

export default function PrivacyPolicy({ onNavigateHome, onNavigateContact }) {
  return (
    <div className="legal-page">
      {/* Breadcrumbs */}
      <div className="legal-breadcrumbs-bar">
        <div className="container">
          <nav className="breadcrumbs-nav" aria-label="Breadcrumb">
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigateHome(); }}>
              Home
            </a>
            <ChevronRight size={14} className="breadcrumb-sep" />
            <span className="breadcrumb-current">Privacy Policy</span>
          </nav>
        </div>
      </div>

      <div className="container legal-main-container">
        <div className="legal-header-card">
          <div className="legal-icon-wrap">
            <ShieldCheck size={32} />
          </div>
          <div>
            <h1 className="legal-page-title">Privacy Policy</h1>
            <p className="legal-last-updated">
              Last Updated: September 2026 | Veevees Trading Corporation
            </p>
          </div>
        </div>

        <div className="legal-content-card">
          <section className="legal-section">
            <h2>1. Commitment to Privacy</h2>
            <p>
              At <strong>Veevees Trading Corporation</strong>, we respect the privacy of our website visitors, 
              hardware dealer partners, contractors, and customers. This Privacy Policy outlines our practices 
              regarding the collection, use, maintenance, and disclosure of information gathered through our website 
              and wholesale communication channels.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Information We Collect</h2>
            <p>We may collect information from you in several ways, including when you fill out an enquiry form, request a wholesale quote, or contact our sales desk:</p>
            <ul>
              <li><strong>Business Identification:</strong> Shop/Store Name, Trade Type, Business Address, and GSTIN (for wholesale tax invoices).</li>
              <li><strong>Contact Details:</strong> Full Name, Email Address, Telephone Number, and WhatsApp contact numbers.</li>
              <li><strong>Delivery & Logistics Data:</strong> Consignee address, PIN code, and preferred local transport hub in Kerala.</li>
              <li><strong>Technical Data:</strong> Browser type, operating system, IP address, and anonymous usage statistics to improve website performance.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. How We Use Collected Information</h2>
            <p>The information provided to Veevees Trading Corporation is used strictly for legitimate commercial and business fulfillment purposes, including:</p>
            <ul>
              <li>Preparing and dispatching wholesale quotations, proforma invoices, and product catalogs.</li>
              <li>Arranging parcel booking and freight transport to your verified shop location.</li>
              <li>Providing technical assistance, warranty verification, and genuine spare parts fulfillment.</li>
              <li>Informing authorized dealers about new product arrivals, seasonal discounts, and brand updates.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Data Security & Storage</h2>
            <p>
              We implement appropriate technical, administrative, and physical security safeguards to protect your business 
              and contact information against unauthorized access, alteration, disclosure, or destruction. 
              We do not sell, trade, rent, or lease your personal or business identification information to third-party marketing companies.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Third-Party Service Providers</h2>
            <p>
              We only disclose necessary delivery information (such as destination address, contact person, and phone number) 
              to licensed freight transporters, parcel carriers, and delivery couriers solely to facilitate transport of ordered machinery.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Cookies & Browsing Analytics</h2>
            <p>
              Our website uses standard HTTP cookies and local storage to remember your browsing preferences, such as selected 
              product categories or recent catalog searches. You may configure your web browser to refuse cookies or notify you 
              when cookies are being placed.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Contacting the Grievance Officer</h2>
            <p>If you have any questions about our Privacy Policy or wish to update or delete your dealer contact records, please contact us at:</p>
            <div className="legal-contact-details">
              <div><Phone size={16} /> <span>+91 484 200 3045</span></div>
              <div><Mail size={16} /> <span>veeveestc@gmail.com</span></div>
              <div><MapPin size={16} /> <span>Muckanamchery Building, PO, Cherukunnam, Asamannoor, Perumbavoor, Kerala 683549, India</span></div>
            </div>
            <button className="legal-action-btn" onClick={onNavigateContact}>
              Contact Privacy Desk
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
