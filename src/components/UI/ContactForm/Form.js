import React from "react";
import useForm from "../../Hooks/useForm";
import validate from "../../Validators/validateForm";

const Form = () => {
  const {
    handleInputChange,
    handleSubmit,
    resetForm,
    values,
    errors
  } = useForm(submit, validate);

  function submit() {
    console.log("Submitted successfully");
    resetForm();
  }

  const style = {
    padding: "5rem 1.5rem"
  };

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
                      errors.name ? "input is-danger" : "input is-success"
                    }
                    placeholder='Name'
                    name='name'
                    value={values.name}
                    onChange={handleInputChange}
                    noValidate
                  />
                  <span className='icon is-small is-left'>
                    <i className='fas fa-user'></i>
                  </span>
                </div>
                {errors.name && (
                  <span className='help is-danger'>{errors.name}</span>
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
                      errors.phone ? "input is-danger" : "input is-success"
                    }
                    placeholder='###-###-####'
                    name='phone'
                    value={values.phone}
                    onChange={handleInputChange}
                    noValidate
                  />
                  <span className='icon is-small is-left'>
                    <i className='fas fa-phone'></i>
                  </span>
                </div>
                {errors.phone && (
                  <span className='help is-danger'>{errors.phone}</span>
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
                      errors.email ? "input is-danger" : "input is-success"
                    }
                    placeholder='Email'
                    aria-label='Email'
                    aria-describedby='emailHelp'
                    name='email'
                    value={values.email}
                    onChange={handleInputChange}
                    noValidate
                  />
                  <span className='icon is-small is-left'>
                    <i className='fas fa-envelope'></i>
                  </span>
                  <span className='icon is-small is-right'>
                    <i className='fas fa-exclamation-triangle'></i>
                  </span>
                </div>
                {errors.email && (
                  <span className='help is-danger'>{errors.email}</span>
                )}
              </label>
            </div>
            <div className='field'>
              <label htmlFor='message'>
                Message:
                <div className='control'>
                  <textarea
                    className='textarea'
                    placeholder='Please describe'
                    name='message'
                    value={values.message}
                    onChange={handleInputChange}
                    noValidate
                  ></textarea>
                </div>
                {errors.message && (
                  <span className='help is-danger'>{errors.message}</span>
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
