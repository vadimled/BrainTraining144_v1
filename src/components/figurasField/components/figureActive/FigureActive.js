/**
 * Figure
 * @author Vadim Malckin
 * created on 16/07/2020
 */

import React, { useRef, useEffect, useState } from 'react';
import { ActionsContainer } from './FigureActive.styled';
import { Animated, Dimensions, StyleSheet } from 'react-native';
import { LongPressGestureHandler, State } from 'react-native-gesture-handler';
import { COLORS, TEXT, CONFIG } from '@utils/constants';
import { AntDesign } from '@expo/vector-icons';
import Figure from '../components-Figure/figure';
import { useSelector } from 'react-redux';
import { getRestartBtn } from 'store/selectors';
import {getRandomArbitrary, getRandomInt} from "@utils/helper"

const FigureActive = ({ onBlur, onCheckFigure, width, height, mH, mV, disabled, config }) => {
  const [action, setAction] = useState(0);
  const isRestartBtn = useSelector((state) => getRestartBtn(state));
  let scale = useRef(new Animated.Value(1)).current;
  const {
    action: { cancelSelection, checkInFigure, selectFigure, stopSelection }
  } = CONFIG;

  useEffect(() => {
    if (action === selectFigure && !disabled) {
      onBlur(true);
      Animated.timing(scale, {
        toValue: 2,
        duration: 500,
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
        duration: 300,
        useNativeDriver: true
      }).start(() => onCheckFigure(config.id));
      onBlur(false);
    }
  }, [action]);

  useEffect(() => {
    if (isRestartBtn) {
      Animated.timing(scale, {
        toValue: getRandomArbitrary(1.1, 2,5),
        duration: getRandomInt(200, 600),
        useNativeDriver: true
      }).start(() =>
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true
        }).start()
      );
    }
  }, [isRestartBtn]);

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
        onGestureEvent={!disabled ? onGestureEvent : null}
        onHandlerStateChange={onMoveStateChange}
        minDurationMs={500}
        maxDist={10}
      >
        <Animated.View
          style={[
            action === selectFigure && !disabled ? styles.absolute(width) : styles.relative,
            { transform: [{ scale }] }
          ]}
        >
          <Figure height={height} width={width} config={config} mH={mH} mV={mV} />
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

export default FigureActive;
