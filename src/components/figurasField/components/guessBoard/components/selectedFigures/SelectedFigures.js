/**
 * SelectedFigures
 * @author Vadim Malckin
 * created on 21/08/2020
 */

import React, { useEffect, useRef } from 'react';
import {
  SelectedFiguresContainer,
  FiguresContainer,
  SelectingActionsContainer
} from './SelectedFigures.styled';
import Figure from '../../../components-Figure/figure';
import {NUMBERS, screenWidth, selectedScreenWidth} from '../../../../../../utils/constants';

const SelectedFigures = ({ list, amount, mH, mV, onCheckFigure, disabled }) => {
  const columnNumber = amount <= 6 ? 3 : 4;

  const w = (selectedScreenWidth - (selectedScreenWidth * 8) / 100) / columnNumber - NUMBERS.mGuessH * 2,
  h = w * 1.1;

  console.log(`amount=${amount}; screenWidth = ${selectedScreenWidth}; Width=${w}`);
  // console.log("ColumnNumber=",columnNumber)

  const renderFigures = () => {
    return (
      <FiguresContainer>
        {list.map((item, index) => {
          return (
            <Figure
              key={index}
              config={item}
              width={w}
              height={h}
              mH={mH}
              mV={mV}
              onCheckFigure={onCheckFigure}
              onBlur={() => {}}
              disabled={disabled}
            />
          );
        })}
      </FiguresContainer>
    );
  };

  return (
    <SelectedFiguresContainer>
      {renderFigures()}
      <SelectingActionsContainer />
    </SelectedFiguresContainer>
  );
};

export default SelectedFigures;
