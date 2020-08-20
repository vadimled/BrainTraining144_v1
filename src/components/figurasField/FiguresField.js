/**
 * FiguresField
 * @author Vadim Malckin
 * created on 16/07/2020
 */

import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import Figure from '../figure';
import { BlurView } from 'expo-blur';
import { connect } from 'react-redux';
import { getFiguresByCurrentType } from '../../store/selectors';
import {
  FiguresFieldContainer,
  FiguresScrollContainer,
  GameContainer,
  GuessContainer
} from './FiguresField.styled';
import { checkinSelectedFigure } from '../../store/actions/gameActions';

const FiguresField = ({ list, checkFigure }) => {
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
      return <Figure key={index} config={item} onBlur={handleBlur} onCheckFigure={checkFigure} />;
    });
  };

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
    list: getFiguresByCurrentType(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkFigure: (id) => dispatch(checkinSelectedFigure(id))
  };
};
export default connect(mapStateFromProps, mapDispatchToProps)(FiguresField);
