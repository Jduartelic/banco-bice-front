import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { InfoCurrencys } from '@utils/constants';
import moment from 'moment';

import './ProductBox.scss';

const ProductBox = props => {
  const { commodity } = props;
  const info = InfoCurrencys[commodity.unit];
  const date = new Date(commodity.date * 1000);
  const formattedDate = moment(date).format('DD/MM/YYYY');

  return (
    <li
      className="product-box__container"
      onClick={() => {
        return Router.push({ pathname: '/detail-info-commodity', query: { key: commodity.key } }).then(() =>
          window.scrollTo(0, 0),
        );
      }}
    >
      <div className="product-box__content-container">
        <div className="product-box__content">
          <div className="product-box__header-commodity">
            <label className="product-box__brand-title">{commodity.key}</label>
            <label className="product-box__main-title">{commodity.name}</label>
          </div>

          <div className="product-box__content-commodity">
            <label className="product-box__price-title">{commodity.value}</label>
            <label className="product-box__unit-title">{`/ ${info.symbol} - ${info.currency}`}</label>
          </div>

          <div className="product-box__footer-commodity">
            <label className="product-box__date-title">{formattedDate}</label>
          </div>
        </div>
      </div>
    </li>
  );
};

ProductBox.propTypes = {
  commodity: PropTypes.object.isRequired,
};

export default ProductBox;
