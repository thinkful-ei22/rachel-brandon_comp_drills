import React from 'react';

import './contact.css';

export default function Contact(props) {
  const contacts = props.contacts.map((contact, index) => (
    <li className="contact" key={index}>
      <div className="contact-name">{contact.name}</div>
      <img className="contact-photo" src={contact.photo} />
      <div className="contact-address">{contact.address}</div>
    </li>
  ));
return (<ul>{contacts}</ul>);
}