import { of, from, empty } from 'rxjs';
import { mergeMap, catchError, map, mapTo, flatMap, delay } from 'rxjs/operators';
import { combineEpics, ofType, Observable } from 'redux-observable';
import { request } from 'universal-rxjs-ajax';

import { API_URL } from '../../utils/constants';

import { COMMODITYS_GET, commoditysGetSuccess, commoditysGetFailure } from './commodity.state';

const URL = `${API_URL}/`;

//
// Get commoditys
//
export const getCommoditysEpic = (action$, state$) =>
  action$.pipe(
    ofType(COMMODITYS_GET),
    mergeMap(action => {
      return request({
        method: 'POST',
        url: URL,
        headers: {
          'Content-Type': 'application/json',
        },
      }).pipe(
        map(({ response }) => {
          return commoditysGetSuccess(response);
        }),
        catchError(error => of(commoditysGetFailure(error))),
      );
    }),
  );

export default combineEpics(getCommoditysEpic);
