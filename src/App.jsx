import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import HeroSlider from './components/HeroSlider/HeroSlider';
import PromoCards from './components/PromoCards/PromoCards';
import AboutUs from './pages/AboutUs/AboutUs';
import Shop from './pages/Shop/Shop';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ContactUs from './pages/ContactUs/ContactUs';
import TermsAndConditions from './pages/Legal/TermsAndConditions';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import Sitemap from './pages/Legal/Sitemap';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [productSlug, setProductSlug] = useState('75cc-gasoline-chainsaw');
  const [shopCategory, setShopCategory] = useState('all');
  const [shopBrand, setShopBrand] = useState('all');

  // Handle clean HTML5 URL routing on initial load and browser back/forward (popstate)
  useEffect(() => {
    const parseLocation = () => {
      let pathname = window.location.pathname || '/';
      const hash = window.location.hash || '';

      // Clean up any legacy hash (e.g. #home -> /, #contact-us -> /contact-us/)
      if (hash) {
        const cleanHash = hash.replace(/^#\/?/, '').trim();
        if (cleanHash === 'home' || cleanHash === '') {
          pathname = '/';
        } else {
          pathname = `/${cleanHash}/`;
        }
        window.history.replaceState({}, '', pathname);
      }

      const normalized = pathname.toLowerCase().replace(/\/+$/, '') || '/';

      if (normalized.startsWith('/product/')) {
        const slug = normalized.replace('/product/', '').trim();
        if (slug) {
          setProductSlug(slug);
          setCurrentPage('product');
          return;
        }
      }

      // Read query parameters if any (e.g. /shop/?brand=Super%20Steel)
      const searchParams = new URLSearchParams(window.location.search);
      const qBrand = searchParams.get('brand');
      const qCat = searchParams.get('category');
      if (qBrand) setShopBrand(qBrand);
      if (qCat) setShopCategory(qCat);

      if (normalized === '/shop' || normalized.startsWith('/shop')) {
        setCurrentPage('shop');
        return;
      }

      if (normalized === '/contact-us' || normalized === '/contact') {
        setCurrentPage('contact');
        return;
      }

      if (normalized === '/terms-and-conditions' || normalized === '/terms') {
        setCurrentPage('terms');
        return;
      }

      if (normalized === '/privacy-policy' || normalized === '/privacy') {
        setCurrentPage('privacy');
        return;
      }

      if (normalized === '/sitemap') {
        setCurrentPage('sitemap');
        return;
      }

      if (normalized === '/about-us' || normalized === '/about') {
        setCurrentPage('about');
        return;
      }

      setCurrentPage('home');
    };

    parseLocation();
    window.addEventListener('popstate', parseLocation);
    return () => window.removeEventListener('popstate', parseLocation);
  }, []);

  // Smooth scroll to top whenever currentPage changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [currentPage]);

  const navigateTo = (page, params = {}) => {
    setCurrentPage(page);

    let targetPath = '/';
    let queryParams = '';

    if (page === 'shop') {
      targetPath = '/shop/';
      const sp = new URLSearchParams();
      if (params.category && params.category !== 'all') {
        setShopCategory(params.category);
        sp.set('category', params.category);
      }
      if (params.brand && params.brand !== 'all') {
        setShopBrand(params.brand);
        sp.set('brand', params.brand);
      }
      const qs = sp.toString();
      if (qs) queryParams = `?${qs}`;
    } else if (page === 'product') {
      if (params.slug) {
        setProductSlug(params.slug);
        targetPath = `/product/${params.slug}/`;
      } else {
        targetPath = `/product/${productSlug}/`;
      }
    } else if (page === 'contact') {
      targetPath = '/contact-us/';
    } else if (page === 'about') {
      targetPath = '/about-us/';
    } else if (page === 'terms') {
      targetPath = '/terms-and-conditions/';
    } else if (page === 'privacy') {
      targetPath = '/privacy-policy/';
    } else if (page === 'sitemap') {
      targetPath = '/sitemap/';
    } else {
      targetPath = '/';
    }

    const fullUrl = `${targetPath}${queryParams}`;
    if (window.location.pathname + window.location.search !== fullUrl) {
      window.history.pushState({}, '', fullUrl);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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

      <main className="main-content" key={currentPage}>
        {currentPage === 'home' && (
          <>
            <HeroSlider onNavigateShop={() => navigateTo('shop')} />
            <PromoCards onSelectProduct={handleSelectProduct} onNavigateShop={() => navigateTo('shop')} />
          </>
        )}

        {currentPage === 'about' && (
          <AboutUs 
            onNavigateHome={() => navigateTo('home')} 
            onNavigateShop={(params) => navigateTo('shop', params)}
          />
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

        {currentPage === 'contact' && (
          <ContactUs onNavigateHome={() => navigateTo('home')} />
        )}

        {currentPage === 'terms' && (
          <TermsAndConditions 
            onNavigateHome={() => navigateTo('home')} 
            onNavigateContact={() => navigateTo('contact')}
          />
        )}

        {currentPage === 'privacy' && (
          <PrivacyPolicy 
            onNavigateHome={() => navigateTo('home')} 
            onNavigateContact={() => navigateTo('contact')}
          />
        )}

        {currentPage === 'sitemap' && (
          <Sitemap 
            onNavigateHome={() => navigateTo('home')}
            onNavigateAbout={() => navigateTo('about')}
            onNavigateShop={(params) => navigateTo('shop', params)}
            onNavigateContact={() => navigateTo('contact')}
            onNavigateTerms={() => navigateTo('terms')}
            onNavigatePrivacy={() => navigateTo('privacy')}
            onSelectProduct={handleSelectProduct}
          />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
