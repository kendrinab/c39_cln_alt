import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const UpdatePassword = () => {
  const { setPopSignUp } = useContext(AppContext);
  const [password, setPassword] = useState(null);
  const handleChange = (event) => {
    setPassword({ ...password, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.password !== password.confirmPassword) {
      throw Error('Error!');
    }
    console.log('what password did i try', password);
    await axios.put(
      '/api/users/password',
      { password: password.password },
      { withCredentials: true }
    );
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h6>Create a New Password.</h6>
      <input
        onChange={handleChange}
        name="password"
        type="password"
        placeholder="New Password"
      />
      <input
        onChange={handleChange}
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
      />
      <button className="button bgBlack" type="submit">
        Sign Up
      </button>
      <a onClick={(e) => setPopSignUp('resetPassword')}>
        Didn't get an Email? Try again.
      </a>
    </form>
  );
};

export default UpdatePassword;
