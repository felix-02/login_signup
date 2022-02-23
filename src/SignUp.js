import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "./components/FormInput";

const SignUp = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 3-10 characters and include at least 1 uppercase letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{3,10}$`,
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const retrieveItem = localStorage.getItem([values.email]);
    if (retrieveItem) {
      alert("email already exists");
      return;
    } else {
      localStorage.setItem([values.email], values.password);
      alert("sign up succesful!. You may login now");
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1 className="center">Sign up</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="center">
          <button className="btn">Sign up</button>
        </div>
      </form>
      <p className="center">
        already a user? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
