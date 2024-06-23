import React from 'react';

const ReviewsSection = () => {
  return (
    <section className="reviews-section">
      <h2>Что говорят наши клиенты</h2>
      <div className="reviews-container">
        <div className="review-card">
          <p>"Команда этого агентства действительно исключительная. Они выполнили все, что нам было нужно, и даже превзошли наши ожидания."</p>
          <div className="reviewer-info">
            <img src="reviewer1.jpg" alt="Reviewer 1" />
            <div>
              <h4>Иван Петров</h4>
              <p>Генеральный директор, ABC Company</p>
            </div>
          </div>
        </div>
        <div className="review-card">
        <p>"Команда этого агентства действительно исключительная. Они выполнили все, что нам было нужно, и даже превзошли наши ожидания."</p>
          <div className="reviewer-info">
            <img src="reviewer1.jpg" alt="Reviewer 1" />
            <div>
              <h4>Иван Петров</h4>
              <p>Генеральный директор, ABC Company</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
