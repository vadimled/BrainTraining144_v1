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
import { Animated, Dimensions, PanResponder } from 'react-native';
import Shape from '../shape';
import { size } from '../../utils/constants';
import { TapGestureHandler, PanGestureHandler, State } from 'react-native-gesture-handler';

const Figure = ({ setDragging, config: { id, shapeBig, colorBig, shapeSmall, colorSmall } }) => {
  const [action, setAction] = useState(false);

  useEffect(() => {
    setDragging(true);
  }, []);

  const scale = useRef(new Animated.Value(1)).current;
  const pan = useRef(new Animated.ValueXY()).current;
  // const panResponder = useRef(
  //   PanResponder.create({
  //     onStartShouldSetPanResponder: () => true,
  //     onMoveShouldSetPanResponder: () => true,
  //     onPanResponderTerminate: () => false,
  //     onPanResponderGrant: () => {
  //       setDragging(false);
  //       pan.setOffset({
  //         x: pan.x._value,
  //         y: pan.y._value
  //       });
  //     },
  //     onPanResponderMove: (evt, gestureState) => {
  //       // do whatever you need here
  //       // be sure to return the Animated.event as it returns a function
  //       return Animated.event(
  //         [
  //           null,
  //           { dx: pan.x, dy: pan.y }
  //         ]
  //       )(evt, gestureState);
  //     },
  //     onPanResponderRelease: () => {
  //       setDragging(true);
  //       pan.flattenOffset();
  //     }
  //   })
  // ).current;

  const screenWidth = Math.round(Dimensions.get('window').width);
  const w = screenWidth / 5 - 8;
  const h = (w - 8) * 1.1;

  const touchFigureHandle = () => {
    console.log('-----touchFigureHandle  id=', { id });
  };
  let counter = 0;
  const onZoomEvent = Animated.event([{ nativeEvent: { scale } }], { useNativeDriver: true });
  const onMoveEvent = Animated.event(
    [{ nativeEvent: { translationX: pan.x, translationY: pan.y } }],
    { useNativeDriver: true }
  );

  const onZoomStateChange = (event) => {
    console.log('------> Zoom : ', { counter, action, eState: event.nativeEvent.state });

    if (event.nativeEvent.state === State.BEGAN && !action) {
      console.log('----1 action:', action);
      Animated.timing(scale, {
        duration: 1000,
        toValue: 1.1,
        useNativeDriver: true
      }).start(() => {
        setAction(true);
        setDragging(false);
        console.log('----2 action:', action);
      });
    } else if (event.nativeEvent.state === State.END && !action) {
      console.log('----3(START ACTION) action=', action);
      setAction(false);
      setDragging(true);
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true
      }).start(() => console.log('----4(END ACTION) action=', action) || setDragging(true));
    }
    if (action && event.nativeEvent.state === State.BEGAN) {
      console.log('----5(State.ACTIVE)');
      pan.setValue({ x: event.nativeEvent.x, y: event.nativeEvent.y });
    }
    counter++;
  };

  const onMoveStateChange = (event) => {
    console.log('------> Move: ', { event: event.nativeEvent });

    console.log('----6(State.ACTIVE)');

    pan.x = event.nativeEvent.x;
    pan.y = event.nativeEvent.y;
  };

  return (
    <PanGestureHandler
      onGestureEvent={onMoveEvent}
      onHandlerStateChange={onMoveStateChange}
      minPointers={2}
      maxPointers={2}
    >
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
          zIndex: 20000
        }}
      >
        <TapGestureHandler
          onGestureEvent={onZoomEvent}
          onHandlerStateChange={onZoomStateChange}
          minPointers={1}
          maxPointers={1}
        >
          <Animated.View
            style={{
              transform: [{ scale }]
            }}
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
        </TapGestureHandler>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Figure;
