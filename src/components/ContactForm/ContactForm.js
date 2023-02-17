import { nanoid } from 'nanoid';
import React, { Component } from "react";
import './ContactForm.css';


class ContactForm extends Component{

  state = {
  name: '',
  number: '',
  }
  idInputName = nanoid();
  idInputTel= nanoid();
  
  handleInputChange = event => {
    console.log(event.currentTarget);
    console.log(event.currentTarget.value);
    this.setState(
      { name: event.currentTarget.value}
  
    )
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    console.log('submit')

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      number: '',
      name: '',
      })
  }


  render() {
     const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form">

        <label htmlFor={this.idInputName}>
        Name
          <input
        onChange={this.handleInputChange}
        value={name}
        id={this.idInputName}
        className="input"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
        </label>

        <label htmlFor={this.idInputTel}>
          Number
          <input
      value={number}
      id={this.idInputTel}
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      />
        </label>
        <button type="submit" className="btn_add">Add contact</button>
      </form>
      
     
    )
  }
}
 

export default ContactForm;