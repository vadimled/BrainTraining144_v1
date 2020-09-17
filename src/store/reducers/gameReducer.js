import types from '../types';
import createReducer from '../reducers/createReducer';
import { fillArray } from 'utils/helper';
import {GAME_MODE} from "utils/constants"

const initialState = {
  loading: false,
  full144List: [],
  selectedFigures: [],
  guessedFigures: [],
  currentGameType: null,
  isFiguresInactive: false,
  gameMode: GAME_MODE.select,
  clearSelectedContainer: false
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
      selectedFigures: arr,
      clearSelectedContainer: false
    };
  },
  [types.SET_GUESSED_FIGURE]: (state, { payload }) => {
    const arr = fillArray(state, state.guessedFigures, payload);
    return {
      ...state,
      guessedFigures: arr,
      clearSelectedContainer: false
    };
  },
  [types.SET_FIGURES_INACTIVE]: (state, { payload }) => {
    return {
      ...state,
      isFiguresInactive: payload
    };
  },
  [types.SET_GAME_MODE]: (state, { payload }) => {
    return {
      ...state,
      gameMode: payload,
      isFiguresInactive: false,
      clearSelectedContainer: true
    };
  }
});

export default gameReducer;
