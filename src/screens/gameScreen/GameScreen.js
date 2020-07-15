/**
 * GameScreen
 * @author Vadim Malckin
 * created on 12/07/2020
 */

import React, {useRef} from 'react';
import {GameScreenContainer} from './GameScreen.styled';
import {Text} from 'react-native';

const GameScreen = ({route}) => {
  const type = useRef(route.params.type);
  console.log(type.current)
  return (
    <GameScreenContainer source={require('../../../assets/background.png')}>
      <Text>
        STAM
      </Text>
    </GameScreenContainer>
  );
};

export default GameScreen;
