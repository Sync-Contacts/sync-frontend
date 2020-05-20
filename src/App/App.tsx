import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import ContactForm from "../ContactForm/ContactForm";
import ContactDash from '../ContactDash/ContactDash';
import ContactDetails from '../ContactDetails/ContactDetails';
import { Route } from 'react-router-dom';

// interface AppProps {
//   addContact(): void; 
// }

interface AppState {
  contacts: object[];
}

export default class App extends Component<null, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    }
  }

  addContact(contact: object): void {
    this.setState({contacts: [...this.state.contacts, contact]})
  }

  render() {
    return (
      <section className="app">
        <Route exact path="/contactForm" render={() => <ContactForm addContact={this.addContact} />}
        />
        <Route path="/contactDetails" render={() => <ContactDetails />} />
        <Route exact path="/" render={() => 
          <section className="app">
          <Nav />
          <ContactDash addContact={this.addContact} />
          </section>} />
      </section>
    );
  }
}