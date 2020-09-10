import { createSelector } from 'reselect';
import { CONFIG } from '../utils/constants';

export const getListItems = (state) => state.game.full144List,
  getCurrentGameType = (state) => state.game.currentGameType,
  getSelectedFigures = (state) => state.game.currShapesId,
  getSelectedFiguresAmount = (state) => state.game.currShapesId.length,
  getFiguresInactive = (state) => state.game.isFiguresInactive,
  getRestartBtn = (state) => state.game.isRestartBtn,
  getFiguresByCurrentType = createSelector(
    getListItems,
    getCurrentGameType,
    getSelectedFigures,
    (arr, type, selected) => {
      const length = CONFIG.type[type]?.gameField;
      let newArr = [];
      for (let i = 0; i < length; i++) {
        if (!selected.includes(arr[i].id)) { //TODO this code doesn't work
          newArr.push(arr[i]);
        }
      }
      return newArr;
    }
  );
