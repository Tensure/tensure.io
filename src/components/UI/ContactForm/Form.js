import React, { useState } from "react";
// import { withFirebase } from "../components/FirebaseContext";
import useForm from "../../Hooks/useForm";

const Form = () => {
  const { handleInputChange, handleSubmit, values } = useForm(submit);

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

  function submit() {
    console.log("Submitted successfully");
  }
  const style = {
    padding: "5rem 1.5rem"
  };

  const { formErrors } = values;

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
            onSubmit={handleSubmit}
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
                    value={values.company}
                    onChange={handleInputChange}
                    // ref={node => (this.inputNode = node)}
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
                    value={values.name}
                    onChange={handleInputChange}
                    // ref={node => (this.inputNode = node)}
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
                    value={values.phone}
                    onChange={handleInputChange}
                    // ref={node => (this.inputNode = node)}
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
                    value={values.email}
                    onChange={handleInputChange}
                    // ref={node => (this.inputNode = node)}
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
                    value={values.message}
                    onChange={handleInputChange}
                    // ref={node => (this.inputNode = node)}
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
};

export default Form;
