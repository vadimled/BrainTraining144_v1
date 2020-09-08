/**
 * SelectedFigures
 * @author Vadim Malckin
 * created on 21/08/2020
 */

import React from 'react';
import {
  FiguresContainer,
  SelectedFiguresContainer,
  SelectingActionsContainer
} from './SelectedFigures.styled';
import Figure from '../../../components-Figure/figure';
import { NUMBERS, selectedScreenWidth } from '../../../../../../utils/constants';
import SelectingActions from "../selectingActions"

const SelectedFigures = ({ list, amount, mH, mV, onCheckFigure, disabled, isFiguresInactive }) => {
  
  const columnNumber = amount <= 6 ? 3 : 4,
    w = (selectedScreenWidth - (selectedScreenWidth * 0.08)) / columnNumber - NUMBERS.mGuessH * 2,
    h = w * 1.1,
    renderFigures = () => {
      return (
        <FiguresContainer>
          {list.map((item, index) => {
            return (
              <Figure
                key={index}
                config={item || {}}
                width={Math.round(w)}
                height={Math.round(h)}
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
      <SelectingActionsContainer>
        <SelectingActions isFiguresInactive={disabled}/>
      </SelectingActionsContainer>
    </SelectedFiguresContainer>
  );
};

export default SelectedFigures;
