import React from 'react';

const CasesSection = () => {
  return (
    <section className="cases-section">
      <h2>Наши кейсы</h2>
      <div className="cases-container">
        <div className="case-card">
          <img src="case1.jpg" alt="Case 1" />
          <h3>Протестировали 1</h3>
          <p>Много тестировпли и натестировали</p>
          <a href="#">Подробнее</a>
        </div>
        <div className="case-card">
          <img src="case2.jpg" alt="Case 2" />
          <h3>Протестировали 2</h3>
          <p>Много тестировпли и натестировали</p>
          <a href="#">Подробнее</a>
        </div>
        <div className="case-card">
          <img src="case3.jpg" alt="Case 3" />
          <h3>Протестировали 3</h3>
          <p>Много тестировпли и натестировали</p>
          <a href="#">Подробнее</a>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
