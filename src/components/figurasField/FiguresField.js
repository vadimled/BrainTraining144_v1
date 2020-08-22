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
import {
  getCurrentGameType,
  getFiguresByCurrentType,
  getSelectedFigures
} from '../../store/selectors';
import {
  FiguresFieldContainer,
  FiguresScrollContainer,
  GameContainer
} from './FiguresField.styled';
import { checkinSelectedFigure } from '../../store/actions/gameActions';
import GuessBoard from '../guessBoard';
import SelectedFigures from '../guessBoard/components/selectedFigures';
import InformArea from '../guessBoard/components/informArea';
import { screenWidth } from '../../utils/constants';
import { getSelectedFiguresAmount } from '../../utils/helper';

const FiguresField = ({ list, selectedFiguresList, checkFigure, currentGameType }) => {
  const [overlayFlag, setOverlayFlag] = useState(false);
  const scrollRef = useRef();
  const selectedFiguresAmount = useRef(getSelectedFiguresAmount(currentGameType)).current;
  const w = screenWidth / 6 - 8;
  const h = (w - 8) * 1.1;

  const handleBlur = () => {
    setOverlayFlag(!overlayFlag);
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true
    });
  };
  const renderFigures = () => {
    return list.map((item, index) => {
      return (
        <Figure
          key={index}
          config={item}
          onBlur={handleBlur}
          onCheckFigure={checkFigure}
          width={w}
          height={h}
        />
      );
    });
  };

  return (
    <FiguresFieldContainer>
      <GuessBoard>
        <InformArea />
        <SelectedFigures list={selectedFiguresList} amount={selectedFiguresAmount} />
      </GuessBoard>
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
    selectedFiguresList: getSelectedFigures(state),
    currentGameType: getCurrentGameType(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkFigure: (id) => dispatch(checkinSelectedFigure(id))
  };
};
export default connect(mapStateFromProps, mapDispatchToProps)(FiguresField);
