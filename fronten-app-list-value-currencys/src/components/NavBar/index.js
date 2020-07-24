import React from 'react';
import Head from 'next/head';
import ClipLoader from 'react-spinners/ClipLoader';
import PropTypes from 'prop-types';

import './NavBar.scss';

const NavBar = () => {
  return (
    <div className="nav-bar__container">
      <title className="nav-bar__title">Create Next App</title>
    </div>
  );
};

export default NavBar;
