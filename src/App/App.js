import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import ContactForm from "../ContactForm/ContactForm";
import ContactDash from '../ContactDash/ContactDash';
import { Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    }
  }

  addContact(contact) {
    this.setState({contacts: [...this.state.contacts, contact]})
  }

  render() {
    return (
      <section className="app">
        <Route exact path="/" render={() => <ContactForm addContact={this.addContact} />}
        />
        <Route path="/contacts" render={() => <Nav />} />
        <Route exact path="/contacts" render={() => <ContactDash addContact={this.addContact} />} />
      </section>
    );
  }
}