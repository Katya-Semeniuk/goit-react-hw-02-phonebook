
import React, {Component} from "react";
import  ContactForm  from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';

class App extends Component{
  state = {
  contacts: [],
  filter: ''
  }
  
  addContact = ({ name, number }) => {
    const contactEl = {
      id : nanoid(),
      name,
      number,
    }
    this.setState(({contacts}) => ({
  contacts: [...contacts, contactEl]
}))
  }

  render() {
    return (
      <div className="container"
        style={{
        height: '100vh',
          display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactList arrayContact={this.state.contacts} />
    </div>)
  }
}

export default App;