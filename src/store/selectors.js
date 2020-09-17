import { createSelector } from 'reselect';
import {CONFIG, GAME_MODE} from 'utils/constants';

export const getListItems = (state) => state.game.full144List,
  getCurrentGameType = (state) => state.game.currentGameType,
  getSelectedFigures = (state) => state.game.selectedFigures,
  getGuessedFigures = (state) => state.game.guessedFigures,
  getSelectedFiguresAmount = (state) => state.game.selectedFigures.length,
  getFiguresInactive = (state) => state.game.isFiguresInactive,
  getGameMode = (state) => state.game.gameMode,
  getSelectedContainerMode = (state) => state.game.clearSelectedContainer,
  getFiguresByCurrentType = createSelector(
    getListItems,
    getCurrentGameType,
    getGameMode,
    (arr, type, mode) => {
      const length = CONFIG.type[type]?.gameField;
      let newArr = [];
      for (let i = 0; i < length; i++) {
        newArr.push(arr[i]);
      }
      return mode === GAME_MODE.select ? newArr : newArr
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1]);
    }
  );
