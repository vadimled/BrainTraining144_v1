/**
 * Figure
 * @author Vadim Malckin
 * created on 16/07/2020
 */

import React, { useRef, useState} from 'react';
import {
  FigureContainer,
  FigureTouchableContainer,
  SecondShape,
  FigureContainerBgn
} from './Figure.styled';
import { Animated, Dimensions, PanResponder } from 'react-native';
import Shape from '../shape';
import { size } from '../../utils/constants';

const Figure = ({ setDragging, config: { id, shapeBig, colorBig, shapeSmall, colorSmall } }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderTerminate: () => false,
      onPanResponderGrant: () => {
        setDragging(false);
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {useNativeDriver: true}
      ),
      onPanResponderRelease: () => {
        setDragging(true);
        pan.flattenOffset();
      }
    })
  ).current;
  
  const screenWidth = Math.round(Dimensions.get('window').width);
  const w = screenWidth / 5 - 8;
  const h = (w - 8) * 1.1;

  const touchFigureHandle = () => {
    console.log({ id });
  };
  return (
    <Animated.View
      style={{
        transform: [{ translateX: pan.x }, { translateY: pan.y }],
        zIndex:2
      }}
      {...panResponder.panHandlers}
    >
      <FigureTouchableContainer onPress={touchFigureHandle} useForeground>
        <FigureContainerBgn
          source={require('../../../assets/figura_base.png')}
          width={w}
          height={h}
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
