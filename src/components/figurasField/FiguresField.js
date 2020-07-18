/**
 * FiguresField
 * @author Vadim Malckin
 * created on 16/07/2020
 */

import React from 'react';
import {FiguresFieldContainer} from './FiguresField.styled';
import Figure from "../figure"

const FiguresField = ({config}) => {
  console.log({config})
  return (
    <FiguresFieldContainer>
      <Figure config={config}/>
    </FiguresFieldContainer>
  );
};

export default FiguresField;
