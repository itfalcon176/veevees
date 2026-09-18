import React, { useState, useMemo } from 'react';
import { 
  Filter, 
  Grid3X3, 
  LayoutList, 
  ChevronRight, 
  Star, 
  Eye, 
  RotateCcw,
  PhoneCall,
  Search
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, BRANDS } from '../../data/productsData';
import './Shop.css';

export default function Shop({ 
  initialCategory = 'all', 
  initialBrand = null, 
  onSelectProduct,
  onNavigateHome 
}) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState(initialBrand || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [priceRange, setPriceRange] = useState(15000);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all') {
        const catName = CATEGORIES.find(c => c.slug === selectedCategory)?.name || selectedCategory;
        const matchesCategory = p.categories.some(
          c => c.toLowerCase() === catName.toLowerCase() || c.toLowerCase().replace(/\s+/g, '-') === selectedCategory
        );
        if (!matchesCategory) return false;
      }

      // Brand filter
      if (selectedBrand !== 'all') {
        const matchesBrand = p.brand.toLowerCase() === selectedBrand.toLowerCase() ||
          p.brand.toLowerCase().replace(/\s+/g, '-') === selectedBrand.toLowerCase().replace(/\s+/g, '-');
        if (!matchesBrand) return false;
      }

      // Price filter
      if (p.price > priceRange) return false;

      // In stock
      if (onlyInStock && !p.inStock) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesQuery = 
          p.name.toLowerCase().includes(q) || 
          p.sku.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q);
        if (!matchesQuery) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'latest') return b.id - a.id;
      return 0; // default
    });
  }, [selectedCategory, selectedBrand, priceRange, onlyInStock, searchQuery, sortBy]);

  // Reset all filters
  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedBrand('all');
    setSearchQuery('');
    setPriceRange(15000);
    setOnlyInStock(false);
    setSortBy('default');
  };

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = { all: PRODUCTS.length };
    CATEGORIES.forEach(cat => {
      if (cat.slug === 'all') return;
      counts[cat.slug] = PRODUCTS.filter(p => 
        p.categories.some(c => c.toLowerCase() === cat.name.toLowerCase() || c.toLowerCase().replace(/\s+/g, '-') === cat.slug)
      ).length;
    });
    return counts;
  }, []);

  // Brand counts
  const brandCounts = useMemo(() => {
    const counts = { all: PRODUCTS.length };
    BRANDS.forEach(b => {
      counts[b] = PRODUCTS.filter(p => p.brand.toLowerCase() === b.toLowerCase()).length;
    });
    return counts;
  }, []);

  const activeCategoryName = CATEGORIES.find(c => c.slug === selectedCategory)?.name || 'All Products';

  return (
    <div className="shop-page">
      {/* Breadcrumbs Header */}
      <div className="shop-breadcrumbs-bar">
        <div className="container">
          <nav className="breadcrumbs-nav" aria-label="Breadcrumb">
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigateHome(); }}>
              Home
            </a>
            <ChevronRight size={14} className="breadcrumb-sep" />
            <span className="breadcrumb-current">
              {selectedCategory !== 'all' ? activeCategoryName : selectedBrand !== 'all' ? selectedBrand : 'Shop'}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Container */}
      <div className="container shop-main-container">
        {/* Mobile Filter Toggle Button */}
        <div className="mobile-filter-bar">
          <button 
            className="mobile-filter-btn"
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          >
            <Filter size={16} />
            <span>Filter Products</span>
          </button>
          <span className="mobile-count-text">
            {filteredProducts.length} items
          </span>
        </div>

        <div className="shop-layout">
          {/* ================= SIDEBAR ================= */}
          <aside className={`shop-sidebar ${mobileFilterOpen ? 'open' : ''}`}>
            <div className="sidebar-header-mobile">
              <h3>Filters</h3>
              <button 
                className="close-sidebar-btn"
                onClick={() => setMobileFilterOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Search in sidebar */}
            <div className="sidebar-widget">
              <h3 className="widget-title">Search Products</h3>
              <div className="sidebar-search-box">
                <input 
                  type="text" 
                  placeholder="Type product name, SKU..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search size={16} className="sidebar-search-icon" />
              </div>
            </div>

            {/* Product Categories Widget */}
            <div className="sidebar-widget">
              <h3 className="widget-title">Product Categories</h3>
              <ul className="category-filter-list">
                {CATEGORIES.map((cat) => {
                  const count = categoryCounts[cat.slug] || 0;
                  const isActive = selectedCategory === cat.slug;
                  return (
                    <li key={cat.id}>
                      <button 
                        className={`filter-item-btn ${isActive ? 'active' : ''}`}
                        onClick={() => {
                          setSelectedCategory(cat.slug);
                          setMobileFilterOpen(false);
                        }}
                      >
                        <span className="filter-item-name">{cat.name}</span>
                        <span className="filter-item-count">({count})</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Filter by Brand Widget */}
            <div className="sidebar-widget">
              <h3 className="widget-title">Filter by Brand</h3>
              <ul className="brand-filter-list">
                <li>
                  <button 
                    className={`filter-item-btn ${selectedBrand === 'all' ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedBrand('all');
                      setMobileFilterOpen(false);
                    }}
                  >
                    <span className="filter-item-name">All Brands</span>
                    <span className="filter-item-count">({PRODUCTS.length})</span>
                  </button>
                </li>
                {BRANDS.map((brandName) => {
                  const count = brandCounts[brandName] || 0;
                  const isActive = selectedBrand.toLowerCase() === brandName.toLowerCase();
                  return (
                    <li key={brandName}>
                      <button 
                        className={`filter-item-btn ${isActive ? 'active' : ''}`}
                        onClick={() => {
                          setSelectedBrand(brandName);
                          setMobileFilterOpen(false);
                        }}
                      >
                        <span className="filter-item-name">{brandName}</span>
                        <span className="filter-item-count">({count})</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Price Filter Widget */}
            <div className="sidebar-widget">
              <h3 className="widget-title">Filter by Price</h3>
              <div className="price-slider-wrap">
                <input 
                  type="range" 
                  min="2000" 
                  max="15000" 
                  step="500"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="price-slider"
                />
                <div className="price-display">
                  <span>Max Price:</span>
                  <strong>₹{priceRange.toLocaleString('en-IN')}</strong>
                </div>
              </div>
            </div>

            {/* Stock Filter Checkbox */}
            <div className="sidebar-widget">
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={onlyInStock}
                  onChange={(e) => setOnlyInStock(e.target.checked)}
                />
                <span className="checkbox-custom"></span>
                <span className="checkbox-text">In Stock Only</span>
              </label>
            </div>

            {/* Reset Filters */}
            <div className="sidebar-widget">
              <button className="reset-filter-btn" onClick={handleResetFilters}>
                <RotateCcw size={14} />
                <span>Reset All Filters</span>
              </button>
            </div>

            {/* Wholesale Contact Card in Sidebar */}
            <div className="sidebar-support-card">
              <PhoneCall size={24} className="support-icon" />
              <h4>Wholesale Orders</h4>
              <p>For dealer pricing, bulk supply, and dealership enquiries in Kerala:</p>
              <a href="tel:+914842003045" className="support-tel">
                +91 484 200 3045
              </a>
            </div>
          </aside>

          {/* ================= PRODUCT CONTENT AREA ================= */}
          <main className="shop-content">
            {/* Top Toolbar */}
            <div className="shop-toolbar">
              <div className="toolbar-left">
                <h1 className="shop-page-title">
                  {selectedBrand !== 'all' ? selectedBrand : activeCategoryName}
                </h1>
                <p className="toolbar-result-count">
                  Showing {filteredProducts.length > 0 ? 1 : 0}–{filteredProducts.length} of {filteredProducts.length} results
                </p>
              </div>

              <div className="toolbar-right">
                {/* View Mode Toggle */}
                <div className="view-mode-toggle">
                  <button 
                    className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                    onClick={() => setViewMode('grid')}
                    title="Grid View"
                  >
                    <Grid3X3 size={18} />
                  </button>
                  <button 
                    className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                    onClick={() => setViewMode('list')}
                    title="List View"
                  >
                    <LayoutList size={18} />
                  </button>
                </div>

                {/* Sort Dropdown */}
                <div className="sort-dropdown-wrap">
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="sort-select"
                  >
                    <option value="default">Default sorting</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="latest">Sort by latest</option>
                    <option value="price-low">Sort by price: low to high</option>
                    <option value="price-high">Sort by price: high to low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product Grid / List */}
            {filteredProducts.length > 0 ? (
              <div className={`products-container ${viewMode === 'list' ? 'list-layout' : 'grid-layout'}`}>
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="product-card"
                    onClick={() => onSelectProduct(product.slug)}
                  >
                    {/* Badge */}
                    {product.isNew && <span className="product-badge new-badge">NEW</span>}

                    {/* Image Area */}
                    <div className="product-image-box">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="product-thumb"
                        onError={(e) => {
                          e.target.src = '/images/s22.png';
                        }}
                      />
                      <div className="product-overlay">
                        <button 
                          className="quick-view-btn" 
                          title="Quick View"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectProduct(product.slug);
                          }}
                        >
                          <Eye size={18} />
                          <span>View Product</span>
                        </button>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="product-info-box">
                      <div className="product-meta-row">
                        <span className="product-brand-tag">{product.brand}</span>
                        <span className="product-sku-tag">{product.sku}</span>
                      </div>

                      <h3 className="product-card-title">
                        <a 
                          href={`/product/${product.slug}/`}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onSelectProduct(product.slug);
                          }}
                        >
                          {product.name}
                        </a>
                      </h3>

                      {/* Rating Stars */}
                      <div className="product-rating-row">
                        <div className="stars-wrap">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={13} 
                              className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'} 
                            />
                          ))}
                        </div>
                        <span className="review-count">({product.reviewCount})</span>
                      </div>

                      {/* Short excerpt (especially in list view) */}
                      <p className="product-short-snippet">
                        {product.shortDescription}
                      </p>

                      {/* Price & Action Row */}
                      <div className="product-footer-row">
                        <div className="price-block">
                          <span className="currency-price">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                          {product.regularPrice > product.price && (
                            <span className="regular-strike-price">
                              ₹{product.regularPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>

                        <button 
                          className="product-action-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectProduct(product.slug);
                          }}
                        >
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-products-box">
                <h3>No products found</h3>
                <p>We couldn't find any products matching your current filter criteria.</p>
                <button className="reset-filter-btn primary" onClick={handleResetFilters}>
                  <RotateCcw size={14} />
                  <span>Clear Filters</span>
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
