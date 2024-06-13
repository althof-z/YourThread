import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form id="login-form">
      <div className="form-group first">
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={onNameChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={onEmailChange}
          className="form-control"
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
      <button
        type="button"
        className="btn btn-primary btn-block"
        onClick={() => register({ name, email, password })}
      >
        Register
      </button>

      <div className="text-center mt-5">
        <p className="text-white">Already Have an Account?</p>
        <Link to="/" className="text-white">
          Login Now
        </Link>
      </div>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
