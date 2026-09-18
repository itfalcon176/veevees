import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import HeroSlider from './components/HeroSlider/HeroSlider';
import PromoCards from './components/PromoCards/PromoCards';
import AboutUs from './pages/AboutUs/AboutUs';
import Shop from './pages/Shop/Shop';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [productSlug, setProductSlug] = useState('75cc-gasoline-chainsaw');
  const [shopCategory, setShopCategory] = useState('all');
  const [shopBrand, setShopBrand] = useState('all');

  // Handle hash on initial load and popstate
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash || '';
      
      if (hash.startsWith('#product/')) {
        const slug = hash.replace('#product/', '').trim();
        if (slug) {
          setProductSlug(slug);
          setCurrentPage('product');
          return;
        }
      }

      if (hash.startsWith('#brand-')) {
        const brandSlug = hash.replace('#brand-', '').trim();
        setShopBrand(brandSlug);
        setShopCategory('all');
        setCurrentPage('shop');
        return;
      }

      if (hash.startsWith('#category-')) {
        const catSlug = hash.replace('#category-', '').trim();
        setShopCategory(catSlug);
        setShopBrand('all');
        setCurrentPage('shop');
        return;
      }

      if (hash.includes('shop')) {
        setCurrentPage('shop');
        return;
      }

      if (hash.includes('about')) {
        setCurrentPage('about');
        return;
      }

      setCurrentPage('home');
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const navigateTo = (page, params = {}) => {
    setCurrentPage(page);

    if (page === 'shop') {
      if (params.category) setShopCategory(params.category);
      if (params.brand) setShopBrand(params.brand);
      if (params.query) {
        // Query handled in shop
      }
      window.location.hash = 'shop';
    } else if (page === 'product') {
      if (params.slug) {
        setProductSlug(params.slug);
        window.location.hash = `product/${params.slug}`;
      }
    } else if (page === 'about') {
      window.location.hash = 'about-us';
    } else {
      window.location.hash = 'home';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (slug) => {
    navigateTo('product', { slug });
  };

  return (
    <div className="veevees-app">
      <Header 
        currentPage={currentPage} 
        onNavigate={navigateTo} 
      />

      <main className="main-content">
        {currentPage === 'home' && (
          <>
            <HeroSlider onNavigateShop={() => navigateTo('shop')} />
            <PromoCards onSelectProduct={handleSelectProduct} onNavigateShop={() => navigateTo('shop')} />
          </>
        )}

        {currentPage === 'about' && (
          <AboutUs onNavigateHome={() => navigateTo('home')} />
        )}

        {currentPage === 'shop' && (
          <Shop 
            initialCategory={shopCategory}
            initialBrand={shopBrand}
            onSelectProduct={handleSelectProduct}
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {currentPage === 'product' && (
          <ProductDetail 
            productSlug={productSlug}
            onNavigateShop={() => navigateTo('shop')}
            onNavigateHome={() => navigateTo('home')}
            onSelectProduct={handleSelectProduct}
          />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
