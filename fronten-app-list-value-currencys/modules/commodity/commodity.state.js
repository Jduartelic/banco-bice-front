import Immutable from 'immutable';

/* Actions */

//
// Get commoditys
//
export const COMMODITYS_GET = 'COMMODITYS_GET';
export const COMMODITYS_GET_SUCCESS = 'COMMODITYS_GET_SUCCESS';
export const COMMODITYS_GET_FAILURE = 'COMMODITYS_GET_FAILURE';

//
// Get detail info commoditys
//
export const DETAIL_INFO_COMMODITYS_GET = 'DETAIL_INFO_COMMODITYS_GET';
export const DETAIL_INFO_COMMODITYS_GET_FAILURE = 'DETAIL_INFO_COMMODITYS_GET_FAILURE';
export const DETAIL_INFO_COMMODITYS_GET_SUCCESS = 'DETAIL_INFO_COMMODITYS_GET_SUCCESS';

/* Initial State */

const initialState = Immutable.fromJS({
  commoditys: {},
  detailnfoCommodity: {},

  //
  // Get commoditys
  //
  commoditysGetError: null,
  commoditysGetFetching: false,
  commoditysGetFetched: false,

  //
  // Get commoditys
  //
  detailnfoCommoditysGetError: null,
  detailnfoCommoditysGetFetching: false,
  detailnfoCommoditysGetFetched: false,
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

//
// Get detail info commoditys
//
export const detailnfoCommoditysGet = key => ({
  type: DETAIL_INFO_COMMODITYS_GET,
  payload: { key },
});
export const detailnfoCommoditysGetSuccess = data => ({
  type: DETAIL_INFO_COMMODITYS_GET_SUCCESS,
  payload: { ...data },
});
export const detailnfoCommoditysGetFailure = error => ({
  type: DETAIL_INFO_COMMODITYS_GET_FAILURE,
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

    //
    //  Get detail info commoditys
    //
    case DETAIL_INFO_COMMODITYS_GET: {
      return state
        .set('detailnfoCommoditysGetError', null)
        .set('detailnfoCommoditysGetFetching', true)
        .set('detailnfoCommoditysGetFetched', false);
    }
    case DETAIL_INFO_COMMODITYS_GET_SUCCESS: {
      const { data } = action.payload;

      return state
        .set('detailnfoCommodity', Immutable.fromJS(data))
        .set('detailnfoCommoditysGetError', null)
        .set('detailnfoCommoditysGetFetching', false)
        .set('detailnfoCommoditysGetFetched', true);
    }
    case DETAIL_INFO_COMMODITYS_GET_FAILURE: {
      const { error } = action.payload;
      return state
        .set('detailnfoCommoditysGetError', error)
        .set('detailnfoCommoditysGetFetching', false)
        .set('detailnfoCommoditysGetFetched', true);
    }

    default: {
      return state;
    }
  }
}
