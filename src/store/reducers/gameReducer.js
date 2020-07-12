import types from '../types'
import createReducer from '../reducers/createReducer'

const initialState = {
  loading: false,
  full144List: null,
  currShapesId: []
};

const gameReducer = createReducer(initialState, {
  [types.SET_144_LIST ]: (state, {payload}) => {
    return {
      ...state,
      full144List: payload
    }
  }
  
  
});

export default gameReducer;
