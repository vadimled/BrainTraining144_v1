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
import {State} from "react-native-gesture-handler"

const Figure = ({ setDragging, config: { id, shapeBig, colorBig, shapeSmall, colorSmall } }) => {
  const [action, setAction] = useState(false);
  const pan = useRef(new Animated.ValueXY()).current;
  const scale = useRef(new Animated.Value(1)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderTerminate: () => false,
      onPanResponderGrant: () => {
        Animated.timing(scale, {
          duration: 1000,
          toValue: 1.1
        }).start(() => {
          setAction(true);
          // setDragging(false);
          console.log('----2 action:', action);
        });
    
     
  
        setDragging(false);
        // pan.setOffset({
        //   x: pan.x._value,
        //   y: pan.y._value
        // });
      },
      onPanResponderMove: Animated.event([{ nativeEvent: { scale } }]),
      onPanResponderRelease: () => {
        setDragging(true);
        // pan.flattenOffset();
        if (!action) {
          console.log('----3(START ACTION) action=', action)
          setAction(false);
          setDragging(true);
          Animated.spring(scale, {
            toValue: 1
          }).start(() => console.log('----4(END ACTION) action=', action) || setDragging(true));
        }
  
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
        transform: [{ scale }],
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
