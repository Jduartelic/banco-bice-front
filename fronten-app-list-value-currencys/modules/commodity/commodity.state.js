import Immutable from 'immutable';

/* Actions */

//
// Get commoditys
//
export const COMMODITYS_GET = 'COMMODITYS_GET';
export const COMMODITYS_GET_SUCCESS = 'COMMODITYS_GET_SUCCESS';
export const COMMODITYS_GET_FAILURE = 'COMMODITYS_GET_FAILURE';

/* Initial State */

const initialState = Immutable.fromJS({
  commoditys: [],

  //
  // Get commoditys
  //
  commoditysGetError: null,
  commoditysGetFetching: false,
  commoditysGetFetched: false,
});

/* Actions creators */

//
// Get commoditys
//
export const commoditysGet = () => ({
  type: COMMODITYS_GET,
  payload: {},
});
export const commoditysGetSuccess = data => ({
  type: COMMODITYS_GET_SUCCESS,
  payload: { ...data },
});
export const commoditysGetFailure = error => ({
  type: COMMODITYS_GET_FAILURE,
  payload: { error },
});

/* Reducer */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    //
    // Get commoditys
    //
    case COMMODITYS_GET: {
      return state
        .set('commoditysGetError', null)
        .set('commoditysGetFetching', true)
        .set('commoditysGetFetched', false);
    }
    case COMMODITYS_GET_SUCCESS: {
      const { data } = action.payload;

      return state
        .set('commoditys', Immutable.fromJS(data))
        .set('commoditysGetError', null)
        .set('commoditysGetFetching', false)
        .set('commoditysGetFetched', true);
    }
    case COMMODITYS_GET_FAILURE: {
      const { error } = action.payload;
      return state
        .set('commoditysGetError', error)
        .set('commoditysGetFetching', false)
        .set('commoditysGetFetched', true);
    }

    default: {
      return state;
    }
  }
}
