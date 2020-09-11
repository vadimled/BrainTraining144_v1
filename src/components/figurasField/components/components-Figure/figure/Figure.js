/**
 * FigureActive
 * @author Vadim Malckin
 * created on 24/08/2020
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  FigureContainer,
  FigureContainerBgn,
  FigureTouchableContainer,
  SecondShape
} from './Figure.styled';
import Shape from '../shape';
import { Animated } from 'react-native';
import { SIZE } from 'utils/constants';

const Figure = ({
  width,
  height,
  mH,
  mV,
  config: { shapeBig, colorBig, shapeSmall, colorSmall }
}) => {
  const { small, big } = SIZE;
  const [smallShapeWidth, setSmallWidth] = useState(width * small.widthIndex);
  const [bigShapeWidth, setBigWidth] = useState(width * big.widthIndex);
  let scale = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  }, []);

  useEffect(() => {
    setSmallWidth(width * small.widthIndex);
    setBigWidth(width * big.widthIndex);
  }, [width, height]);

  return (
    <Animated.View style={[{ transform: [{ scale }] }]}>
      <FigureTouchableContainer useForeground mH={mH} mV={mV}>
        <FigureContainerBgn
          source={require('../../../../../../assets/figure_base.png')}
          width={width}
          height={height}
        >
          <FigureContainer>
            <Shape size={bigShapeWidth} shape={shapeBig} color={colorBig} />
          </FigureContainer>
          <SecondShape>
            <Shape size={smallShapeWidth} shape={shapeSmall} color={colorSmall} />
          </SecondShape>
        </FigureContainerBgn>
      </FigureTouchableContainer>
    </Animated.View>
  );
};

export default Figure;
