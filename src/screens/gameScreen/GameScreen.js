/**
 * GameScreen
 * @author Vadim Malckin
 * created on 12/07/2020
 */

import React from 'react';
import { GameScreenContainer } from './GameScreen.styled';
import FiguresField from '../../components/figurasField';

const GameScreen = () => {
  return (
    <GameScreenContainer source={require('../../../assets/background.png')}>
      <FiguresField />
    </GameScreenContainer>
  );
};


export default GameScreen;
