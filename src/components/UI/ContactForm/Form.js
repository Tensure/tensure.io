import React, { useState } from "react";
import useForm from "../../Hooks/useForm";
import validate from "../../Validators/validateForm";
import { FirebaseContext } from "gatsby-plugin-firebase";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {
  Card,
  CardContent,
  FormControl,
  TextField,
  Typography
} from "@material-ui/core";

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
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 20
  },
  pos: {
    marginBottom: 12
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
    firebase
      .firestore()
      .collection("contacts")
      .add({ values });
    setIsSubmitted(true);
  }

  return (
    <div>
      {!isSubmitted ? (
        <section>
          <Container className={classes.container}>
            <form
              id='contact-form'
              onSubmit={event => handleSubmit(event, submit)}
              noValidate
              method='post'
              action='#'
            >
              <FormControl
                fullWidth
                className={classes.margin}
                variant='filled'
              >
                <TextField
                  variant='outlined'
                  type='text'
                  name='company'
                  style={{ marginBottom: 10 }}
                  value={values.company}
                  label='Company name'
                  onChange={handleInputChange}
                  noValidate
                />
              </FormControl>
              <FormControl
                fullWidth
                className={classes.margin}
                variant='filled'
              >
                <TextField
                  required
                  id='standard-full-width'
                  variant='outlined'
                  type='text'
                  error={errors.name !== ""}
                  name='name'
                  style={{ marginBottom: 10 }}
                  label='Full name'
                  value={values.name}
                  onChange={handleInputChange}
                  helperText={errors.name}
                />
              </FormControl>
              <FormControl
                fullWidth
                className={classes.margin}
                variant='filled'
              >
                <TextField
                  required
                  id='standard-full-width'
                  variant='outlined'
                  type='text'
                  error={errors.phone !== ""}
                  placeholder='###-###-####'
                  name='phone'
                  style={{ marginBottom: 10 }}
                  label='Phone number'
                  value={values.phone}
                  onChange={handleInputChange}
                  helperText={errors.phone}
                />
              </FormControl>
              <FormControl
                fullWidth
                className={classes.margin}
                variant='filled'
              >
                <TextField
                  required
                  id='standard-full-width'
                  variant='outlined'
                  type='email'
                  error={errors.email !== ""}
                  aria-label='Email'
                  aria-describedby='emailHelp'
                  name='email'
                  style={{ marginBottom: 10 }}
                  value={values.email}
                  label='Email address'
                  onChange={handleInputChange}
                  helperText={errors.email}
                />
              </FormControl>
              <FormControl
                fullWidth
                className={classes.margin}
                variant='filled'
              >
                <TextField
                  required
                  id='standard-full-width'
                  variant='outlined'
                  multiline
                  rows='10'
                  error={errors.message !== ""}
                  name='message'
                  style={{ marginBottom: 10 }}
                  value={values.message}
                  label='How can we help you?'
                  onChange={handleInputChange}
                  helperText={errors.message}
                  variant='outlined'
                ></TextField>
              </FormControl>
              <div className='buttons'>
                <Button
                  fullWidth
                  type='submit'
                  variant='contained'
                  color='primary'
                  size='large'
                >
                  Submit
                </Button>
                <Button type='submit' variant='contained' color='primary'>
                  Confirm & Send
                </Button>
              </div>
            </form>
          </Container>
        </section>
      ) : (
        <section className='section'>
          <Container className='container'>
            <Card className={classes.card} variant='outlined'>
              <CardContent>
                <Typography
                  className={classes.title}
                  color='textSecondary'
                  gutterBottom
                >
                  Thank you for contacting us!
                </Typography>
                <Typography color='textSecondary'>
                  We will get back to you as soon as possible!
                </Typography>
              </CardContent>
            </Card>
          </Container>
        </section>
      )}
    </div>
  );
};
export default withStyles(styles)(ContactForm);
