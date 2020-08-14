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
  FigureContainerBgn,
  ActionsContainer
} from './Figure.styled';
import { Animated, Dimensions, StyleSheet } from 'react-native';
import { LongPressGestureHandler, State } from 'react-native-gesture-handler';
import Shape from '../shape';
import { size } from '../../utils/constants';
import FigureAction from "../figureAction"

const Figure = ({
  setDragging,
  onBlur,
  config: { id, shapeBig, colorBig, shapeSmall, colorSmall }
}) => {
  const [action, setAction] = useState(0);
  let scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    setDragging(true);
  }, []);

  useEffect(() => {
    if (action) {
      onBlur(true);
      Animated.timing(scale, {
        toValue: 2,
        duration: 800,
        useNativeDriver: true
      }).start();
    }
  }, [action]);

  const onGestureEvent = Animated.event([{ nativeEvent: { scale } }], { useNativeDriver: true });

  const screenWidth = Math.round(Dimensions.get('window').width);
  const w = screenWidth / 6 - 8;
  const h = (w - 8) * 1.1;
  const onMoveStateChange = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      setAction(State.ACTIVE);
    }
  };
  console.log('Width/Height: ', { w, h });
  return (
    <>
      <LongPressGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onMoveStateChange}
        minDurationMs={700}
        maxDist={10}
      >
        <Animated.View
          style={[
            action === State.ACTIVE ? styles.absolute(w) : styles.relative,
            { transform: [{ scale }] }
          ]}
        >
          <FigureTouchableContainer useForeground>
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
      </LongPressGestureHandler>

      <ActionsContainer width={w} height={h} screenWidth={Dimensions.get('window').width} >
        <FigureAction />
        <FigureAction />
      </ActionsContainer>
    </>
  );
};
const styles = StyleSheet.create({
  absolute: (w) => ({
    zIndex: 1000,
    position: 'absolute',
    left: Dimensions.get('window').width / 2 - w / 2,
    top: 100
  }),
  relative: {
    position: 'relative',
    zIndex: 0
  }
});
export default Figure;
