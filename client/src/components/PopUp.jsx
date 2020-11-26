import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import LogIn from '../components/LogIn';
import ResetPassword from './ResetPassword';
import UpdatePassword from './UpdatePassword';
import SignUp from './SignUp';
import LogOut from './LogOut';

const PopUp = () => {
  const { popSignUp, setPopSignUp } = useContext(AppContext);

  return (
    <>
      {popSignUp && (
        <div className="module">
          <button className="exit" onClick={(e) => setPopSignUp(false)}>
            &#10005;
          </button>
          {popSignUp === 'popOptions' && (
            <div className="options container">
              <h6>
                Welcome.
                <br />
                Don't have an account yet?
              </h6>
              <button onClick={(e) => setPopSignUp('login')}>
                <span className="icon">
                  <img src={require('../images/email.svg')} alt="login" />
                </span>
                <p>LOG IN WITH EMAIL</p>
              </button>
              <button onClick={(e) => setPopSignUp('signUp')}>
                <span className="icon">
                  <img src={require('../images/account.svg')} alt="login" />
                </span>
                <p>REGISTER WITH EMAIL</p>
              </button>
              <a onClick={(e) => setPopSignUp(false)}>Skip</a>
            </div>
          )}
          {popSignUp === 'login' && <LogIn />}
          {popSignUp === 'signUp' && <SignUp />}
          {popSignUp === 'success' && (
            <div className="success container">
              <h6>Confirmation</h6>
              <p>You're all set! Check out your profile.</p>
              <Link to="/profile" onClick={(e) => setPopSignUp(false)}>
                Go to Profile
              </Link>
              <Link to="/" onClick={(e) => setPopSignUp(false)}>
                Returm Home
              </Link>
            </div>
          )}
          {popSignUp === 'resetPassword' && <ResetPassword />}
          {popSignUp === 'updatePassword' && <UpdatePassword />}
          {popSignUp === 'logOut' && <LogOut />}
        </div>
      )}
    </>
  );
};

export default PopUp;
