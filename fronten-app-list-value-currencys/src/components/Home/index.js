import React, { Fragment } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import ProductBox from '@components/Common/ProductBox';

import './Home.scss';

class Home extends React.Component {
  render() {
    const { commoditys } = this.props;
    return (
      <section className="home-landing__container">
        <h1 className="home-landing__title">INDEX MarketPlace</h1>

        <ul className="home-landing__container-grid">
          {Object.keys(commoditys).map(item => {
            const commodity = commoditys[item];

            const productBoxProps = { commodity };

            return <ProductBox {...productBoxProps} />;
          })}
        </ul>
      </section>
    );
  }
}

Home.propTypes = {
  commoditys: PropTypes.object.isRequired,
};

export default Home;
