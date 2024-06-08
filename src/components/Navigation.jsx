import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
          <img src="/logo_ic.png" alt="logo" height="60" />
          <ul className="navbar-nav ms-3 me-auto mb-2 mb-lg-0">
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
        <div className="d-flex align-items-center dropdown">
          <div className="collapse navbar-collapse" id="navbarText">
            <span className="navbar-brand">
              Hello, &nbsp;
              <b>{name}</b>
            </span>
          </div>
          <div>
            <div role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img
                className="rounded-circle nav-link dropdown-toggle"
                src={avatar}
                alt={name}
                title={name}
                height="50"
                loading="lazy"
              />
            </div>

            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  aria-label="Log-out"
                  onClick={signOut}
                >
                  Log out
                </button>
              </li>
            </ul>
          </div>
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
