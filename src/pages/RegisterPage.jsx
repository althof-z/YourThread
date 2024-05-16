import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    if (asyncRegisterUser) {
      navigate('/');
    }
  };
  return (

    <div id="login" className="">
      <h3 className="text-center text-white pt-5">Register form</h3>
      <div className="container">
        <div id="login-row" className="row justify-content-center align-items-center">
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <RegisterInput register={onRegister} />
            </div>
            <Link to="/" className="login-link">
              Go to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
