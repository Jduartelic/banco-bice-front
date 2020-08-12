import React, { Component } from 'react';
import NavBar from '@components/NavBar';
import { handleResize } from '@utils/windowBreakpoints';
import './Layout.scss';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
  }
  componentDidMount() {
    this.handleWindowSizeChange();
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    handleResize(this.state, newState => this.setState(newState), window);
  };

  render() {
    const { children } = this.props;
    const propsNavBar = { isMobile: this.state.isMobile };
    return (
      <main className="layout__wrapper">
        <NavBar {...propsNavBar} />
        <div className="layout__wrapper-container">{children}</div>
        {/* TODO ADD FOOTER */}
      </main>
    );
  }
}

export default Layout;
