import React, { useState, useMemo } from 'react';
import { 
  ChevronRight, 
  Star, 
  Check, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Truck, 
  RotateCcw,
  ArrowLeft
} from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../../data/productsData';
import './ProductDetail.css';

export default function ProductDetail({ 
  productSlug, 
  onNavigateShop, 
  onNavigateHome,
  onSelectProduct 
}) {
  const product = useMemo(() => getProductBySlug(productSlug), [productSlug]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [reviewForm, setReviewForm] = useState({ name: '', rating: 5, comment: '' });
  const [reviewsList, setReviewsList] = useState([
    {
      id: 1,
      author: 'K. V. Mathew',
      date: 'January 14, 2026',
      rating: 5,
      content: 'Excellent 75cc engine power. Using it for rubber wood timber cutting in Kottayam. Starts easily on the first pull.'
    },
    {
      id: 2,
      author: 'Suresh Kumar',
      date: 'February 3, 2026',
      rating: 5,
      content: 'Super build quality and very low vibration. Genuine spare parts easily available from Veevees Trading.'
    }
  ]);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  if (!product) {
    return (
      <div className="product-not-found container">
        <h2>Product Not Found</h2>
        <p>The product you are looking for does not exist or has been removed.</p>
        <button className="back-shop-btn" onClick={onNavigateShop}>
          <ArrowLeft size={16} />
          <span>Back to Shop</span>
        </button>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product, 4);

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewForm.name.trim() || !reviewForm.comment.trim()) return;

    setReviewsList((prev) => [
      {
        id: Date.now(),
        author: reviewForm.name,
        date: 'Just now',
        rating: Number(reviewForm.rating),
        content: reviewForm.comment
      },
      ...prev
    ]);
    setReviewSubmitted(true);
    setReviewForm({ name: '', rating: 5, comment: '' });
  };

  const whatsappUrl = `https://wa.me/919745968558?text=${encodeURIComponent(
    `Hello VeeVees Trading, I am interested in wholesale inquiry for ${product.name} (SKU: ${product.sku}). Quantity: ${quantity}. Please share dealer quotation.`
  )}`;

  return (
    <div className="product-detail-page">
      {/* Breadcrumbs */}
      <div className="product-breadcrumbs-bar">
        <div className="container">
          <nav className="breadcrumbs-nav" aria-label="Breadcrumb">
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigateHome(); }}>
              Home
            </a>
            <ChevronRight size={14} className="breadcrumb-sep" />
            <a href="/shop/" onClick={(e) => { e.preventDefault(); onNavigateShop(); }}>
              Shop
            </a>
            <ChevronRight size={14} className="breadcrumb-sep" />
            <span className="breadcrumb-category">
              {product.categories[0]}
            </span>
            <ChevronRight size={14} className="breadcrumb-sep" />
            <span className="breadcrumb-current">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="container product-main-container">
        {/* Main Product Presentation */}
        <div className="product-hero-card">
          {/* ============ LEFT: IMAGE GALLERY ============ */}
          <div className="product-gallery-col">
            <div className="main-image-viewport">
              {product.isNew && <span className="product-badge new-badge">NEW</span>}
              <img 
                src={product.gallery[selectedImage] || product.image} 
                alt={product.name}
                className="main-product-img"
              />
            </div>

            {/* Thumbnail Strip */}
            {product.gallery.length > 1 && (
              <div className="thumbnail-strip">
                {product.gallery.map((imgUrl, idx) => (
                  <button 
                    key={idx}
                    className={`thumb-btn ${selectedImage === idx ? 'active' : ''}`}
                    onClick={() => setSelectedImage(idx)}
                  >
                    <img src={imgUrl} alt={`${product.name} view ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ============ RIGHT: PRODUCT SUMMARY & ACTIONS ============ */}
          <div className="product-summary-col">
            <div className="summary-brand-row">
              <span className="summary-brand-name">{product.brand}</span>
              <span className="summary-sku">SKU: <strong>{product.sku}</strong></span>
            </div>

            <h1 className="product-title">{product.name}</h1>

            {/* Rating Bar */}
            <div className="summary-rating-row">
              <div className="stars-wrap">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'} 
                  />
                ))}
              </div>
              <span className="rating-score">{product.rating.toFixed(1)}</span>
              <span className="reviews-link" onClick={() => setActiveTab('reviews')}>
                ({reviewsList.length} customer reviews)
              </span>
            </div>

            {/* Price Box */}
            <div className="summary-price-box">
              <span className="main-price">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.regularPrice > product.price && (
                <span className="original-price">
                  ₹{product.regularPrice.toLocaleString('en-IN')}
                </span>
              )}
              <span className="gst-label">(Incl. GST / Wholesale rates on bulk)</span>
            </div>

            {/* Stock status */}
            <div className="stock-status-badge in-stock">
              <Check size={16} />
              <span>In stock (Direct Warehouse Dispatch Available)</span>
            </div>

            {/* Short Description */}
            <div className="summary-short-desc">
              <p>{product.shortDescription}</p>
            </div>

            {/* Wholesale Action Area */}
            <div className="summary-actions-box">
              <div className="quantity-counter">
                <button 
                  type="button" 
                  onClick={() => handleQuantityChange(-1)}
                  className="qty-btn"
                >
                  -
                </button>
                <input 
                  type="number" 
                  value={quantity} 
                  readOnly 
                  className="qty-input" 
                />
                <button 
                  type="button" 
                  onClick={() => handleQuantityChange(1)}
                  className="qty-btn"
                >
                  +
                </button>
              </div>

              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="action-btn whatsapp-enquiry-btn"
              >
                <MessageSquare size={18} />
                <span>WhatsApp Enquiry</span>
              </a>

              <a 
                href="tel:+914842003045"
                className="action-btn call-enquiry-btn"
              >
                <Phone size={18} />
                <span>Call: +91 484 200 3045</span>
              </a>
            </div>

            {/* Benefits Row */}
            <div className="product-perks-row">
              <div className="perk-item">
                <Truck size={18} className="perk-icon" />
                <span>All-Kerala Fast Transport</span>
              </div>
              <div className="perk-item">
                <ShieldCheck size={18} className="perk-icon" />
                <span>100% Genuine Certified</span>
              </div>
              <div className="perk-item">
                <RotateCcw size={18} className="perk-icon" />
                <span>Spares & Service Support</span>
              </div>
            </div>

            {/* Meta Tags */}
            <div className="product-meta-details">
              <div className="meta-line">
                <span className="meta-label">Categories:</span>
                <span className="meta-value">
                  {product.categories.map((c, i) => (
                    <span key={i} className="meta-tag">
                      {c}{i < product.categories.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </span>
              </div>
              <div className="meta-line">
                <span className="meta-label">Brand:</span>
                <span className="meta-value font-bold">{product.brand}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ============ PRODUCT TABS SECTION ============ */}
        <div className="product-tabs-section">
          <div className="tabs-nav-bar">
            <button 
              className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button 
              className={`tab-btn ${activeTab === 'specifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('specifications')}
            >
              Additional Information
            </button>
            <button 
              className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews ({reviewsList.length})
            </button>
          </div>

          <div className="tab-content-panel">
            {/* TAB 1: DESCRIPTION */}
            {activeTab === 'description' && (
              <div className="tab-pane description-pane">
                <div 
                  dangerouslySetInnerHTML={{ __html: product.description }} 
                  className="prose-content"
                />
              </div>
            )}

            {/* TAB 2: SPECIFICATIONS */}
            {activeTab === 'specifications' && (
              <div className="tab-pane specs-pane">
                <table className="specs-table">
                  <tbody>
                    {product.specifications.map((spec, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'even-row' : 'odd-row'}>
                        <th className="spec-name">{spec.label}</th>
                        <td className="spec-val">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* TAB 3: REVIEWS */}
            {activeTab === 'reviews' && (
              <div className="tab-pane reviews-pane">
                <div className="reviews-container">
                  <div className="reviews-list-col">
                    <h3 className="section-subheading">
                      Customer Reviews for {product.name}
                    </h3>
                    {reviewsList.map((rev) => (
                      <div key={rev.id} className="review-item-card">
                        <div className="review-meta">
                          <strong className="review-author">{rev.author}</strong>
                          <span className="review-date">{rev.date}</span>
                        </div>
                        <div className="stars-wrap review-stars">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={14} 
                              className={i < rev.rating ? 'star-filled' : 'star-empty'} 
                            />
                          ))}
                        </div>
                        <p className="review-body">{rev.content}</p>
                      </div>
                    ))}
                  </div>

                  {/* Add Review Form */}
                  <div className="review-form-col">
                    <h3 className="section-subheading">Add a Review</h3>
                    {reviewSubmitted && (
                      <div className="review-success-msg">
                        Thank you! Your review has been added.
                      </div>
                    )}
                    <form onSubmit={handleReviewSubmit} className="add-review-form">
                      <div className="form-group">
                        <label>Your Rating *</label>
                        <select 
                          value={reviewForm.rating} 
                          onChange={(e) => setReviewForm({ ...reviewForm, rating: e.target.value })}
                          className="form-input"
                        >
                          <option value={5}>5 Stars - Excellent</option>
                          <option value={4}>4 Stars - Very Good</option>
                          <option value={3}>3 Stars - Average</option>
                          <option value={2}>2 Stars - Poor</option>
                          <option value={1}>1 Star - Very Poor</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Your Name *</label>
                        <input 
                          type="text" 
                          required
                          value={reviewForm.name} 
                          onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                          className="form-input"
                          placeholder="e.g. Rajesh Nair"
                        />
                      </div>

                      <div className="form-group">
                        <label>Your Review *</label>
                        <textarea 
                          rows={4}
                          required
                          value={reviewForm.comment} 
                          onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                          className="form-input"
                          placeholder="Write your experience with this tool..."
                        />
                      </div>

                      <button type="submit" className="submit-review-btn">
                        Submit Review
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ============ RELATED PRODUCTS ============ */}
        {relatedProducts.length > 0 && (
          <section className="related-products-section">
            <div className="section-heading-wrap">
              <h2 className="related-title">Related Products</h2>
              <span className="heading-line"></span>
            </div>

            <div className="related-grid">
              {relatedProducts.map((relProduct) => (
                <div 
                  key={relProduct.id} 
                  className="related-product-card"
                  onClick={() => onSelectProduct(relProduct.slug)}
                >
                  <div className="rel-image-box">
                    <img 
                      src={relProduct.image} 
                      alt={relProduct.name} 
                      onError={(e) => {
                        e.target.src = '/images/s22.png';
                      }}
                    />
                  </div>
                  <div className="rel-info-box">
                    <span className="rel-brand">{relProduct.brand}</span>
                    <h4 className="rel-name">{relProduct.name}</h4>
                    <div className="rel-price">₹{relProduct.price.toLocaleString('en-IN')}</div>
                    <button className="rel-view-btn">View Product</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
