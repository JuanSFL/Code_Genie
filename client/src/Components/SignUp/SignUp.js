import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
    <div className="large-container-center">
    <div className="login-cont">

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName"></label>
          <input
            placeholder="First Name"
            name="firstName"
            type="firstName"
            id="firstName"
            className="cred-input"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName"></label>
          <input
            placeholder="Last Name"
            name="lastName"
            type="lastName"
            id="lastName"
            className="cred-input"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email"></label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            className="cred-input"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd"></label>
          <input
            placeholder="password"
            name="password"
            type="password"
            id="pwd"
            className="cred-input"
            onChange={handleChange}
          />
        </div>
          <button type="submit" className="submit">Submit</button>
      </form>
      <p className="or">Or</p>
      <Link to="/login" className="login-option">Login</Link>
    </div>
    </div>
    </div>
  );
}

export default Signup;
