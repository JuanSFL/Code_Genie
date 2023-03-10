import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import Header from '../Header';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
    <div className="large-container-center">
    <div className="login-cont">
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="enter-cred">
          <label htmlFor="email" ></label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            className="cred-input"
            onChange={handleChange}
          />
        </div>
        <div className="enter-cred">
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
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
          <button type="submit" className="submit">Submit</button>
      </form>
      <p className="or">Or</p>
      <Link to="/signup" className="login-option">Signup</Link>
    </div>
    </div>
    </div>
  );
}

export default Login;
