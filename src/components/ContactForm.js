import React, { useState } from 'react';

const ContactForm = ({ addContact }) => {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  // Handle form submit and pass the contact data to the parent component
  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(contact); // Add contact to the parent component
    setContact({  // Reset form fields after submission
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      jobTitle: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={contact.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="lastName"
        value={contact.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        type="email"
        name="email"
        value={contact.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="phone"
        value={contact.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
      />
      <input
        type="text"
        name="company"
        value={contact.company}
        onChange={handleChange}
        placeholder="Company"
        required
      />
      <input
        type="text"
        name="jobTitle"
        value={contact.jobTitle}
        onChange={handleChange}
        placeholder="Job Title"
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;

