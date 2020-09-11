/**
 * SelectingActions
 * @author Vadim Malckin
 * created on 07/09/2020
 */

import React, { useState, useEffect } from 'react';
import {
  ClickAreaRestartButton,
  RestartButton,
  SelectingActionsContainer
} from './SelectingActions.styled';
import { Alert } from 'react-native';
import {useSelector} from "react-redux"
import {getFiguresInactive} from "@store/selectors"

const SelectingActions = ({ onRestart }) => {
  const btnInactive = require('../../../../../../../assets/button-inactive.png');
  const btnActive = require('../../../../../../../assets/button-active.png');
  const [btnUri, setBtnUri] = useState(btnInactive);
  const isFiguresInactive = useSelector(state => getFiguresInactive(state))
  
  
  useEffect(() => {
    setBtnUri(isFiguresInactive ? btnActive : btnInactive);
  }, [isFiguresInactive]);

  const onClickHandle = () => {
    console.log('Button with adjusted color pressed');
    Alert.alert('Alert Title', 'My Alert Msg', [
      { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
      { text: 'OK', onPress: onRestart }
    ]);
  };
  return (
    <SelectingActionsContainer>
      <ClickAreaRestartButton disabled={!isFiguresInactive} onPress={onClickHandle}>
        <RestartButton source={btnUri} resizeMode={'contain'} />
      </ClickAreaRestartButton>
    </SelectingActionsContainer>
  );
};

export default SelectingActions;
