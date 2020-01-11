import React, { Component } from "react";
import Layout from "../components/layout";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      company: "",
      name: "",
      email: "",
      message: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  resetForm() {
    this.setState({ company: "", name: "", email: "", message: "" });
  }
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    return (
      <Layout>
        <div className='App'>
          <form id='contact-form' onSubmit={this.handleSubmit.bind(this)}>
            <div className='form-group'>
              <label htmlFor='compnay'>Company</label>
              <input
                type='text'
                className='form-control'
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                className='form-control'
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>Email address</label>
              <input
                type='email'
                className='form-control'
                aria-describedby='emailHelp'
                value={this.state.email}
                onChange={this.onEmailChange.bind(this)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea
                className='form-control'
                rows='5'
                value={this.state.message}
                onChange={this.onMessageChange.bind(this)}
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </Layout>
    );
  }
}

export default Contact;
