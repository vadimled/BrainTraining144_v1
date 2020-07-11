import types from '../../store/types';
import createReducer from '../../store/reducers/createReducer';

const initialState = {
  data: {},
  loading: false
};

const userReducer = createReducer(initialState, {
  [types.FETCH_USER_SUCCESS]: (state, {payload}) => {
    return {
      ...state,
      data: {...payload}
    }
  },
  [types.DB_ADD_NEW_ENTRY_SUCCESS]: (state, {payload}) => {
    const newItem = {...state.db, [payload.id]: payload.data};
    return {
      ...state,
      db: newItem
    }
  },
  [types.DB_SET_ERROR]: (state, {payload}) => {
    return {
      ...state,
      dbError: {...state.dbError, ...{[payload]: payload}}
    }
  },
  [types.SET_LOADING]: (state, {payload}) => {
    return {
      ...state,
      loading: payload
    }
  }
});

export default userReducer;
