import { createSelector } from 'reselect';
import { CONFIG } from '../utils/constants';

export const getListItems = (state) => state.game.full144List,
  getCurrentGameType = (state) => state.game.currentGameType,
  getSelectedFitures = (state) => state.game.currShapesId,
  getFiguresByCurrentType = createSelector(
    getListItems,
    getCurrentGameType,
    getSelectedFitures,
    (arr, type, selected) => {
    const length = CONFIG.type[type]?.gameField;
    let newArr = [];
    for (let i = 0; i < length; i++) {
      if(!selected.includes(arr[i].id)) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  });
