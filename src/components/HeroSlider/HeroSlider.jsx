import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ChevronRight as ArrowRight } from 'lucide-react';
import './HeroSlider.css';

const SLIDES = [
  {
    id: 1,
    bgImage: '/images/banner-1.jpg.jpeg',
    subtitle: "INDIA'S LEADING",
    title: 'SUPER STEEL',
    titleColor: '#ea2a2a',
    secondaryTitle: 'POWER TOOL BRAND',
    secondaryColor: '#ffb700',
    align: 'left',
    btnText: 'Shop now',
    link: '/shop/'
  },
  {
    id: 2,
    bgImage: '/images/slide2.jpg',
    subtitle: 'QUALITY ALWAYS MATTERS',
    title: 'WHY SUPER STEEL?',
    titleColor: '#ffffff',
    secondaryTitle: 'UNMATCHED QUALITY',
    secondaryColor: '#ffb700',
    align: 'right',
    btnText: 'Shop now',
    link: '/shop/'
  },
  {
    id: 3,
    bgImage: '/images/slide1.jpg',
    subtitle: "IT'S ALL THE POWER YOU NEED",
    title: 'SUPER STEEL',
    titleColor: '#ffffff',
    secondaryTitle: 'POWER TOOLS COLLECTION',
    secondaryColor: '#ffb700',
    align: 'left',
    btnText: 'Shop now',
    link: '/shop/'
  }
];

export default function HeroSlider({ onNavigateShop }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <section 
      className="hero-slider-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero Carousel"
    >
      <div className="slider-wrapper">
        {SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div 
              key={slide.id} 
              className={`slide-item ${isActive ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="slide-overlay"></div>
              <div className="container slide-content-container">
                <div className={`slide-content align-${slide.align}`}>
                  <span className="slide-subtitle">{slide.subtitle}</span>
                  <h2 
                    className="slide-main-title"
                    style={{ color: slide.titleColor }}
                  >
                    {slide.title}
                  </h2>
                  <h3 
                    className="slide-secondary-title"
                    style={{ color: slide.secondaryColor }}
                  >
                    {slide.secondaryTitle}
                  </h3>
                  <div className="slide-btn-wrapper">
                    <a 
                      href={slide.link} 
                      className="slide-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        if (onNavigateShop) onNavigateShop();
                      }}
                    >
                      <span>{slide.btnText}</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button 
        className="slider-arrow prev" 
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button 
        className="slider-arrow next" 
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Pagination Dots */}
      <div className="slider-dots">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
