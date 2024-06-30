import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useState, useEffect} from "react"
import css from '../App/App.module.css'


export default function App() {
  const initialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(() => {
    const storage = window.localStorage.getItem("saved-contact");
    if (storage !== null) {
      return JSON.parse(storage)
    }
    return initialState
  }

    
  )
  const addContacts = (newContacts) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContacts]
    })
  }
  
  useEffect(() => {
    window.localStorage.setItem("saved-contact", JSON.stringify(contacts))
  },[contacts])

    const [filter, setFilter] = useState("")

  const visibilyContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))

  const deleteContacts = (contactId) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== contactId))
  }
  
  return(
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContacts} /> 
      <SearchBox value={ filter} onFilter={setFilter} /> 
      <ContactList contacts={visibilyContacts} onDeleteContact={deleteContacts } />
    </div>)
}