import React, { Component } from "react";
import "./ContactForm.scss";
import { NavLink } from 'react-router-dom';

interface AppState {
  name: string,
  number: string
}

interface AppProps {
  addContact(state: AppState): void; 
}

export default class ContactForm extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = {
        name: '',
        number: ''
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // modify to reference change event type declaration
    // this.setState({ [e.target.name as keyof AppState]: e.target.value})
  }

  captureContact = (e: any): void  => {
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