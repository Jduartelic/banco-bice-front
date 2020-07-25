import getConfig from 'next/config';
import { format } from 'currencyformatter.js';

const { publicRuntimeConfig } = getConfig();

const parameters = {
  currency: 'CLP', // If currency is not supplied, defaults to USD
  symbol: '$', // Overrides the currency's default symbol
  locale: 'cl', // Overrides the currency's default locale (see supported locales)
  decimal: ',', // Overrides the locale's decimal character
  group: '.', // Overrides the locale's group character (thousand separator)
  pattern: '!#.##0,00', // Overrides the locale's default display pattern

  // The pattern follows standard unicode currency pattern notation.
  // comma = group separator, dot = decimal separator, exclamation = currency symbol
};

export const InfoCurrencys = {
  dolar: { symbol: '$', currency: 'USD' },
  pesos: { symbol: '$', currency: 'CLP' },
  porcentual: { symbol: '%', currency: '' },
};

export const ENV = publicRuntimeConfig.ENV || 'development';

export const API_URL = `http://localhost:3030/`;
