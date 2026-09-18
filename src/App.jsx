import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import HeroSlider from './components/HeroSlider/HeroSlider';
import PromoCards from './components/PromoCards/PromoCards';
import AboutUs from './pages/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.hash.includes('about') ? 'about' : 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.includes('about')) {
        setCurrentPage('about');
      } else if (window.location.hash.includes('home') || window.location.hash === '') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.location.hash = page === 'about' ? 'about-us' : 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="veevees-app">
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      <main className="main-content">
        {currentPage === 'home' ? (
          <>
            <HeroSlider />
            <PromoCards />
          </>
        ) : (
          <AboutUs onNavigateHome={() => navigateTo('home')} />
        )}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
