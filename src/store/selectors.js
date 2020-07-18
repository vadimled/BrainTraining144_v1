import { createSelector } from 'reselect';
import { config } from '../utils/constants';

export const
  getListItems = (state) => state.game.full144List,
  getCurrentGameType = (state) => state.game.currentGameType,
  getFiguresByCurrentType = createSelector(
    getListItems, getCurrentGameType,
    (arr, type) => {
    arr.length = config.type[type]?.gameField;
    return arr;
  });
