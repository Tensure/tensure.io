import React, { Component } from "react";
// import { withFirebase } from "../components/FirebaseContext";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, company, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    // val.length > 0 && (valid = false);
    if (val.length > 0) {
      valid = false;
    }
  });
  // validate the form was filled out
  Object.values(rest).forEach(val => {
    // val === null && (valid = false);
    if (val === "") {
      valid = false;
    }
  });

  return valid;
};
class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      company: "",
      name: "",
      phone: "",
      email: "",
      message: "",
      formErrors: {
        company: "",
        name: "",
        phone: "",
        email: "",
        message: ""
      }
    };
  }
  // componentDidUpdate() {
  //   const { firebase } = this.props;
  //   firebase
  //     .database()
  //     .ref("/test")
  //     .once("value")
  //     .then(snapshot => {
  //       this.setState({
  //         test: snapshot.val()
  //       });
  //     });
  // }

  handleInputChange = event => {
    const { name, value } = event.target;
    // const target = event.target;
    // const value = target.value;
    // const name = target.name;
    let formErrors = this.state.formErrors;

    switch (name) {
      // case "company":
      //   formErrors.company =
      //     value.length < 4 ? "minimum 4 characters required" : "";
      //   break;

      case "name":
        formErrors.name =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;

      case "phone":
        formErrors.phone = value.length < 10 ? "invalid phone number" : "";
        break;

      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "message":
        formErrors.message =
          value.length < 4 ? "minimum 4 characters required" : "";
        break;
      default:
        break;
    }

    this.setState({
      formErrors,
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Company: ${this.state.company}
        Name: ${this.state.name}
        Phone: ${this.state.phone}
        Email: ${this.state.email}
        Message: ${this.state.message}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }

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
      padding: "5rem 1.5rem"
    };

    const { formErrors } = this.state;

    return (
      <section className='section' style={style}>
        <div className='column is-half is-offset-one-quarter'>
          <div className='box'>
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
              noValidate
              method='post'
              action='#'
            >
              <div className='field'>
                <label htmlFor='compnay'>
                  Company:
                  <div className='control has-icons-left'>
                    <input
                      type='text'
                      className='input is-success'
                      placeholder='Compnay name if applicable'
                      name='company'
                      value={this.state.company}
                      onChange={this.handleInputChange}
                      ref={node => (this.inputNode = node)}
                      noValidate
                    />
                    <span className='icon is-small is-left'>
                      <i className='fas fa-building'></i>
                    </span>
                  </div>
                </label>
              </div>
              <div className='field'>
                <label htmlFor='name'>
                  Name:
                  <div className='control has-icons-left'>
                    <input
                      type='text'
                      className={
                        formErrors.name.length > 0
                          ? "input is-danger"
                          : "input is-success"
                      }
                      placeholder='Name'
                      name='name'
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      ref={node => (this.inputNode = node)}
                      noValidate
                    />
                    <span className='icon is-small is-left'>
                      <i className='fas fa-user'></i>
                    </span>
                  </div>
                  {formErrors.name.length > 0 && (
                    <span className='help is-danger'>{formErrors.name}</span>
                  )}
                </label>
              </div>
              <div className='field'>
                <label htmlFor='phone'>
                  Phone:
                  <div className='control has-icons-left'>
                    <input
                      type='text'
                      className={
                        formErrors.phone.length > 0
                          ? "input is-danger"
                          : "input is-success"
                      }
                      placeholder='(xxx) xxx-xxxx'
                      name='phone'
                      value={this.state.phone}
                      onChange={this.handleInputChange}
                      ref={node => (this.inputNode = node)}
                      noValidate
                    />
                    <span className='icon is-small is-left'>
                      <i className='fas fa-phone'></i>
                    </span>
                  </div>
                  {formErrors.phone.length > 0 && (
                    <span className='help is-danger'>{formErrors.phone}</span>
                  )}
                </label>
              </div>
              <div className='field'>
                <label htmlFor='exampleInputEmail1'>
                  Email:
                  <div className='control has-icons-left has-icons-right'>
                    <input
                      type='email'
                      className={
                        formErrors.email.length > 0
                          ? "input is-danger"
                          : "input is-success"
                      }
                      placeholder='Email'
                      aria-label='Email'
                      aria-describedby='emailHelp'
                      name='email'
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      ref={node => (this.inputNode = node)}
                      noValidate
                    />
                    <span className='icon is-small is-left'>
                      <i className='fas fa-envelope'></i>
                    </span>
                    <span className='icon is-small is-right'>
                      <i className='fas fa-exclamation-triangle'></i>
                    </span>
                  </div>
                  {formErrors.email.length > 0 && (
                    <span className='help is-danger'>{formErrors.email}</span>
                  )}
                </label>
              </div>
              <div className='field'>
                <label htmlFor='message'>
                  Message:
                  <div className='control'>
                    <textarea
                      className='textarea '
                      placeholder='Please describe'
                      name='message'
                      value={this.state.message}
                      onChange={this.handleInputChange}
                      ref={node => (this.inputNode = node)}
                      noValidate
                    ></textarea>
                  </div>
                  {formErrors.message.length > 0 && (
                    <span className='help is-danger'>{formErrors.message}</span>
                  )}
                </label>
              </div>
              <button type='submit' className='button is-primary'>
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactForm;
