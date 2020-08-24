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
import { COLORS, size, TEXT, CONFIG } from '../../utils/constants';
import { AntDesign } from '@expo/vector-icons';

const Figure = ({
  onBlur,
  onCheckFigure,
  width,
  height,
  mH,
  mV,
  disabled,
  config: { id, shapeBig, colorBig, shapeSmall, colorSmall }
}) => {
  const [action, setAction] = useState(0);
  let scale = useRef(new Animated.Value(1)).current;
  let scaleStart = useRef(new Animated.Value(0)).current;
  const {
    action: { cancelSelection, checkInFigure, selectFigure, stopSelection }
  } = CONFIG;

  useEffect(() => {
    Animated.timing(scaleStart, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  }, []);

  useEffect(() => {
    if (action === selectFigure) {
      onBlur(true);
      Animated.timing(scale, {
        toValue: 2,
        duration: 800,
        useNativeDriver: true
      }).start();
    } else if (action === cancelSelection) {
      onBlur(false);
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true
      }).start();
      setAction(null);
    } else if (action === checkInFigure) {
      Animated.timing(scale, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      }).start(() => onCheckFigure(id));
      onBlur(false);
    } else if (action === stopSelection) {
      Animated.timing(scale, null).stop();
      onBlur(false);
    }
  }, [action]);

  const onGestureEvent = Animated.event([{ nativeEvent: { scale } }], { useNativeDriver: true });
  const onMoveStateChange = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      if (!disabled) {
        setAction(selectFigure);
      } else {
        setAction(stopSelection);
      }
    }
  };
  const handleAction = (action) => {
    if (action === TEXT.close) {
      setAction(cancelSelection);
    } else if (action === TEXT.check) {
      setAction(checkInFigure);
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
            action === selectFigure ? styles.absolute(width) : styles.relative,
            { transform: [{ scale }, { scale: scaleStart }] }
          ]}
        >
          <FigureTouchableContainer useForeground mH={mH} mV={mV}>
            <FigureContainerBgn
              source={require('../../../assets/figura_base.png')}
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
      </LongPressGestureHandler>

      {action === selectFigure && (
        <ActionsContainer
          width={width}
          height={height}
          screenWidth={Dimensions.get('window').width}
        >
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
