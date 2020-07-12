/**
 * StartScreen
 * @author Vadim Malckin
 * created on 19/06/2020
 */

import React, { useEffect, useRef } from 'react';
import {BtnBackground, BtnTitle, ButtonsGroup, StartScreenContainer, StartTitle} from './StartScreen.styled';
import { useDispatch } from 'react-redux';
import { getListOf144Shapes } from '../../utils/helper';
import { set144List } from '../../store/actions/gameActions';

const StartScreen = ({ navigation }) => {
  let shapeList = useRef(getListOf144Shapes());

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(set144List(shapeList));
  }, []);

  const goToEasy = () => {
    navigation.navigate('Game',{type: "easy"});
  };
  const goToMedium = () => {
    navigation.navigate('Game',{type: "medium"});
  };
  const goToHard = () => {
    navigation.navigate('Game',{type: "hard"});
  };

  return (
    <StartScreenContainer source={require('../../../assets/background.png')}>
      <StartTitle>Training Settings</StartTitle>
      <ButtonsGroup>
        <BtnBackground onPress={goToEasy} activeOpacity={0.5}>
          <BtnTitle>Easy</BtnTitle>
        </BtnBackground>
        <BtnBackground onPress={goToMedium} activeOpacity={0.5}>
          <BtnTitle>Medium</BtnTitle>
        </BtnBackground>
        <BtnBackground onPress={goToHard} activeOpacity={0.5}>
          <BtnTitle>Hard</BtnTitle>
        </BtnBackground>
      </ButtonsGroup>
    </StartScreenContainer>
  );
};

export default StartScreen;
