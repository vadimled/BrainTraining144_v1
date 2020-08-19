/**
 * FiguresField
 * @author Vadim Malckin
 * created on 16/07/2020
 */

import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import Figure from '../figure';
import { BlurView } from 'expo-blur';
import { connect } from 'react-redux';
import { getCurrentGameType, getFiguresByCurrentType } from '../../store/selectors';
import {
  FiguresFieldContainer,
  FiguresScrollContainer,
  GameContainer,
  GuessContainer
} from './FiguresField.styled';

const FiguresField = ({ list, gameType }) => {
  const [overlayFlag, setOverlayFlag] = useState(false);
  const scrollRef = useRef();

  const handleBlur = () => {
    setOverlayFlag(!overlayFlag);
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true
    });
  };
  const renderFigures = () => {
    return list.map((item, index) => {
      return <Figure key={index} config={item} onBlur={handleBlur} />;
    });
  };

  useEffect(() => {
    console.log('----- useEffect!');
    renderFigures();
    return () => console.log('----- unmounted!');
  }, [gameType]);

  console.log(1, list.length, gameType);
  return (
    <FiguresFieldContainer style={styles.container}>
      <GuessContainer />
      <GameContainer>
        <FiguresScrollContainer ref={scrollRef}>
          {renderFigures()}
          {overlayFlag && (
            <BlurView
              intensity={90}
              style={[StyleSheet.absoluteFill, styles.absolute]}
              tint={'dark'}
            />
          )}
        </FiguresScrollContainer>
      </GameContainer>
    </FiguresFieldContainer>
  );
};

const styles = StyleSheet.create({
  absolute: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 200
  }
});

const mapStateFromProps = (state) => {
  return {
    list: getFiguresByCurrentType(state),
    gameType: getCurrentGameType(state)
  };
};
export default connect(mapStateFromProps)(FiguresField);
