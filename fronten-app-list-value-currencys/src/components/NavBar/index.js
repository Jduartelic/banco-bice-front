import React from 'react';
import IconHamburguer from '@components/Common/Icons/icon-hamburguer';
import Router from 'next/router';

import './NavBar.scss';

const NavBar = () => {
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
        <div className="nav-bar__img-container">
          <img className="nav-bar__img" src={'../../../static/logo-bice.png'} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
