/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="/logo_xl.png" className="img-fluid" />
          </div>
          <div className="col-md-6 contents">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="mb-4">
                  <h3 className="text-white">Sign In</h3>
                  <p className="mb-4 text-white">
                    Log in to Join Our Community
                  </p>
                </div>
                <LoginInput
                  login={({ email, password }) => dispatch(asyncSetAuthUser({ email, password }))}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
