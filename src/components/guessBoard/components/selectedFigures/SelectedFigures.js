/**
 * SelectedFigures
 * @author Vadim Malckin
 * created on 21/08/2020
 */

import React from 'react';
import {SelectedFiguresContainer, ViewTemp} from './SelectedFigures.styled';
import Figure from '../../../figure';
import {NUMBERS, screenWidth} from '../../../../utils/constants';

const SelectedFigures = ({ list, amount, margin }) => {
  const w = ((screenWidth-(screenWidth*8/100)) / 4)-(NUMBERS.marginGuessBoard*2);
  const h = w * 1.1;
  
  console.log("Width=",w)
  
  const renderFigures = () => {
    return (
      <ViewTemp>
        {list.map((item, index) => {
          return <Figure key={index} config={item} width={w} height={h} margin={margin}/>;
        })        }
      </ViewTemp>
  )};

  return <SelectedFiguresContainer>{renderFigures()}</SelectedFiguresContainer>;
};

export default SelectedFigures;
