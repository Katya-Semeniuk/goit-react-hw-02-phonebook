
import React from "react";
import  ContactForm  from "./ContactForm/ContactForm";
import  ContactList  from './ContactList/ContactList';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >  
        <ContactForm/>
        <h2>Contacts</h2>
        <ContactList/>
    </div>
  );
};

export default App;



// class App extends Component{
//   //  static defaultProps = {};
//   // static propTypes = {};
//   state = {
//   contacts: [],
//   filter: ''
//   }
  
//   formSubmitHandler = data => {
//     console.log(data)
//   }
//   render() {
//     return (
//       <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//       >
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.formSubmitHandler} />
//         <h2>Contacts</h2>
//         <ContactList/>
//     </div>)
//   }
// } 

