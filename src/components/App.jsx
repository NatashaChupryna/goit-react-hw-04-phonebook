import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { StyledApp, Title } from './App.styled';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 9, name: 'Brad Pitt', number: '234-334-345' },
      ]
  );

  const [filter, setFilter] = useState('');

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onFilterChange = event => {
    setFilter(event.target.value);
  };

  const addContact = (name, number) => {
    if (contacts.find(
        contact => contact.name === name && contact.number === number)) {
      return toast(
        `Uuum, the contact with name ${name} and phone number ${number} is already in the list`,
        {icon: '😅', });}
    setContacts([...contacts, { id: nanoid(), name, number }]);
  };

  const deleteContact = id => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== id);
    });
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <StyledApp>
      <Toaster />
      <Title>Phonebook</Title>

      <ContactForm onSubmit={addContact}></ContactForm>

      <Title>Contacts</Title>

      <Filter name={filter} onFilterChange={onFilterChange}></Filter>

      <ContactList
        contacts={filterContacts()}
        onDelete={deleteContact}
      ></ContactList>
    </StyledApp>
  );
};
