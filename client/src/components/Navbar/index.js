import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (

    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link className='navbar-brand' to='/'>
        Google Books Search
      </Link>

      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
          <Link
            to='/'
            className={
              window.location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Search
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/savedbooks'
            className={
              window.location.pathname === "/savedbooks"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Saved Books
          </Link>
        </li>
      </ul>
      </div>

    </nav>

  );
}

export default Navbar;
