import { combineReducers } from 'redux';

import CommodityReducer from '../modules/commodity/commodity.state';

const reducers = {
  commodity: CommodityReducer,
};

export default combineReducers(reducers);
