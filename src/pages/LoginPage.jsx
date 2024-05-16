import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  return (
    <div id="login">
      <h3 className="text-center text-white pt-5">Login form</h3>
      <div className="container">
        <div id="login-row" className="row justify-content-center align-items-center">
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <LoginInput
                login={({ email, password }) => dispatch(asyncSetAuthUser({ email, password }))}
              />
              <Link to="/register" className="register-link">
                Go to Register
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
