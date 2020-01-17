import { useState } from "react";

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
const useForm = callback => {
  const [values, setValues] = useState({
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
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    // const target = event.target;
    // const value = target.value;
    // const name = target.name;
    let formErrors = values.formErrors;

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

    setValues({
      ...values,
      formErrors,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
    if (formValid(values)) {
      console.log(`
        --SUBMITTING--
        Company: ${values.company}
        Name: ${values.name}
        Phone: ${values.phone}
        Email: ${values.email}
        Message: ${values.message}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
    callback();
    values.resetForm();

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

  const resetForm = () => {
    setValues({
      company: "",
      name: "",
      phone: "",
      email: "",
      message: ""
    });
  };

  return {
    handleInputChange,
    handleSubmit,
    values
  };
};

export default useForm;
