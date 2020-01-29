import React, { useState } from "react";
import useForm from "../../Hooks/useForm";
import validate from "../../Validators/validateForm";
import { FirebaseContext } from "gatsby-plugin-firebase";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  TextField,
  Input,
  InputLabel
} from "@material-ui/core";
import clsx from "clsx";

const styles = theme => ({
  container: {
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
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: 500
  },
  input: {
    display: "flex"
  }
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
      <section className='section'>
        <Container className={classes.container}>
          <div>
            <form
              id='contact-form'
              onSubmit={event => handleSubmit(event, submit)}
              noValidate
              method='post'
              action='#'
            >
              <InputLabel htmlFor='company'>
                Company
                <FormControl
                  fullWidth
                  className={classes.margin}
                  variant='filled'
                >
                  <TextField
                    id='standard-basic'
                    type='text'
                    className={classes.textField}
                    name='company'
                    value={values.company}
                    onChange={handleInputChange}
                    noValidate
                  />
                </FormControl>
              </InputLabel>
              <InputLabel htmlFor='name'>
                Name*
                <FormControl
                  fullWidth
                  className={classes.margin}
                  variant='filled'
                >
                  <TextField
                    id='standard-basic'
                    type='text'
                    className={classes.textField}
                    error={errors.name != ""}
                    name='name'
                    value={values.name}
                    onChange={handleInputChange}
                    helperText={errors.name}
                  />
                </FormControl>
              </InputLabel>

              <InputLabel htmlFor='phone'>
                Phone*
                <FormControl
                  fullWidth
                  className={classes.margin}
                  variant='filled'
                >
                  <TextField
                    id='standard-basic'
                    type='text'
                    className={classes.textField}
                    error={errors.phone != ""}
                    placeholder='###-###-####'
                    name='phone'
                    value={values.phone}
                    onChange={handleInputChange}
                    helperText={errors.phone}
                  />
                </FormControl>
              </InputLabel>

              <InputLabel htmlFor='exampleInputEmail1'>
                Email*
                <FormControl
                  fullWidth
                  className={classes.margin}
                  variant='filled'
                >
                  <TextField
                    type='email'
                    className={classes.textField}
                    error={errors.email != ""}
                    aria-label='Email'
                    aria-describedby='emailHelp'
                    name='email'
                    value={values.email}
                    onChange={handleInputChange}
                    helperText={errors.email}
                  />
                </FormControl>
              </InputLabel>
              <InputLabel htmlFor='message'>
                Message*
                <FormControl
                  fullWidth
                  className={classes.margin}
                  variant='filled'
                >
                  <TextField
                    id='standard-multiline-static'
                    multiline
                    rows='10'
                    error={errors.message != ""}
                    className={classes.textField}
                    name='message'
                    value={values.message}
                    onChange={handleInputChange}
                    helperText={errors.message}
                    variant='outlined'
                  ></TextField>
                </FormControl>
              </InputLabel>
              <div className='buttons'>
                <Button type='submit' variant='contained' color='primary'>
                  Confirm & Send
                </Button>
              </div>
            </form>
          </div>
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
