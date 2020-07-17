/**
 * Figure
 * @author Vadim Malckin
 * created on 16/07/2020
 */

import React from 'react';
import {
  FigureContainer,
  FigureTouchableContainer,
  SecondShape,
  FigureContainerBgn
} from './Figure.styled';
import Shape from '../shape';
import { size } from '../../utils/constants';

const Figure = ({ config: { id, shapeBig, colorBig, shapeSmall, colorSmall } }) => {
  const touchFigureHandle = () => {
    console.log({ id });
  };
  return (
    <FigureTouchableContainer onPress={touchFigureHandle} useForeground>
      <FigureContainerBgn source={require('../../../assets/figura_base.png')}>
        <FigureContainer>
          <Shape size={size.big} shape={shapeBig} color={colorBig} />
        </FigureContainer>
        <SecondShape>
          <Shape size={size.small} shape={shapeSmall} color={colorSmall} />
        </SecondShape>
      </FigureContainerBgn>
    </FigureTouchableContainer>
  );
};

export default Figure;
