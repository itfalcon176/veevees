import React from 'react';
import { 
  ChevronRight, 
  Map, 
  Layers, 
  Grid, 
  Package, 
  FileText, 
  ArrowRight,
  ExternalLink 
} from 'lucide-react';
import { CATEGORIES, BRANDS, PRODUCTS } from '../../data/productsData';
import './LegalPages.css';

export default function Sitemap({ 
  onNavigateHome, 
  onNavigateAbout, 
  onNavigateShop, 
  onNavigateContact, 
  onNavigateTerms, 
  onNavigatePrivacy,
  onSelectProduct 
}) {
  return (
    <div className="legal-page sitemap-page">
      {/* Breadcrumbs */}
      <div className="legal-breadcrumbs-bar">
        <div className="container">
          <nav className="breadcrumbs-nav" aria-label="Breadcrumb">
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigateHome(); }}>
              Home
            </a>
            <ChevronRight size={14} className="breadcrumb-sep" />
            <span className="breadcrumb-current">Sitemap</span>
          </nav>
        </div>
      </div>

      <div className="container legal-main-container">
        <div className="legal-header-card">
          <div className="legal-icon-wrap sitemap-icon">
            <Map size={32} />
          </div>
          <div>
            <h1 className="legal-page-title">Website Sitemap</h1>
            <p className="legal-last-updated">
              Overview of all pages, brands, tools, and resources on VeeVees Trading Corporation
            </p>
          </div>
        </div>

        <div className="sitemap-grid">
          {/* SECTION 1: PRIMARY PAGES */}
          <div className="sitemap-card">
            <div className="sitemap-card-header">
              <Layers size={20} className="sitemap-sec-icon" />
              <h3>Main Pages</h3>
            </div>
            <ul className="sitemap-links-list">
              <li>
                <a href="/" onClick={(e) => { e.preventDefault(); e.stopPropagation(); onNavigateHome(); }}>
                  <ArrowRight size={14} />
                  <span>Home Page</span>
                </a>
              </li>
              <li>
                <a href="/about-us/" onClick={(e) => { e.preventDefault(); e.stopPropagation(); onNavigateAbout(); }}>
                  <ArrowRight size={14} />
                  <span>About Us & Company Profile</span>
                </a>
              </li>
              <li>
                <a href="/shop/" onClick={(e) => { e.preventDefault(); e.stopPropagation(); onNavigateShop(); }}>
                  <ArrowRight size={14} />
                  <span>Shop Catalog & Products</span>
                </a>
              </li>
              <li>
                <a href="/contact-us/" onClick={(e) => { e.preventDefault(); e.stopPropagation(); onNavigateContact(); }}>
                  <ArrowRight size={14} />
                  <span>Contact Us & Directions</span>
                </a>
              </li>
            </ul>
          </div>

          {/* SECTION 2: SHOP BY BRAND */}
          <div className="sitemap-card">
            <div className="sitemap-card-header">
              <Grid size={20} className="sitemap-sec-icon" />
              <h3>Shop by Brand</h3>
            </div>
            <ul className="sitemap-links-list">
              {BRANDS.map((brandName, idx) => (
                <li key={idx}>
                  <a 
                    href={`/shop/?brand=${encodeURIComponent(brandName)}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateShop({ brand: brandName });
                    }}
                  >
                    <ArrowRight size={14} />
                    <span>{brandName}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 3: PRODUCT CATEGORIES */}
          <div className="sitemap-card">
            <div className="sitemap-card-header">
              <Package size={20} className="sitemap-sec-icon" />
              <h3>Product Categories</h3>
            </div>
            <ul className="sitemap-links-list">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a 
                    href={`/shop/?category=${encodeURIComponent(cat.slug)}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateShop({ category: cat.slug });
                    }}
                  >
                    <ArrowRight size={14} />
                    <span>{cat.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 4: FEATURED POWER TOOLS */}
          <div className="sitemap-card">
            <div className="sitemap-card-header">
              <Package size={20} className="sitemap-sec-icon" />
              <h3>Popular Machinery</h3>
            </div>
            <ul className="sitemap-links-list">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <a 
                    href={`/product/${prod.slug}/`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectProduct(prod.slug);
                    }}
                  >
                    <ArrowRight size={14} />
                    <span>{prod.name} ({prod.sku})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 5: LEGAL & POLICIES */}
          <div className="sitemap-card">
            <div className="sitemap-card-header">
              <FileText size={20} className="sitemap-sec-icon" />
              <h3>Legal & Corporate</h3>
            </div>
            <ul className="sitemap-links-list">
              <li>
                <a href="/terms-and-conditions/" onClick={(e) => { e.preventDefault(); e.stopPropagation(); onNavigateTerms(); }}>
                  <ArrowRight size={14} />
                  <span>Terms and Conditions</span>
                </a>
              </li>
              <li>
                <a href="/privacy-policy/" onClick={(e) => { e.preventDefault(); e.stopPropagation(); onNavigatePrivacy(); }}>
                  <ArrowRight size={14} />
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.app.goo.gl/JbCJpLwHp3A418cH9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={14} />
                  <span>Google Maps Location</span>
                </a>
              </li>
              <li>
                <a href="tel:+914842003045">
                  <ExternalLink size={14} />
                  <span>Sales Hotline: +91 484 200 3045</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
