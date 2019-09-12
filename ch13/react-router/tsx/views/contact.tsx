import React from 'react';

const Contact: React.FC = () => (
  <div>
    <h3>Contact Us</h3>
    <input type="text"
      placeholder="Your email"
      className="form-control" />
    <textarea
      placeholder="Your message"
      className="form-control" />
  </div>
);

export default Contact;