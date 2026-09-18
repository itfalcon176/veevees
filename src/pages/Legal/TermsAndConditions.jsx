import React from 'react';
import { ChevronRight, FileText, Phone, Mail, MapPin } from 'lucide-react';
import './LegalPages.css';

export default function TermsAndConditions({ onNavigateHome, onNavigateContact }) {
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
            <span className="breadcrumb-current">Terms and Conditions</span>
          </nav>
        </div>
      </div>

      <div className="container legal-main-container">
        <div className="legal-header-card">
          <div className="legal-icon-wrap">
            <FileText size={32} />
          </div>
          <div>
            <h1 className="legal-page-title">Terms and Conditions</h1>
            <p className="legal-last-updated">
              Last Updated: September 2026 | Veevees Trading Corporation
            </p>
          </div>
        </div>

        <div className="legal-content-card">
          <section className="legal-section">
            <h2>1. Introduction & Acceptance</h2>
            <p>
              Welcome to <strong>Veevees Trading Corporation</strong> ("VeeVees", "we", "us", or "our"). 
              These Terms and Conditions govern your access to and use of our website, product catalog, and 
              wholesale purchasing services. By accessing our platform, requesting dealer quotations, or purchasing 
              power tools and equipment from us, you agree to be bound by these terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Wholesale Supply & Dealer Orders</h2>
            <p>
              Veevees Trading Corporation operates primarily as a B2B wholesale distributor and supplier of industrial 
              machinery, gasoline power tools, electric tools, and accessories throughout Kerala and South India.
            </p>
            <ul>
              <li><strong>Minimum Order Quantities (MOQ):</strong> Certain commercial products (such as chainsaws and cutting machines packed in master cartons of 2 or more units) are sold subject to minimum carton quantities.</li>
              <li><strong>Business Identification:</strong> Authorized dealers and retail shops must provide their valid trade name, contact person, and GSTIN where applicable.</li>
              <li><strong>Dealer Pricing:</strong> Wholesale rates, bulk discounts, and distributor schemes are subject to change based on raw material costs and manufacturer revisions.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Quotations, Pricing & Taxes</h2>
            <p>
              All prices displayed or quoted via telephone, WhatsApp, or formal proforma invoice are expressed in 
              Indian National Rupees (INR). Unless specifically noted, listed prices are inclusive of applicable GST 
              (Goods and Services Tax). Interstate shipments outside Kerala will attract appropriate IGST.
            </p>
            <p>
              Quotations provided through our wholesale sales desk are valid for 15 days from the date of issuance, 
              unless otherwise explicitly specified in writing.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Dispatch, Shipping & Transportation</h2>
            <p>
              We partner with reputed freight carriers, parcel parcel services, and local transport agencies across Kerala 
              to ensure swift delivery to retail shops and customer locations.
            </p>
            <ul>
              <li><strong>Dispatch Time:</strong> In-stock tools are typically dispatched within 24 to 48 hours of payment confirmation or purchase order receipt.</li>
              <li><strong>Transit Risk:</strong> Consignments are carefully packed in heavy-duty export/domestic cartons. Any visible in-transit damage must be recorded with the delivery agent and reported to VeeVees within 48 hours of receipt.</li>
              <li><strong>Delivery Addresses:</strong> Deliveries are executed to the verified shop or project site address provided at the time of order booking.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Manufacturer Warranty & Service Support</h2>
            <p>
              All power tools, gasoline chainsaws, angle grinders, and machinery distributed by Veevees Trading Corporation 
              (including Super Steel, Vertigo Gold, Wood Cutter, Logger, Topper, Makita, De Neers, and GG Tools) carry standard 
              manufacturer warranties against manufacturing defects.
            </p>
            <ul>
              <li>Warranty covers internal functional defects, motor armatures, and manufacturing flaws under normal operating conditions.</li>
              <li>Warranty does not cover damages caused by incorrect fuel-oil mixtures (for 2-stroke engines), physical abuse, water ingress, or unauthorized alterations.</li>
              <li>Genuine spare parts, chain bars, saw blades, and replacement armatures are available through our Perumbavoor central warehouse.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Returns & Claims Policy</h2>
            <p>
              Due to the commercial nature of wholesale machinery distribution, goods once sold and accepted in good order 
              are not eligible for unconditional return. In the rare event of a verified manufacturer defect upon delivery, 
              Veevees Trading Corporation will arrange repair, replacement, or credit note issuance in accordance with the 
              brand manufacturer's policy.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Governing Law & Jurisdiction</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. 
              Any disputes, claims, or controversies arising out of or relating to commercial transactions with 
              Veevees Trading Corporation shall be subject to the exclusive jurisdiction of the competent courts in 
              <strong>Perumbavoor / Ernakulam, Kerala, India</strong>.
            </p>
          </section>

          <section className="legal-section legal-contact-box">
            <h3>Questions Regarding Terms?</h3>
            <p>For any queries, contract terms, or dealer partnership agreements, please reach out to our legal & sales desk:</p>
            <div className="legal-contact-details">
              <div><Phone size={16} /> <span>+91 484 200 3045 / +91 8078 400 145</span></div>
              <div><Mail size={16} /> <span>veeveestc@gmail.com</span></div>
              <div><MapPin size={16} /> <span>Muckanamchery Building, PO, Cherukunnam, Asamannoor, Perumbavoor, Kerala 683549, India</span></div>
            </div>
            <button className="legal-action-btn" onClick={onNavigateContact}>
              Contact Sales Desk
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
