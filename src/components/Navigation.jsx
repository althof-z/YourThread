import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoMdLogOut } from 'react-icons/io';

function Navigation({ authUser, signOut }) {
  const { avatar, name } = authUser;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarText">
          <span className="navbar-brand"> Your </span>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/leaderboard">
                Leaderboard
              </Link>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/"><a >Leaderboard</a></Link> */}
            </li>
          </ul>
        </div>
        {/* Collapsible wrapper */}

        {/* Right elements */}
        <div className="d-flex align-items-center">
          <div className="collapse navbar-collapse" id="navbarText">
            <span className="navbar-brand">
              {' '}
              Hello,
              {name}
            </span>
          </div>
          <img
            src={avatar}
            alt={name}
            title={name}
            className="rounded-circle"
            height="25"
            loading="lazy"
          />
          <button
            className="ms-3 btn btn-light border border-0"
            type="button"
            aria-label="Log-out"
            onClick={signOut}
          >
            <IoMdLogOut size="2em" />
          </button>
        </div>
        {/* Right elements */}
      </div>
    </nav>
  );
}

const authUserShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
