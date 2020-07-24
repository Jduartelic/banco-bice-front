import React, { Component } from 'react';
import NavBar from '@components/NavBar';
import PropTypes from 'prop-types';
import './Layout.scss';

const Layout = props => {
  const { children } = props;
  return (
    <main className="layout__wrapper">
      <NavBar />
      <div className="layout__wrapper-container">{children}</div>
      {/* TODO ADD FOOTER */}
    </main>
  );
};

export default Layout;
