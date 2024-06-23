// Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="#">Тестовая Компания</a>
      </div>
      <nav>
        <ul>
          <li><a href="#hero-section">Главная</a></li>
          <li><a href="#services-section">Услуги</a></li>
          <li><a href="#cases-section">Кейсы</a></li>
          <li><a href="#reviews-section">Отзывы</a></li>
          <li><a href="#contact-section">Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
