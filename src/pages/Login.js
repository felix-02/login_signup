import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

const Login = ({ setIsLoggedIn }) => {
  const [values, setValues] = useState(initialValues);
  const [showErrorText, setShowErrorText] = useState(false);

  const navigate = useNavigate();

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
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const retrieveItem = localStorage.getItem([values.email]);
    if (retrieveItem && values.password === retrieveItem) {
      setIsLoggedIn(true);
      navigate("/login-success");
    } else {
      setShowErrorText(true);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1 className="center">Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="center">
          <button className="btn">Login</button>
        </div>
      </form>

      <p className="center">
        create new account? <Link to="/signup">Sign Up</Link>
      </p>
      {showErrorText && (
        <div>
          <p className="center error">record is not found</p>
        </div>
      )}
    </div>
  );
};

export default Login;
