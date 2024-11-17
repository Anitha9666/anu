import React from 'react';

const ContactTable = ({ contacts }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Company</th>git
          <th>Job Title</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={index}>
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>{contact.company}</td>
            <td>{contact.jobTitle}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
