import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const SignUp = () => {
  const { setCurrentUser, setPopSignUp } = useContext(AppContext);
  const [formData, setFormData] = useState(null);
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users', formData);
      console.log(formData);
      sessionStorage.setItem('user', response.data);
      setCurrentUser(response.data.user);
      setPopSignUp('success');
    } catch (error) {
      console.log('Signup Error ' + error);
    }
  };
  return (
    <form className="container" onSubmit={handleSignUp}>
      <h6>Let's sign you up.</h6>
      <input
        onChange={handleChange}
        name="name"
        type="text"
        placeholder="Name"
      />
      <input
        onChange={handleChange}
        name="email"
        type="email"
        placeholder="Email"
      />
      <input
        onChange={handleChange}
        name="password"
        type="password"
        placeholder="Password"
      />
      <p>
        <input type="checkbox" />
        <span>
          I agree with <Link to="/termsAndConditions">Terms & Conditions</Link>{' '}
          and
          <Link to="/privacyPolicy"> Privacy Policy</Link>
        </span>
      </p>
      <button className="button bgBlack" type="submit">
        Sign Up
      </button>
      <a onClick={(e) => setPopSignUp('popOptions')}>Back</a>
    </form>
  );
};

export default SignUp;
