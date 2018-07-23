import React from 'react';

import './contact.css';

export default function Contact(props) {
  const contacts = props.contacts.map((contact, index) => (
    <li key={index}>
      <div>{contact.name}</div>
      <img src={contct.photo} />
      <div>{contact.address}</div>
    </li>
  ));

}