import { combineEpics } from 'redux-observable';

import CommodityEpics from '../modules/commodity/commodity.epic';

export const rootEpic = combineEpics(CommodityEpics);
