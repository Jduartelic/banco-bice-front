import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { InfoCurrencys } from '@utils/constants';
import moment from 'moment';

import './HistoryValues.scss';

const HistoryValues = props => {
  const { date, price, selectedCommodity } = props;
  const info = InfoCurrencys[selectedCommodity.unit];

  return (
    <li className="history-values__container">
      <div className="history-values__content-title">
        <h1 className="history-values__header-title">{selectedCommodity.name}</h1>
      </div>

      <div className="history-values__content-sub-titles">
        <label className="history-values__price-title">
          {info.symbol}
          {price}
          <label className="history-values__unit-title">{`/${info.currency}`}</label>
        </label>
        <label className="history-values__date-title">{date}</label>
      </div>
    </li>
  );
};

HistoryValues.propTypes = {
  commodity: PropTypes.object.isRequired,
};

export default HistoryValues;
