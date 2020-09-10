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

const SelectingActions = ({ isFiguresInactive, onRestart }) => {
  const btnInactive = require('../../../../../../../assets/button-inactive.png');
  const btnActive = require('../../../../../../../assets/button-active.png');
  const [btnUri, setBtnUri] = useState(btnInactive);

  useEffect(() => {
    setBtnUri(isFiguresInactive ? btnActive : btnInactive);
  }, [isFiguresInactive]);

  const onClickHandle = () => {
    console.log('Button with adjusted color pressed');
    Alert.alert('Alert Title', 'My Alert Msg', [
      { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
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
