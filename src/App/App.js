import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import ContactDash from '../ContactDash/ContactDash';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    }
  }

  render() {
    return (
      <section className="app">
        <Nav />
        <ContactDash />
      </section>
    );
  }
}