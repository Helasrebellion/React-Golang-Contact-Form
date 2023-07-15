import React, { useState } from 'react';
import './style.css';
import ContactForm from './ContactForm';

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleContactButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Crafting Meaningful Experiences Through Technology!</h1>
        <h2>
          Whether you're a business seeking innovation or an employer looking
          to hire, let's collaborate to bring your vision to life. Get in
          touch with me today!
        </h2>
        {showForm ? (
          <ContactForm />
        ) : (
          <button className="contact-button" onClick={handleContactButtonClick}>
            Contact Me!
          </button>
        )}
      </header>
    </div>
  );
}

export default App;
