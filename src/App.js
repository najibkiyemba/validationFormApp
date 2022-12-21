import { useState } from 'react';
import './App.css';
import FormEntry from './components/formEntry/FormEntry';

function App() {

  const [values, setValues] = useState({
      username: "",
      email: "",
      birthday: "",
      password: "",
      confirmPassword: ""
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 6-16 characters and no special characters!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{6,16}$",
      required: true,

    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "please use avalid email. Thanks :)",
      label: "Email",
      required: true
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday"
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password shold be atleast 8-20 characters and include at least 1 letter, 1 number, and 1 special character",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#&%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match.",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };


      return (
          <div className='app'>
              <form onSubmit={handleSubmit}>
                  <h1>Registration Form</h1>
                      {
                        inputs.map(input => (
                          <FormEntry
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                          />
                        ))
                      }
                  <button>Submit</button>
              </form>
          </div>
  );
};


export default App;
