/**
 * FigureActiveLayout
 * @author Vadim Malckin
 * created on 24/08/2020
 */

import React, { useEffect, useRef } from 'react';
import { size } from '../../../../../utils/constants';
import {
  FigureContainer,
  FigureContainerBgn,
  FigureTouchableContainer,
  SecondShape
} from './Figure.styled';
import Shape from '../shape';
import { Animated } from 'react-native';

const Figure = ({
  width,
  height,
  mH,
  mV,
  config: { shapeBig, colorBig, shapeSmall, colorSmall }
}) => {
  let scale = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  }, []);

  return (
    <Animated.View style={[{ transform: [{ scale }] }]}>
      <FigureTouchableContainer useForeground mH={mH} mV={mV}>
        <FigureContainerBgn
          source={require('../../../../../../assets/figure_base.png')}
          width={width}
          height={height}
        >
          <FigureContainer>
            <Shape size={size.big} shape={shapeBig} color={colorBig} />
          </FigureContainer>
          <SecondShape>
            <Shape size={size.small} shape={shapeSmall} color={colorSmall} />
          </SecondShape>
        </FigureContainerBgn>
      </FigureTouchableContainer>
    </Animated.View>
  );
};

export default Figure;
