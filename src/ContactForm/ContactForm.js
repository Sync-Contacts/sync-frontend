import React, { Component } from "react";
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
  
  render() {
    return (
      <form className="ContactForm">
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
      </form>
    );
  } 
}