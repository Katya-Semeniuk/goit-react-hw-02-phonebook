import React from "react";
import './ContactList.css';
// import PropTypes from 'prop-types';


const ContactList = ({ arrayContact, onDeleteContact }) => {
    
 return (
    <ul className="list">
         { arrayContact.map(({id, name, number})=>(
         <li key={id} className="item">
            <div className="cover">
              <p className="name">{name}: </p>
                     <p className="tel">{number}</p>
                     <button onClick={()=> onDeleteContact(id)} className="btn_delete">Delete</button>  
            </div>   
          </li>
         ))}
           
     </ul>
        )
}


// ContactList.propTypes = {
//     arrayContact:PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.number.isRequired,
    
//   })),
// }

export default ContactList;