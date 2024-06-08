import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form id="login-form">
      <div className="form-group first">
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={onEmailChange}
          className="form-control"
          data-testid="email"
        />
      </div>
      <div className="form-group last mb-4">
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={onPasswordChange}
          className="form-control"
          id="password"
        />
      </div>

      <div className="d-flex mb-5 align-items-center">
        <span className="control control--checkbox mb-0">
          <span className="caption text-white">Remember me</span>
          <input type="checkbox" />
          <div className="control__indicator" />
        </span>
        <span className="ml-auto">
          <p className="forgot-pass text-white">Forgot Password</p>
        </span>
      </div>

      <input
        type="button"
        onClick={() => login({ email, password })}
        value="Login"
        className="btn btn-block btn-primary"
      />

      <div className="text-center mt-5">
        <p className="text-white">Don&apos;t have an account?</p>
        <Link to="/register" className="text-white">
          Register Here
        </Link>
      </div>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
