/**
 * FiguresField
 * @author Vadim Malckin
 * created on 16/07/2020
 */

import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { connect } from 'react-redux';
import {
  getCurrentGameType,
  getFiguresByCurrentType,
  getFiguresInactive,
  getRestartBtn,
  getSelectedFigures,
  getSelectedFiguresAmount
} from '../../store/selectors';
import {
  FiguresFieldContainer,
  FiguresScrollContainer,
  GameContainer
} from './FiguresField.styled';
import {
  checkinSelectedFigure,
  onRestartAction,
  setFiguresInactive
} from '../../store/actions/gameActions';
import GuessBoard from './components/guessBoard';
import SelectedFigures from './components/guessBoard/components/selectedFigures';
import InformArea from './components/guessBoard/components/informArea';
import { NUMBERS, screenWidth } from '../../utils/constants';
import { isFigureChoiceDisabled } from '../../utils/helper';
import FigureActive from './components/figureActive';
// import { getSelectedFiguresAmount } from '../../utils/helper';

const FiguresField = ({
  list,
  selectedFiguresList,
  checkFigure,
  currFiguresAmount,
  currentGameType,
  isFiguresInactive,
  onRestartAction,
  isRestartBtn
}) => {
  const [overlayFlag, setOverlayFlag] = useState(false);
  const [isDisabled, setFigureChoiceStatus] = useState(false);
  const scrollRef = useRef();
 
  useEffect(() => {
    setFigureChoiceStatus(isFigureChoiceDisabled(currentGameType, currFiguresAmount));
  }, [currFiguresAmount]);

  const w = screenWidth / 6 - 5;
  const h = (w - 5) * 1.1;

  const handleBlur = (flag) => {
    setOverlayFlag(flag);
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true
    });
  };
  const renderFigures = () => {
    return list.map((item, index) => {
      return (
        <FigureActive
          key={index}
          config={item}
          onBlur={handleBlur}
          onCheckFigure={checkFigure}
          width={w}
          height={h}
          mH={NUMBERS.mGameH}
          mV={NUMBERS.mGameV}
          disabled={isDisabled}
        />
      );
    });
  };

  return (
    <FiguresFieldContainer>
      <GuessBoard>
        <InformArea />
        <SelectedFigures
          list={selectedFiguresList}
          amount={currFiguresAmount}
          onCheckFigure={checkFigure}
          mH={NUMBERS.mGuessH}
          mV={NUMBERS.mGuessV}
          disabled={isDisabled}
          isFiguresInactive={isFiguresInactive}
          onRestartAction={onRestartAction}
          restartBtn={isRestartBtn}
        />
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
    currFiguresAmount: getSelectedFiguresAmount(state),
    currentGameType: getCurrentGameType(state),
    isFiguresInactive: getFiguresInactive(state),
    isRestartBtn: getRestartBtn(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkFigure: (id) => dispatch(checkinSelectedFigure(id)),
    setFiguresInactive: () => dispatch(setFiguresInactive()),
    onRestartAction: () => dispatch(onRestartAction())
  };
};
export default connect(mapStateFromProps, mapDispatchToProps)(FiguresField);
