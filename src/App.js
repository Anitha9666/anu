import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactTable from './components/ContactTable';

const App = () => {
  const [contacts, setContacts] = useState([]);

  // Add new contact to the contacts state
  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <h1>Contact Management System</h1>
      <ContactForm addContact={addContact} />
      <ContactTable contacts={contacts} />
    </div>
  );
};

export default App;

