/**
 * GameScreen
 * @author Vadim Malckin
 * created on 12/07/2020
 */

import React, {useRef} from 'react';
import {FieldContainer, GameScreenContainer, GuessContainer, SafeAreaContainer} from './GameScreen.styled';
import FiguresField from "../../components/figurasField"

const GameScreen = ({route}) => {
  const type = useRef(route.params.type);
  console.log(type.current)
  return (
    <GameScreenContainer source={require('../../../assets/background.png')}>
        <GuessContainer></GuessContainer>
          <FiguresField />
    </GameScreenContainer>
  );
};

export default GameScreen;
