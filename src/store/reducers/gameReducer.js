import types from '../types';
import createReducer from '../reducers/createReducer';

const initialState = {
  loading: false,
  full144List: [],
  currShapesId: [],
  currentGameType: null,
  isFiguresInactive: false,
  isRestartBtn: false
};

const gameReducer = createReducer(initialState, {
  [types.SET_144_LIST]: (state, { payload }) => {
    return {
      ...state,
      full144List: payload
    };
  },
  [types.SET_CURRENT_GAME_TYPE]: (state, { payload }) => {
    return {
      ...state,
      currentGameType: payload
    };
  },
  [types.CHECKIN_SELECTED_FIGURE]: (state, { payload }) => {
    let arr = [...state.currShapesId];
    if (state.currShapesId?.some((s) => s.id === payload)) {
      arr = state.currShapesId.map((s) => {
        if (s.id !== payload) {
          return s;
        }
      });
    } else {
      const fg = state.full144List.find((s) => s.id === payload);
      arr.push(fg);
    }
    return {
      ...state,
      currShapesId: arr
    };
  },
  [types.SET_FIGURES_INACTIVE]: (state, { payload }) => {
    return {
      ...state,
      isFiguresInactive: payload
    };
  },
  [types.SET_RESTART_BTN_MODE]: state => {
    return {
      ...state,
      isRestartBtn: true,
      isFiguresInactive: false
    };
  }
});

export default gameReducer;
