/**
 * FigureAction
 * @author Vadim Malckin
 * created on 14/08/2020
 */

import React from 'react';
import {FigureActionContainer, FigureBase, FigureActionIcon} from './FigureAction.styled';


const FigureAction = ({onClose}) => {

  return (
    <FigureActionContainer onPress={onClose} activeOpacity={0.1} style={{shadowRadius: 2}}>
 
    </FigureActionContainer>
  );
};

export default FigureAction;
