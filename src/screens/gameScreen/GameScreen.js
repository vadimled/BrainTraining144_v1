/**
 * GameScreen
 * @author Vadim Malckin
 * created on 12/07/2020
 */

import React from 'react';
import { GameScreenContainer, GuessContainer } from './GameScreen.styled';
import FiguresField from '../../components/figurasField';
import { getFiguresByCurrentType } from '../../store/selectors';
import { connect } from 'react-redux';

const GameScreen = ({ route, array }) => {
  return (
    <GameScreenContainer source={require('../../../assets/background.png')}>
      <GuessContainer />
      <FiguresField list={array} />
    </GameScreenContainer>
  );
};

const mapStateFromProps = (state) => {
  return {
    array: getFiguresByCurrentType(state)
  };
};
export default connect(mapStateFromProps)(GameScreen);
