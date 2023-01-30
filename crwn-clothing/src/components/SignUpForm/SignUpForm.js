import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import "./signUpForm.styles.scss";
import Button from "../Button/Button";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const changeHandler = e => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("passwordler eslesmiyor");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        console.log("bu email zaten kayitli");
      }
      console.log("user creation encountered an error", error);
    }
  };

  const formValues = Object.keys(formFields);

  const titleCaseValues = el => {
    const result = el.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        {formValues.map(el => (
          <FormInput
            key={el}
            required
            label={titleCaseValues(el)}
            type={el === displayName ? "text" : el}
            onChange={changeHandler}
            name={el}
            value={formFields.hasOwnProperty(el) && formFields[el]}
          />
        ))}
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
