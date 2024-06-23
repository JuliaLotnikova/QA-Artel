import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import CasesSection from './components/CasesSection';
import ReviewsSection from './components/ReviewsSection';
import ContactForm from './components/ContactForm';
import './styles.css';

const App = () => {
  return (
    <div>
  <Header />
  <HeroSection id="hero-section" />
  <ServicesSection id="services-section" />
  <CasesSection id="cases-section" />
  <ReviewsSection id="reviews-section" />
  <ContactForm id="contact-section" />
  {/* Другие компоненты */}
</div>
  );
};

export default App;
