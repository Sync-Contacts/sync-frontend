import React, { Component } from "react";
import "./ContactForm.scss";
import { NavLink } from 'react-router-dom';

export default class ContactForm extends Component {
  constructor() {
      super()
      this.state = {
          name: '',
          number: ''
      }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  captureContact = e => {
    e.preventDefault();
    this.props.addContact(this.state);
  }
  
  render() {
    return (
      <form className="contact-form">
        <h1>Add a contact.</h1>
        <h3>What have you been chatting about?</h3>
        <section className="input-cont">
          <input
            type="text"
            name="name"
            placeholder="Contact name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="number"
            placeholder="Contact number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </section>
        <NavLink to='/contacts' className='add-contact'>Add Contact</NavLink>
      </form>
    );
  } 
}
// onClick = { this.captureContact }