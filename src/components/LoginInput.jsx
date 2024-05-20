import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form id="login-form" className="form">
      <h3 className="text-center text-info">Login</h3>
      <div className="form-group">
        <span className="text-info">Email</span>
        <br />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={onEmailChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <span htmlFor="password" className="text-info">
          Password
        </span>
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={onPasswordChange}
          className="form-control"
        />
      </div>
      <br />
      <div className="form-group justify-content-end">
        <input
          type="button"
          onClick={() => login({ email, password })}
          className="btn btn-primary btn-md"
          value="Login"
        />
      </div>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
