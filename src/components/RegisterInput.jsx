import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form id="login-form" className="form">
      <h3 className="text-center text-info">Register</h3>
      <div className="form-group">
        <div className="form-group">
          <span htmlFor="name" className="text-info">
            Name
          </span>
          <br />
          <input type="text" placeholder="name" value={name} onChange={onNameChange} className="form-control" />
        </div>
        <span htmlFor="email" className="text-info">
          Email
        </span>
        <br />
        <input type="email" placeholder="email" value={email} onChange={onEmailChange} className="form-control" />
      </div>
      <div className="form-group">
        <span htmlFor="password" className="text-info">
          Password
        </span>
        <br />
        <input type="password" placeholder="password" value={password} onChange={onPasswordChange} className="form-control" />
      </div>

      <br />
      <div className="form-group justify-content-end">
        <button type="button" className="btn btn-primary btn-md" onClick={() => register({ name, email, password })}>
          Register
        </button>
      </div>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
