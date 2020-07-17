/**
 * FiguresField
 * @author Vadim Malckin
 * created on 16/07/2020
 */

import React from 'react';
import {FiguresFieldContainer} from './FiguresField.styled';
import Figure from "../figure"

const FiguresField = () => {
  return (
    <FiguresFieldContainer>
      <Figure config={{
          id        : 1,
          shapeBig  : 'triangle',
          colorBig  : "#474bf5",
          shapeSmall: "square",
          colorSmall: "#ff9C00"
      }}/>
    </FiguresFieldContainer>
  );
};

export default FiguresField;
