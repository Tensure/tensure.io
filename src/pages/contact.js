import React, { Component } from "react";
import Layout from "../components/layout";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      company: "",
      name: "",
      phone: "",
      email: "",
      message: ""
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.resetForm();
    // fetch("http://localhost:3002/send", {
    //   method: "POST",
    //   body: JSON.stringify(this.state),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   }
    // })
    //   .then(response => response.json())
    //   .then(response => {
    //     if (response.status === "success") {
    //       alert("Message Sent.");
    //       this.resetForm();
    //     } else if (response.status === "fail") {
    //       alert("Message failed to send.");
    //     }
    //   });
  };

  resetForm() {
    this.setState({
      company: "",
      name: "",
      phone: "",
      email: "",
      message: ""
    });
  }

  render() {
    const style = {
      padding: "30px",
      marginTop: "50px",
      width: "100%"
    };

    return (
      <Layout>
        <div className='field' style={style}>
          <div>
            <p className='is-size-4'>Get in Touch</p>
            <p>
              In Tensure Consulting, our experienced consultants and designers
              strive to achieve technology innovations and to inspire next
              generation developers.
            </p>
          </div>
          <hr />
          <form
            id='contact-form'
            onSubmit={this.handleSubmit}
            method='post'
            action='#'
          >
            <div className='field'>
              <label htmlFor='compnay'>Company</label>
              <input
                type='text'
                className='input is-success'
                name='company'
                value={this.state.company}
                onChange={this.handleInputChange}
              />
            </div>
            <div className='field'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                className='input is-success'
                name='name'
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </div>
            <div className='field'>
              <label htmlFor='phone'>Phone</label>
              <input
                type='text'
                className='input is-success'
                name='phone'
                value={this.state.phone}
                onChange={this.handleInputChange}
              />
            </div>
            <div className='field'>
              <label htmlFor='exampleInputEmail1'>Email address</label>
              <input
                type='email'
                className='input is-success'
                aria-describedby='emailHelp'
                name='email'
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </div>
            <div className='field'>
              <label htmlFor='message'>Message</label>
              <div className='control'>
                <textarea
                  className='textarea'
                  placeholder='Please describe'
                  name='message'
                  value={this.state.message}
                  onChange={this.handleInputChange}
                ></textarea>
              </div>
            </div>
            <button type='submit' className='button is-primary'>
              Submit
            </button>
          </form>
        </div>
      </Layout>
    );
  }
}

export default Contact;
