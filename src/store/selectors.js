import { createSelector } from 'reselect';
import { CONFIG } from 'utils/constants';

export const getListItems = (state) => state.game.full144List,
  getCurrentGameType = (state) => state.game.currentGameType,
  getSelectedFigures = (state) => state.game.selectedFigures,
  getSelectedFiguresAmount = (state) => state.game.selectedFigures.length,
  getFiguresInactive = (state) => state.game.isFiguresInactive,
  getRestartBtn = (state) => state.game.isRestartBtn,
  getFiguresByCurrentType = createSelector(
    getListItems,
    getCurrentGameType,
    getRestartBtn,
    (arr, type, restart) => {
      const length = CONFIG.type[type]?.gameField;
      let newArr = [];
      for (let i = 0; i < length; i++) {
        newArr.push(arr[i]);
      }
      return !restart ? newArr : newArr
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1]);
    }
  );
