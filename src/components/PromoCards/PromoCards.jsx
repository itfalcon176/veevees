import React from 'react';
import './PromoCards.css';

const PROMO_CARDS = [
  {
    id: 'cutting-tools',
    badge: 'NEW!',
    badgeType: 'tag-red',
    titleLine1: 'CUTTING',
    titleLine2: 'TOOLS',
    image: '/images/s21-1.png',
    link: '#shop',
    btnText: 'Shop now',
    theme: 'yellow'
  },
  {
    id: 'drill-kit',
    subtitle: 'SUPER STEEL',
    badgeType: 'text-gold',
    titleLine1: 'DRILL',
    titleLine2: 'TOOL KIT',
    image: '/images/s22.png',
    link: '#shop',
    btnText: 'Shop now',
    theme: 'blue-grey'
  },
  {
    id: 'sander-machine',
    subtitle: 'SUPER STEEL',
    badgeType: 'text-white',
    titleLine1: 'SANDER',
    titleLine2: 'MACHINE',
    image: '/images/s23.png',
    link: '#shop',
    btnText: 'Shop now',
    theme: 'teal'
  }
];

export default function PromoCards() {
  return (
    <section className="promo-cards-section">
      <div className="container">
        <div className="promo-cards-grid">
          {PROMO_CARDS.map((card) => (
            <div key={card.id} className={`promo-card theme-${card.theme}`}>
              <div className="promo-card-content">
                {card.badge && (
                  <span className={`promo-badge ${card.badgeType}`}>
                    {card.badge}
                  </span>
                )}
                {card.subtitle && (
                  <span className={`promo-subtitle ${card.badgeType}`}>
                    {card.subtitle}
                  </span>
                )}
                <h3 className="promo-title">
                  <span>{card.titleLine1}</span>
                  <span>{card.titleLine2}</span>
                </h3>
                <div className="promo-action">
                  <a href={card.link} className="promo-btn">
                    {card.btnText}
                  </a>
                </div>
              </div>
              <div className="promo-card-image-wrapper">
                <img 
                  src={card.image} 
                  alt={`${card.titleLine1} ${card.titleLine2}`} 
                  className="promo-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
