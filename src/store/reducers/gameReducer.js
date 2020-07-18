import types from '../types'
import createReducer from '../reducers/createReducer'

const initialState = {
  loading: false,
  full144List: [],
  currShapesId: [],
  currentGameType: null
};

const gameReducer = createReducer(initialState, {
  [types.SET_144_LIST ]: (state, {payload}) => {
    return {
      ...state,
      full144List: payload
    }
  },
 [types.SET_CURRENT_GAME_TYPE ]: (state, {payload}) => {
    return {
      ...state,
      currentGameType: payload
    }
  },
  
  
});

export default gameReducer;
