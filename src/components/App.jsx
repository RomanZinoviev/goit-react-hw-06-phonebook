import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
export function App() {
  // const [contacts, setContacts] = useState(contactsFromLs());
  // const [filter, setFilter] = useState('');
  
  const contacts = useSelector(state => state.contacts.contacts);  
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  // const submitHundler = obj => {
  //   setContacts([...contacts, obj]);
  // };
  // const hundleChange = event => {
  //   const { value } = event.target;
  //   setFilter(value);
  // };
  // const deleteForList = id => {
  //   setContacts(contacts.filter(contact => contact.id !== id));
  // };  
  return (
    <div>
      <h1
        style={{
          fontSize: 60,
          color: 'green',
        }}
      >
        Phonebook
      </h1>
      <ContactForm />
      <h2
        style={{
          fontSize: 45,
        }}
      >
        Contacts
      </h2>
      <Filter />
      <ContactList />
    </div>
  );
}
