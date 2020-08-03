/**
 * Figure
 * @author Vadim Malckin
 * created on 16/07/2020
 */

import React, { useRef, useEffect, useState } from 'react';
import {
  FigureContainer,
  FigureTouchableContainer,
  SecondShape,
  FigureContainerBgn
} from './Figure.styled';
import {  Dimensions} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated'
import Shape from "../shape";
import { size } from '../../utils/constants';

const CARDWIDTH = moderateScale(120);
const CARDHEIGHT = moderateScale(160);

const Figure = ({ setDragging, config: { id, shapeBig, colorBig, shapeSmall, colorSmall } }) => {
  const [action, setAction] = useState(0);

  useEffect(() => {
    setDragging(true);
  }, []);
  
  const { cond, eq, add, set, Value, event } = Animated;
  let
  dragX = useRef(new Value(0)).current,
  dragY = useRef(new Value(0)).current,
  offsetX = useRef(new Value(0)).current,
  offsetY = useRef(new Value(0)).current,
  gestureState = useRef(new Value(-1)).current,
  onGestureEvent = event([{
    nativeEvent: {
      translationX: dragX,
      translationY: dragY,
      state: gestureState,
    }
  }]),
  transX = cond(
    eq(gestureState, State.ACTIVE),
    add(offsetX, dragX),
    set(offsetX, add(offsetX, dragX)),
  ),
  transY = cond(
    eq(gestureState, State.ACTIVE),
    add(offsetY, dragY),
    set(offsetY, add(offsetY, dragY)),
  );
  const screenWidth = Math.round(Dimensions.get('window').width);
  const w = screenWidth / 5 - 8;
  const h = (w - 8) * 1.1
  const onMoveStateChange = (event) => {
   console.log('------> Move: ', { event: event.nativeEvent });
       /*    if (event.nativeEvent.state === State.ACTIVE) {
     
         console.log('----2(State.ACTIVE)');
         pan.setValue({x: event.nativeEvent.x, y: event.nativeEvent.y});
       }*/
    if (event.nativeEvent.state === State.BEGAN) {
      // pan.setOffset({
      //   x: pan.x._value,
      //   y: pan.y._value
      // });
      //
     
    }
    if (event.nativeEvent.state === State.ACTIVE) {
      // pan.setValue({x: event.nativeEvent.x, y: event.nativeEvent.y});
      // pan.setValue({x: event.nativeEvent.x, y: event.nativeEvent.y});
      // pan.x._value = event.nativeEvent.x
      // pan.y._value = event.nativeEvent.y
      setAction(State.ACTIVE)
      console.log(({
        xE: event.nativeEvent.x,
        yE: event.nativeEvent.y
      }))
      // pan.setValue(0);
    }
    if (event.nativeEvent.state === State.END) {
      // pan.flattenOffset();
      setAction(State.END)
    }
  };
  console.log("----> action=",action)
  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onMoveStateChange}
      hitSlop={{left: -20, right: -20, top: -20, bottom: -20}}
    >
      <Animated.View
        style={{transform: [{translateX: transX}, {translateY: transY}]}}
      >
        <FigureTouchableContainer useForeground isActivated={action === State.ACTIVE}>
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
    </PanGestureHandler>
  );
};

export default Figure;
