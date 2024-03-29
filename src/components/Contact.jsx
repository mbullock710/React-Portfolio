import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Please fill in all fields.');
    } else if (!isValidEmail(formData.email)) {
      setFormError('Invalid email address.');
    } else {
      console.log('Form submitted:', formData);
      setFormError('');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
        {formError && <p className="error">{formError}</p>}
      </form>
    </section>
  );
};

export default Contact;
