export default function validateForm(values) {
  let errors = {};
  
  if (!values.name) {
    errors.name = "Your full name is required";
  } else if (values.name.length < 3) {
    errors.name = "Name is invalid";
  }

  if (!values.phone) {
    errors.phone = "Phone number is required";
  } else if (!/^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/.test(values.phone)) {
    errors.phone = "Phone number is invalid";
  }

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.message) {
    errors.message = "Message is required";
  } else if (values.message.length < 10) {
    errors.message = "Please tell us more...";
  }

  return errors;
}
