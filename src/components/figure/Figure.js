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
import { COLORS, size, TEXT } from '../../utils/constants';
import { AntDesign } from '@expo/vector-icons';

const Figure = ({
  onBlur,
  config: { shapeBig, colorBig, shapeSmall, colorSmall }
}) => {
  const [action, setAction] = useState(0);
  let scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (action === State.ACTIVE) {
      onBlur(true);
      Animated.timing(scale, {
        toValue: 2,
        duration: 800,
        useNativeDriver: true
      }).start();
    } else if (action === State.END) {
      onBlur(false);
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true
      }).start();
      setAction(null);
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
  const handleAction = (action) => {
    if (action === TEXT.close) {
      setAction(State.END);
    }
  };

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

      {action === State.ACTIVE && (
        <ActionsContainer width={w} height={h} screenWidth={Dimensions.get('window').width}>
          <AntDesign.Button
            onPress={() => handleAction(TEXT.check)}
            name="check"
            size={30}
            color={COLORS.shape4}
            iconStyle={{ marginRight: 0 }}
            backgroundColor="#f5e6c5"
          />
          <AntDesign.Button
            onPress={() => handleAction(TEXT.close)}
            name="close"
            size={30}
            color={COLORS.shape3}
            iconStyle={{ marginRight: 0 }}
            backgroundColor="#f5e6c5"
          />
        </ActionsContainer>
      )}
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
