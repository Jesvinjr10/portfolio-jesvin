// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section py-5" id="contact"style={{ backgroundColor: '#5b7462' }}>
    <div className="container">
      <h1 style={{textAlign:'center'}}>CONTACT ME </h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h2 className="mb-3">Hi! I'm a passionate developer...</h2>
          <p>
            <i className="fas fa-map-marker-alt"></i> Fathima Nagar, <br />
            Eraviputhoor Kadai, Kattathurai, <br />
            Kanniyakumari, Tamil Nadu, PIN: 69158 <br />
            <i className="fas fa-phone-alt"></i> +91 9751867307 <br />
            <i className="fas fa-envelope"></i> <a href="mailto:jesvinljose39@gmail.com">jesvinljose39@gmail.com</a>
          </p>
        </div>
        <div className="col-md-6">
          <form>
            <div className="form-group mb-3">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" className="form-control" id="phone" placeholder="Enter your phone number" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block" style={{ width: '100%' }}><a href='mailto:jesvinljose10@gmail.com'>Send</a></button>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Contact;
