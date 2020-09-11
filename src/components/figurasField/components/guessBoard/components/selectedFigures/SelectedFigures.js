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
import { NUMBERS, selectedScreenWidth } from '@utils/constants';
import SelectingActions from '../selectingActions';

const SelectedFigures = ({
  list,
  amount,
  mH,
  mV,
  onCheckFigure,
  isFiguresInactive,
  onRestartAction,
  restartBtn
}) => {
  const columnNumber = amount <= 6 ? 3 : 4,
    w = (selectedScreenWidth - selectedScreenWidth * 0.08) / columnNumber - NUMBERS.mGuessH * 2,
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
                disabled={isFiguresInactive}
              />
            );
          })}
        </FiguresContainer>
      );
    };

  return (
    <SelectedFiguresContainer>
      {!restartBtn ? renderFigures() : <FiguresContainer />}
      <SelectingActionsContainer>
        <SelectingActions onRestart={onRestartAction} />
      </SelectingActionsContainer>
    </SelectedFiguresContainer>
  );
};

export default SelectedFigures;
