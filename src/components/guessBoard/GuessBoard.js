/**
 * GuessBoard
 * @author Vadim Malckin
 * created on 21/08/2020
 */

import React from 'react';
import {GuessBoardContainer, Background} from './GuessBoard.styled';

const GuessBoard = () => {
  return (
    <GuessBoardContainer>
      <Background
        source={require('../../../assets/hangdesck.png')}
        resizeMode={"stretch"}
      />
    </GuessBoardContainer>
  );
};

export default GuessBoard;

