import React from 'react';
import { ChevronRight } from 'lucide-react';
import './AboutUs.css';

const BRANDS_LIST = [
  {
    name: 'Super Steel',
    logo: '/images/WhatsApp-Image-2024-12-21-at-12.14.05-PM.jpeg',
    link: '/shop/?brand=Super%20Steel'
  },
  {
    name: 'Vertigo Gold',
    logo: '/images/Untitled_design__2_-removebg-preview.png',
    link: '/shop/?brand=Vertigo%20Gold'
  },
  {
    name: 'Logger',
    logo: '/images/WhatsApp-Image-2024-12-21-at-12.14.04-PM.jpeg',
    link: '/shop/?brand=Logger'
  },
  {
    name: 'Topper',
    logo: '/images/WhatsApp-Image-2024-12-21-at-12.14.06-PM.jpeg',
    link: '/shop/?brand=Topper'
  },
  {
    name: 'Makita',
    logo: '/images/Untitled-design-4.jpg',
    link: '/shop/?brand=Makita'
  },
  {
    name: 'De Neers',
    logo: '/images/Untitled-design-5.jpg',
    link: '/shop/?brand=De%20Neers'
  },
  {
    name: 'Golden Steel',
    logo: '/images/WhatsApp-Image-2024-12-21-at-12.14.06-PM-2.jpeg',
    link: '/shop/?brand=Golden%20Steel'
  },
  {
    name: 'Wood Cutter',
    logo: '/images/WhatsApp-Image-2024-12-21-at-12.14.06-PM-1.jpeg',
    link: '/shop/?brand=Wood%20Cutter'
  },
  {
    name: 'GG Tools',
    logo: '/images/WhatsApp-Image-2024-12-21-at-12.14.07-PM.jpeg',
    link: '/shop/?brand=GG%20Tools'
  }
];

export default function AboutUs({ onNavigateHome, onNavigateShop }) {
  return (
    <div className="about-us-page">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className="about-breadcrumb" aria-label="Breadcrumb">
          <a 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateHome) onNavigateHome();
              else window.history.pushState({}, '', '/');
            }}
          >
            Home
          </a>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <span className="breadcrumb-current">About us</span>
        </nav>

        {/* Page Title */}
        <h1 className="about-page-title">About us</h1>

        {/* Section 1: Company Overview (Image Left, Text Right) */}
        <section className="about-section section-company">
          <div className="about-grid image-left">
            <div className="about-image-wrapper">
              <img 
                src="/images/about1.jpg-1.jpeg" 
                alt="Super Steel India's Highest Power Backup Battery" 
                className="about-featured-img"
              />
            </div>
            <div className="about-content">
              <span className="about-category-tag">COMPANY</span>
              <h2 className="about-heading">
                Veeves: Quality Tools and Accessories for Farmers Worldwide
              </h2>
              <p className="about-desc">
                At Veeves, we provide top-quality tools and accessories for farmers, from cutters to chainsaws. Whether you’re a retailer or need supplies in bulk, we are dedicated to supporting agriculture with reliable products that make farming easier and more efficient.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: What Makes Us, Us? (Text Left, Image Right) */}
        <section className="about-section section-differentiation">
          <div className="about-grid image-right">
            <div className="about-content">
              <h2 className="about-heading">What Makes Us, Us?</h2>
              <p className="about-desc">
                At Veeves, we excel by offering a comprehensive range of quality tools and accessories under trusted brands. We are the sole distributors in Kerala for Super Steel, Vertigo Gold, Logger, and Topper, providing everything from brush cutters, chainsaws, and angle grinders to all related accessories and spare parts. Additionally, we distribute Kissan Craft, Makita, and De Neers, with products covering hand tools, power tools, and more. We retail renowned brands like I Bell, Bosch, Stanley, Stihl, and others, ensuring our customers have access to top-tier products, parts, and services for both retail and wholesale needs.
              </p>
            </div>
            <div className="about-image-wrapper">
              <img 
                src="/images/about2.jpg.jpeg" 
                alt="Unbeatable Range of Impact Wrench Super Steel" 
                className="about-featured-img"
              />
            </div>
          </div>
        </section>

        {/* Section 3: Inspiration & 2x2 Gallery (Gallery Left, Text Right) */}
        <section className="about-section section-inspiration">
          <div className="about-grid image-left">
            <div className="about-gallery-grid">
              <div className="gallery-item">
                <img 
                  src="/images/gallery1-copy.jpg-600x400.jpeg" 
                  alt="Premium Range of Sander" 
                />
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/gallery2-copy.jpg-600x400.jpeg" 
                  alt="Unbeatable Range of Cordless Drills" 
                />
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/gallery3-copy.jpg-600x400.jpeg" 
                  alt="Super Steel Gasoline Chainsaw" 
                />
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/gallery4-copy.jpg-600x400.jpeg" 
                  alt="Super Steel 400mm Cutter" 
                />
              </div>
            </div>
            <div className="about-content">
              <h2 className="about-heading">
                A Hub of Inspiration for Farmers and Households
              </h2>
              <p className="about-quote">
                Understanding who buys our tools and what you’re looking for from a supplier keeps us on our toes!
              </p>
              <p className="about-desc">
                10 years ago, from a small home county village, came a big idea to bring together an extensive range of agricultural and household tools, accessories, hardware, workwear, consumables, security, and more to a new online platform.
              </p>
              <p className="about-desc">
                Unlocking in excess of 30,000 products under one virtual roof, Veeves is now the ‘one-stop-shop’ for many farmers and household customers.
              </p>
              <p className="about-desc">
                We have built excellent relationships with top manufacturers like Super Steel, Vertigo Gold, and Makita to give you the best deals, the biggest ranges, and all the information you need to make an informed choice when shopping with us.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Our Top Brands Grid */}
        <section className="about-section section-brands">
          <h2 className="about-brands-title">Our Top Brands</h2>
          <div className="brands-grid">
            {BRANDS_LIST.map((brand, idx) => (
              <a 
                key={idx} 
                href={brand.link} 
                className="brand-card"
                title={`Shop ${brand.name}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigateShop) {
                    onNavigateShop({ brand: brand.name });
                  }
                }}
              >
                <div className="brand-logo-container">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="brand-logo-img"
                  />
                </div>
                <div className="brand-name-bar">
                  <h6 className="brand-name-text">{brand.name}</h6>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
