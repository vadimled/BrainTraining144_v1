import { Dimensions } from 'react-native';
import { setCurrentGameType } from '../store/actions/gameActions';

export const COLORS = {
  tableFont: '#c1c1c1',
  tableFont100: '#E5E5E5',
  tableFont200: '#96a2aa',
  borderColor: '#151515',
  headerBottomBorder: '#b06a01',
  background: '#303030',
  headerBackground: '#212121',
  tableBackground: '#424242',
  tableNameBackground: '#4c4b4b',
  placeholder: '#807f7f',
  green900: '#032c28',
  green700: '#075951',
  green200: '#0a9385',
  green100: '#0FD1BE',
  white: '#fff',
  black: '#000',
  shape1: '#ff9C00',
  shape2: '#474bf5',
  shape3: '#ad1905',
  shape4: '#007813'
};
export const NUMBERS = {
  prefixIconSize: 24,
  mGameH: 8, // margin between the figures
  mGuessH: 10, // margin between the figures
  mGameV: 5, // margin between the figures
  mGuessV: 0 // margin between the figures
};

export const TEXT = {
  check: 'check',
  close: 'close'
};

export const GAMETYPE = {
  easy: 'easy',
  medium: 'medium',
  hard: 'hard'
};

export const CONFIG = {
  type: {
    easy: {
      gameField: 42,
      guessField: 4
    },
    medium: {
      gameField: 70,
      guessField: 8
    },
    hard: {
      gameField: 144,
      guessField: 12
    }
  },
  action: {
    selectFigure: 1,
    cancelSelection: 2,
    checkInFigure: 3,
    stopSelection: 4
  }
};

export const basicShapes = ['circle', 'triangle', 'square'];
export const basicColors = [COLORS.shape1, COLORS.shape2, COLORS.shape3, COLORS.shape4];
export const SIZE = {
  big: { widthIndex: 0.62, heightIndex: 0.62 },
  small: { widthIndex: 0.3, heightIndex: 0.3 }
};

export const screenWidth = Math.round(Dimensions.get('window').width);
export const selectedScreenWidth = Math.round(screenWidth * 0.7);
