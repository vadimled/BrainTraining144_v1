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
  [types.CHECKIN_SELECTED_FIGURE ]: (state, {payload}) => {
    const arr = state.currShapesId.slice();
    const fg = state.full144List.find(s => s.id === payload)
    arr.push(fg)
    return {
      ...state,
      currShapesId: arr
    }
  },
  
});

export default gameReducer;
