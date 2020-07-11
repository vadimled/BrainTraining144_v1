import types from '../types'
import createReducer from '../reducers/createReducer'

const initialState = {

};

const gameReducer = createReducer(initialState, {
  [types.SET_LOADING]: (state, {payload}) => {
    return {
      ...state,
      loading: payload
    }
  }
  
  
});

export default gameReducer;
