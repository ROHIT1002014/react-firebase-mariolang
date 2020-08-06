import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLink';
import SignedOutLink from './SignedOutLink'

const Navbar = () => {
  return (
    <nav>
    <div className="nav-wrapper #263238 blue-grey darken-4">
      <div className="container">
        <Link to="/" className="brand-logo">MarioPlan</Link>
        <SignedInLinks />
        <SignedOutLink />
      </div>
    </div>
  </nav>
  )
}

export default Navbar;