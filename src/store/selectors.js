import { createSelector } from 'reselect';
import { config } from '../utils/constants';

export const getListItems = (state) => state.game.full144List,
  getCurrentGameType = (state) => state.game.currentGameType,
  getFiguresByCurrentType = createSelector(getListItems, getCurrentGameType, (arr, type) => {
    const length = config.type[type]?.gameField;
    let newArr = [];
    for (let i = 0; i < length; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  });
