import React from "react";
import { Link } from "react-router-dom";

import Login from '../../pages/Login';
import Signup from '../../pages/Signup'
import logo from '../../assets/logo.png'
import '../styles/header.css'

import Auth from '../../utils/auth';

function Header() {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div className="h">
      
      <Link to="/">
      <img src={logo}></img>
      </Link>

      <div className="h-btns">
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/search">
                Search Movies
              </Link>
              <button className="btn btn-lg btn-primary m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/search">
                Search Movies
              </Link>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-primary m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>

    </div>
  );
};

export default Header;
