/**
 * GuessBoard
 * @author Vadim Malckin
 * created on 21/08/2020
 */

import React from 'react';
import { GuessBoardContainer} from './GuessBoard.styled';

const GuessBoard = ({ children }) => {
  return (
    <GuessBoardContainer source={require('../../../assets/hangdesck.png')} resizeMode={'stretch'}>
      {children}
    </GuessBoardContainer>
  );
};

export default GuessBoard;
