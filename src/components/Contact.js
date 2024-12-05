import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace placeholders with your EmailJS credentials
    const SERVICE_ID = 'service_jesvin27'; // Your EmailJS Service ID
    const TEMPLATE_ID = 'template_10'; // Your EmailJS Template ID
    const PUBLIC_KEY = 'cfOTRv3FU6A_iau8B'; // Your EmailJS Public Key

    // Send the email using emailjs
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response.status, response.text);
          setStatusMessage('Message sent successfully!');
          setFormData({ name: '', email: '', phone: '', message: '' }); // Clear the form
        },
        (error) => {
          console.error('Email sending error:', error);
          setStatusMessage('Failed to send the message. Please try again later.');
        }
      )
      .catch((error) => {
        // This will catch any other errors that might occur during the send operation
        console.error('Email sending error:', error);
        setStatusMessage('Failed to send the message. Please try again later.');
      });
  };

  return (
    <section className="contact-section py-5" id="contact" style={{ backgroundColor: '#5b7462' }}>
      <div className="container">
        <h1 style={{ textAlign: 'center', color: '#fff' }}>CONTACT ME</h1>
        <div className="row">
          <div className="col-md-6 mb-4">
            <h2 className="mb-3" style={{ color: '#fff' }}>Hi! I'm a passionate developer...</h2>
            <p style={{ color: '#fff' }}>
              <i className="fas fa-map-marker-alt"></i> Fathima Nagar, <br />
              Eraviputhoor Kadai, Kattathurai, <br />
              Kanniyakumari, Tamil Nadu, PIN: 69158 <br />
              <i className="fas fa-phone-alt"></i> +91 9751867307 <br />
              <i className="fas fa-envelope"></i>{' '}
              <a href="mailto:jesvinljose39@gmail.com" style={{ color: '#fff' }}>jesvinljose39@gmail.com</a>
            </p>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="name" style={{ color: '#fff' }}>Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email" style={{ color: '#fff' }}>Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="phone" style={{ color: '#fff' }}>Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="message" style={{ color: '#fff' }}>Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block" style={{ width: '100%' }}>
                Send
              </button>
            </form>
            {statusMessage && (
              <div className="mt-3 alert alert-info text-center" role="alert">
                {statusMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
