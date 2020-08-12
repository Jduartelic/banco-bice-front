import React from 'react';
import IconHamburguer from '@components/Common/Icons/icon-hamburguer';
import Router from 'next/router';
import PropTypes from 'prop-types';

import './NavBar.scss';

const NavBar = props => {
  const title = props.isMobile ? 'Stock Market' : "Stock Market Index's";
  return (
    <div className="nav-bar__container">
      <div
        className="nav-bar__inner-container"
        onClick={() => {
          return Router.push({ pathname: '/' }).then(() => window.scrollTo(0, 0));
        }}
      >
        <div className="nav-bar__hamburguer">
          <IconHamburguer style={{ width: '3.5rem', height: '100%' }} />
        </div>
        <div className="nav-bar__title-container">
          <h1 className="nav-bar__title">{title}</h1>
        </div>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default NavBar;
