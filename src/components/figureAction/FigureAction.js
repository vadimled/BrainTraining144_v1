/**
 * FigureAction
 * @author Vadim Malckin
 * created on 14/08/2020
 */

import React from 'react';
import {FigureActionContainer, FigureBase, FigureActionIcon} from './FigureAction.styled';
import { AntDesign } from '@expo/vector-icons';

const FigureAction = ({onClose}) => {

  return (
    <FigureActionContainer onPress={onClose} activeOpacity={0.1} style={{shadowRadius: 2}}>
      <AntDesign name="check" size={24} color="black" />
    </FigureActionContainer>
  );
};

export default FigureAction;
