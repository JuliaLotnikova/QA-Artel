import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Ваш надежный партнер в тестировании</h1>
        <p>Мы предоставляем широкий спектр услуг по тестированию веб-сайтов, мобильных приложений и других digital-продуктов.</p>
        <button>Связаться с нами</button>
      </div>
      <div className="hero-image">
        {/* Здесь может быть изображение или видео */}
      </div>
    </section>
  );
};

export default HeroSection;
