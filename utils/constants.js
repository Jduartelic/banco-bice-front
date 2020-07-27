import getConfig from 'next/config';

const { publicRuntimeConfig = {} } = getConfig() || {};

export const InfoCurrencys = {
  dolar: { symbol: '$', currency: 'USD' },
  pesos: { symbol: '$', currency: 'CLP' },
  porcentual: { symbol: '%', currency: '' },
};

export const ENV = publicRuntimeConfig.ENV || 'development';

export const API_URL = `http://localhost:3030`;
