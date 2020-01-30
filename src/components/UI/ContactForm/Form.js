import React, { useState } from "react";
import useForm from "../../Hooks/useForm";
import validate from "../../Validators/validateForm";
import { FirebaseContext } from "gatsby-plugin-firebase";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { FormControl, TextField, InputLabel } from "@material-ui/core";

const styles = theme => ({
  container: {
    maxWidth: 600,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(14),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
});

const ContactForm = (props, { className }) => {
  const { classes } = props;

  const { handleInputChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  const firebase = React.useContext(FirebaseContext);

  const [isSubmitted, setIsSubmitted] = useState(false);

  function submit() {
    debugger;
    firebase
      .firestore()
      .collection("contacts")
      .add({ values });
    setIsSubmitted(true);
  }

  return (
    <div>
      {/* {!isSubmitted ? ( */}
      <section>
        <Container className={classes.container}>
          <form
            id='contact-form'
            onSubmit={event => handleSubmit(event, submit)}
            noValidate
            method='post'
            action='#'
          >
            <FormControl fullWidth className={classes.margin} variant='filled'>
              <TextField
                fullwidth
                id='standard-basic'
                type='text'
                name='company'
                style={{marginBottom: 10 }}
                value={values.company}
                label='Company name'
                onChange={handleInputChange}
                noValidate
              />
            </FormControl>
            <FormControl fullWidth className={classes.margin} variant='filled'>
              <TextField
                required
                id='standard-full-width'
                type='text'
                error={errors.name != ""}
                name='name'
                style={{marginBottom: 10 }}
                label='Full name'
                value={values.name}
                onChange={handleInputChange}
                helperText={errors.name}
              />
            </FormControl>
            <FormControl fullWidth className={classes.margin} variant='filled'>
              <TextField
                required
                id='standard-full-width'
                type='text'
                error={errors.phone != ""}
                placeholder='###-###-####'
                name='phone'
                style={{marginBottom: 10 }}
                label='Phone number'
                value={values.phone}
                onChange={handleInputChange}
                helperText={errors.phone}
              />
            </FormControl>
            <FormControl fullWidth className={classes.margin} variant='filled'>
              <TextField
                required
                id='standard-full-width'
                type='email'
                error={errors.email != ""}
                aria-label='Email'
                aria-describedby='emailHelp'
                name='email'
                style={{marginBottom: 10 }}
                value={values.email}
                label='Email address'
                onChange={handleInputChange}
                helperText={errors.email}
              />
            </FormControl>
            <FormControl fullWidth className={classes.margin} variant='filled'>
              <TextField
                required
                id='standard-full-width'
                multiline
                rows='10'
                error={errors.message != ""}
                name='message'
                style={{marginBottom: 10 }}
                value={values.message}
                label='How can we help you?'
                onChange={handleInputChange}
                helperText={errors.message}
                variant='outlined'
              ></TextField>
            </FormControl>
            <div className='buttons'>
              <Button type='submit' variant='contained' color='primary'>
                Confirm & Send
              </Button>
            </div>
          </form>
        </Container>
      </section>
      {/* // ) : (
    //     <section className='section'>
    //       <div className='column is-half is-offset-one-quarter'>
    //         <article className='message is-primary'>
    //           <div className='message-header'>
    //             <p>Thank you for contacting us!</p>
    //           </div>
    //           <div className='message-body'>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
    //             <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
    //             porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
    //             Nullam gravida purus diam, et dictum <a>felis venenatis</a>{" "}
    //             efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
    //             Donec sodales, arcu et sollicitudin porttitor, tortor urna
    //             tempor ligula, id porttitor mi magna a neque. Donec dui urna,
    //             vehicula et sem eget, facilisis sodales sem.
    //           </div>
    //         </article>
    //       </div>
    //     </section>
    //   )}
    // </div>
  // ); */}
    </div>
  );
};
export default withStyles(styles)(ContactForm);
