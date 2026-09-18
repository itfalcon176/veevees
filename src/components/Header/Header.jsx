import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, ChevronDown, Menu, X } from 'lucide-react';
import './Header.css';

const BRANDS = [
  {
    id: 'super-steel',
    name: 'Super Steel',
    logo: '/images/WhatsApp-Image-2024-12-21-at-12.14.05-PM.jpeg',
    href: '#brand-super-steel'
  },
  {
    id: 'vertigo-gold',
    name: 'Vertigo Gold',
    logo: '/images/Untitled_design__2_-removebg-preview.png',
    href: '#brand-vertigo-gold'
  },
  {
    id: 'logger',
    name: 'Logger',
    logo: '/images/WhatsApp-Image-2024-12-21-at-12.14.04-PM.jpeg',
    href: '#brand-logger'
  },
  {
    id: 'topper',
    name: 'Topper',
    logo: '/images/WhatsApp-Image-2024-12-21-at-12.14.06-PM.jpeg',
    href: '#brand-topper'
  },
  {
    id: 'makita',
    name: 'Makita',
    logo: '/images/Untitled-design-4.jpg',
    href: '#brand-makita'
  },
  {
    id: 'de-neers',
    name: 'De Neers',
    logo: '/images/Untitled-design-5.jpg',
    href: '#brand-de-neers'
  },
  {
    id: 'golden-steel',
    name: 'Golden Steel',
    logo: '/images/WhatsApp-Image-2024-12-21-at-12.14.06-PM-2.jpeg',
    href: '#brand-golden-steel'
  },
  {
    id: 'wood-cutter',
    name: 'Wood Cutter',
    logo: '/images/WhatsApp-Image-2024-12-21-at-12.14.06-PM-1.jpeg',
    href: '#brand-wood-cutter'
  },
  {
    id: 'gg-tools',
    name: 'GG Tools',
    logo: '/images/WhatsApp-Image-2024-12-21-at-12.14.07-PM.jpeg',
    href: '#brand-gg-tools'
  }
];

const CATEGORIES = [
  'All Categories',
  'Cordless Tools',
  'Electric Power Tools',
  'Gas Power Tools',
  'Pliers, Sockets',
  'Pounding & Prying',
  'Cutting Tools',
  'Replacement Pumps',
  'Nailers & Staplers',
  'Safety & Protection'
];

export default function Header({ currentPage = 'home', onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('Category');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const brandMenuRef = useRef(null);
  const brandNavRef = useRef(null);
  const categoryRef = useRef(null);

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (categoryRef.current && !categoryRef.current.contains(e.target)) {
        setIsCategoryOpen(false);
      }
      if (
        brandNavRef.current && 
        !brandNavRef.current.contains(e.target) &&
        brandMenuRef.current &&
        !brandMenuRef.current.contains(e.target)
      ) {
        setIsBrandOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for "${searchQuery}" in ${selectedCategory}`);
    }
  };

  const handleNavClick = (page) => (e) => {
    e.preventDefault();
    setActiveTab(page);
    setIsMobileMenuOpen(false);
    setIsBrandOpen(false);
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const handleBrandClick = (brand) => (e) => {
    e.preventDefault();
    setIsBrandOpen(false);
    setIsMobileMenuOpen(false);
    alert(`Selected brand: ${brand.name}`);
  };

  return (
    <header className="site-header">
      {/* Top Dark Header */}
      <div className="header-top">
        <div className="container header-top-container">
          {/* Logo */}
          <a 
            href="#home" 
            className="header-logo"
            onClick={handleNavClick('home')}
          >
            <img 
              src="/images/logo-header.png" 
              alt="VEEVEES TRADING CORPORATION" 
              onError={(e) => {
                e.target.src = "/images/logoy.png";
              }}
            />
          </a>

          {/* Search Box */}
          <form className="header-search" onSubmit={handleSearch}>
            <div className="search-category-dropdown" ref={categoryRef}>
              <button 
                type="button" 
                className="category-btn"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              >
                <span>{selectedCategory}</span>
                <ChevronDown size={14} />
              </button>
              {isCategoryOpen && (
                <ul className="category-menu">
                  {CATEGORIES.map((cat, idx) => (
                    <li 
                      key={idx}
                      onClick={() => {
                        setSelectedCategory(cat === 'All Categories' ? 'Category' : cat);
                        setIsCategoryOpen(false);
                      }}
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <input 
              type="text" 
              placeholder="Enter a keyword to search products" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-submit-btn">
              Search
            </button>
          </form>

          {/* Contact & Location Info */}
          <div className="header-info-group">
            <a 
              href="https://maps.app.goo.gl/JbCJpLwHp3A418cH9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="info-item"
            >
              <div className="info-icon">
                <MapPin size={22} strokeWidth={2.2} />
              </div>
              <div className="info-text">
                <span className="info-title">LOCATIONS</span>
                <span className="info-desc">Click to discover</span>
              </div>
            </a>

            <div className="info-divider"></div>

            <a href="tel:+914842003045" className="info-item">
              <div className="info-icon">
                <Phone size={20} strokeWidth={2.2} />
              </div>
              <div className="info-text">
                <span className="info-title">+91 484 200 3045</span>
                <span className="info-desc">Wholesale Enquiries</span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Main Yellow Navigation Bar */}
      <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="container header-nav-container">
          <ul className="nav-links">
            <li className={`nav-item ${currentPage === 'home' && !isBrandOpen ? 'active' : ''}`}>
              <a href="#home" onClick={handleNavClick('home')}>
                Home
              </a>
            </li>
            <li className={`nav-item ${currentPage === 'about' && !isBrandOpen ? 'active' : ''}`}>
              <a href="#about-us" onClick={handleNavClick('about')}>
                About us
              </a>
            </li>
            <li 
              ref={brandNavRef}
              className={`nav-item mega-dropdown-trigger ${isBrandOpen ? 'active' : ''}`}
              onMouseEnter={() => setIsBrandOpen(true)}
              onMouseLeave={() => setIsBrandOpen(false)}
            >
              <a 
                href="#brands" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  setIsBrandOpen(!isBrandOpen); 
                }}
              >
                Shop by brand
              </a>

              {/* Brand Mega Menu Dropdown */}
              {isBrandOpen && (
                <div 
                  ref={brandMenuRef}
                  className="brand-mega-menu"
                  onMouseEnter={() => setIsBrandOpen(true)}
                  onMouseLeave={() => setIsBrandOpen(false)}
                >
                  <div className="brand-grid">
                    {BRANDS.map((brand) => (
                      <a 
                        key={brand.id}
                        href={brand.href}
                        className="brand-card"
                        onClick={handleBrandClick(brand)}
                      >
                        <div className="brand-logo-wrap">
                          <img 
                            src={brand.logo} 
                            alt={brand.name} 
                            className="brand-logo-img"
                          />
                        </div>
                        <span className="brand-name">{brand.name}</span>
                      </a>
                    ))}
                    {/* Empty placeholder cells to maintain 6-column grid structure */}
                    <div className="brand-card empty-card"></div>
                    <div className="brand-card empty-card"></div>
                    <div className="brand-card empty-card"></div>
                  </div>
                </div>
              )}
            </li>
            <li className="nav-item">
              <a href="#shop" onClick={handleNavClick('shop')}>
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" onClick={handleNavClick('contact')}>
                Contact us
              </a>
            </li>
          </ul>

          {/* Right Action Items: Exact text matching screenshot "My account" and "0 / 0" */}
          <div className="nav-actions">
            <a href="#account" className="nav-action-text">
              My account
            </a>
            <a href="#cart" className="nav-action-text cart-counter">
              0 / 0
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
