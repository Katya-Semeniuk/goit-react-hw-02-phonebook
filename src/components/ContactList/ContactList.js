import React from "react";
import './ContactList.css';


const ContactList = ({ arrayContact }) => {
    
    return (
        <ul className="list">
           { arrayContact.map(({id, name, number})=>(
               <li key={id} className="item">
                   <div className="cover">
                <p className="name">{name}: </p>
                <p className="tel">{ number}</p>
                   </div>
                
             </li>
            ))}
           
            </ul>
        )
}


export default ContactList;