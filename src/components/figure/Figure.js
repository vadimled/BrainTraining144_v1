/**
 * Figure
 * @author Vadim Malckin
 * created on 16/07/2020
 */

import React, { useRef,useEffect, useState } from 'react';
import {
  FigureContainer,
  FigureTouchableContainer,
  SecondShape,
  FigureContainerBgn
} from './Figure.styled';
import { Animated, Dimensions, PanResponder } from 'react-native';
import Shape from '../shape';
import { size } from '../../utils/constants';
import { TapGestureHandler, State } from 'react-native-gesture-handler';

const Figure = ({ setDragging, config: { id, shapeBig, colorBig, shapeSmall, colorSmall } }) => {
  // const pan = useRef(new Animated.ValueXY()).current;
  const [action, setAction] = useState(false);
  
  useEffect(() => {
    setDragging(true);
  },[])
  
  const scale = new Animated.Value(1);
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
    console.log("-----touchFigureHandle  id=",{ id });
  };

  const onZoomEvent = Animated.event([{ nativeEvent: { scale } }], { useNativeDriver: true });
  const onZoomStateChange = (event) => {
    console.log({action,state: event.nativeEvent.state});

    if (event.nativeEvent.state !== State.ACTIVE) {
      console.log('----1 action:', action);
      Animated.timing(scale, {
        duration: 900,
        toValue: 1.1,
        useNativeDriver: true
      }).start(() => {
         setAction(true);
        setDragging(false);
        console.log('----2 action:', action);
      });
    } else if(!action){
      setAction(false);
      setDragging(true);
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true
      }).start(() => console.log('----3 oldState action:', action));
    }
  };
  return (
    <TapGestureHandler onGestureEvent={onZoomEvent} onHandlerStateChange={onZoomStateChange}>
      <Animated.View
        style={{
          transform: [{ scale }],
          zIndex: 20000
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
  );
};

export default Figure;
