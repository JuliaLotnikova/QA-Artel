import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь вы можете добавить свою логику для обработки отправки формы
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Сбросить поля формы
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="contact-section">
      <h2>Связаться с нами</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Сообщение:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Отправить сообщение</button>
      </form>
    </section>
  );
};

export default ContactForm;
