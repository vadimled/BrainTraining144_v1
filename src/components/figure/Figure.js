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
import {Dimensions } from "react-native";
import Shape from '../shape';
import { size } from '../../utils/constants';

const Figure = ({ config: { id, shapeBig, colorBig, shapeSmall, colorSmall } }) => {
  const screenWidth = Math.round(Dimensions.get('window').width);
  const w = (screenWidth/5)-8;
  const h = (w-8)*1.1;

  
  const touchFigureHandle = () => {
    console.log({ id });
  };
  return (
    <FigureTouchableContainer onPress={touchFigureHandle} useForeground>
      <FigureContainerBgn source={require('../../../assets/figura_base.png')} width={w} height={h}>
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
