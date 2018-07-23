import React from 'react';

import Contact from './contact';


export default class AddressBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [
        {
          header: 'Address Book'
        }
      ]
    };
  };

  render() {

    return (
      <h1>{header}</h1>
      <ul className="">
        {contacts}
      </ul>
    );
  }
};

