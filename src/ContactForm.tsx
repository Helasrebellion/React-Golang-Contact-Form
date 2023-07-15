import React, { useState } from 'react';
import './style.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showModal, setShowModal] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add email address validation logic here
    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address!');
      return;
    }

    // Process the form data and send email (implement your email sending logic here)
    console.log(formData);
    setShowModal(false);
    document.body.style.overflow = 'auto'; // Reset the body overflow to auto
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto'; // Reset the body overflow to auto
  };

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Hide the page scroll when modal is open
  };

  return (
    <div>
      <button className="contact-button" onClick={openModal}>
        Contact Me!
      </button>

      {showModal && (
        <div className="contact-form">
          <div className="modal">
            <button className="close-btn-inside" onClick={closeModal}>
              X
            </button>
            <h3 className="contact-heading">Contact Me Today!</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="8"
                  placeholder="Type your message here"
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit" className="send-button">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
