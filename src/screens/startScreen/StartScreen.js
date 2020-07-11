/**
 * StartScreen
 * @author Vadim Malckin
 * created on 19/06/2020
 */

import React, {useEffect, useRef, useState} from 'react';
import {StartScreenContainer, StartScreenProgress} from './StartScreen.styled';
import ProgressBar from 'react-native-progress/Bar';
import * as actions from '../../store/actions/userActions';
import {useDispatch} from 'react-redux';
import {COLORS} from '../../utils/constants';

const StartScreen = ({navigation}) => {
  const [progress, setProgress] = useState(0);
  
  const interval = useRef(0);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(actions.fetchUser())
  },[dispatch]);
  
  useEffect(() => {
    if (progress <= 1) {
      interval.current = setInterval(() => {
        setProgress(progress => progress + 0.1);
      }, 500);
    }
    else {
      navigation.navigate('Login')
      clearInterval(interval.current);
    }
    return () => clearInterval(interval.current);
  }, [progress, navigation])
  
  return (
    <StartScreenContainer source={require('../../../assets/background.png')}>
      <StartScreenProgress>
        <ProgressBar
          progress={progress}
          width={350}
          height={2}
          color={COLORS.green100}
          unfilledColor={COLORS.green700}
          style={{borderWidth: 0}}
        />
      </StartScreenProgress>
    </StartScreenContainer>
  );
};

export default StartScreen;
