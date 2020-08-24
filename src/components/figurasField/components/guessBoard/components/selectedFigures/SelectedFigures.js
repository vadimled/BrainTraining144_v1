/**
 * SelectedFigures
 * @author Vadim Malckin
 * created on 21/08/2020
 */

import React from 'react';
import { SelectedFiguresContainer, ViewTemp } from './SelectedFigures.styled';
import Figure from '../../../figure';
import { NUMBERS, screenWidth } from '../../../../../../utils/constants';

const SelectedFigures = ({ list, amount, mH, mV, onCheckFigure, disabled }) => {
  const columnNumber = amount <= 8 ? 4 : 5;
  const w = (screenWidth - (screenWidth * 8) / 100) / columnNumber - NUMBERS.mGuessH * 2; //3.8
  const h = w * 1.1;

  // console.log("Width=",w)
  // console.log("ColumnNumber=",columnNumber)

  const renderFigures = () => {
    return (
      <ViewTemp>
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
              onBlur={()=>{}}
              disabled={disabled}
            />
          ); //1.8
        })}
      </ViewTemp>
    );
  };

  return <SelectedFiguresContainer>{renderFigures()}</SelectedFiguresContainer>;
};

export default SelectedFigures;
