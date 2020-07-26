import React, { Fragment } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import HistoryValues from '@components/Common/HistoryValues';
import { Line } from 'react-chartjs-2';
import { InfoCurrencys } from '@utils/constants';

import './DetailInfoCommodity.scss';

class DetailInfoCommodity extends React.Component {
  render() {
    const { detailnfoCommodity, selectedCommodity } = this.props;
    const { labelsChart, prices } = detailnfoCommodity.chartData;
    const labelsCharts = labelsChart;
    const pricesData = prices;
    const info = InfoCurrencys[detailnfoCommodity.unit];
    const historyValues = detailnfoCommodity.values;
    const detailnfoCommodityValuesLength = Object.keys(historyValues).length;
    const infoCommodity = {
      price: Object.values(historyValues)[detailnfoCommodityValuesLength - 1],
      date: Object.keys(historyValues)[detailnfoCommodityValuesLength - 1],
    };
    const data = {
      labels: labelsCharts,
      datasets: [
        {
          label: 'Gráfico tendencia del valor en el tiempo',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(50, 98, 149,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(50, 98, 149,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(50, 98, 149,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: pricesData,
        },
      ],
    };

    return (
      <section className="detail-info-commodity__container">
        <div className="detail-info-commodity__container-header">
          <div className="detail-info-commodity__content-commodity">
            <h1 className="detail-info-commodity__header-title">{selectedCommodity.name}</h1>
            <label className="detail-info-commodity__price-title">
              {info.symbol}
              {infoCommodity.price}
              <label className="detail-info-commodity__unit-title">{`/${info.currency}`}</label>
            </label>
            <label className="detail-info-commodity__date-title">{infoCommodity.date}</label>
          </div>
        </div>
        <div className="detail-info-commodity__container-chart-history">
          <div className="detail-info-commodity__container-chart">
            <Line data={data} />
          </div>
          <ul className="detail-info-commodity__container-body">
            <label className="detail-info-commodity__header-sub-title">Valores historicos</label>

            {Object.keys(historyValues).map(item => {
              const propsHistoryValues = {
                date: item,
                price: historyValues[item],
                selectedCommodity,
              };
              return <HistoryValues {...propsHistoryValues} />;
            })}
          </ul>
        </div>
        <div className="detail-info-commodity__buttton-container">
          <button
            className="detail-info-commodity__button"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <i className="detail-info-commodity__arrow detail-info-commodity__arrow--up" />
          </button>
        </div>
      </section>
    );
  }
}

DetailInfoCommodity.propTypes = {
  detailnfoCommodity: PropTypes.object.isRequired,
  selectedCommodity: PropTypes.object.isRequired,
};

export default DetailInfoCommodity;
