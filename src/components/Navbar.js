import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand" >
        <Link to="/" className="navbar-item">
            <img src={logo} alt="Springforward" width="112" height="68" />
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        {/*<Link className="navbar-item" to="/products">*/}
          {/*Products*/}
        {/*</Link>*/}
      </div>
    </div>
  </nav>
);

export default Navbar
