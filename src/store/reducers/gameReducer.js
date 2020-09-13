import types from '../types';
import createReducer from '../reducers/createReducer';
import { fillArray } from 'utils/helper';

const initialState = {
  loading: false,
  full144List: [],
  selectedFigures: [],
  guessedFigures: [],
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
    const arr = fillArray(state, state.selectedFigures, payload);
    return {
      ...state,
      selectedFigures: arr
    };
  },
  [types.SET_GUESSED_FIGURE]: (state, { payload }) => {
    const arr = fillArray(state, state.guessedFigures, payload);
    return {
      ...state,
      guessedFigures: arr
    };
  },
  [types.SET_FIGURES_INACTIVE]: (state, { payload }) => {
    return {
      ...state,
      isFiguresInactive: payload
    };
  },
  [types.SET_RESTART_BTN_MODE]: (state) => {
    return {
      ...state,
      isRestartBtn: true,
      isFiguresInactive: false
    };
  }
});

export default gameReducer;
