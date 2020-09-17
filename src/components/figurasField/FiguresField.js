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
  getGameMode,
  getSelectedFigures,
  getSelectedFiguresAmount,
  getSelectedContainerMode,
  getGuessedFigures
} from 'store/selectors';
import {
  FiguresFieldContainer,
  FiguresScrollContainer,
  GameContainer
} from './FiguresField.styled';
import {
  checkinSelectedFigure,
  setGameMode,
  setFiguresInactive,
  guessFigure
} from 'store/actions/gameActions';
import GuessBoard from './components/guessBoard';
import SelectedFigures from './components/guessBoard/components/selectedFigures';
import InformArea from './components/guessBoard/components/informArea';
import { GAME_MODE, NUMBERS, screenWidth } from 'utils/constants';
import { isFigureChoiceDisabled } from 'utils/helper';
import FigureActive from './components/figureActive';

const FiguresField = ({
  list,
  selectedFiguresList,
  guessedFiguresList,
  checkFigure,
  currFiguresAmount,
  currentGameType,
  isFiguresInactive,
  setGameMode,
  gameMode,
  selectedContainerMode,
  setFiguresInactive,
  guessFigure
}) => {
  const [overlayFlag, setOverlayFlag] = useState(false);
  const scrollRef = useRef();

  useEffect(() => {
    setFiguresInactive(isFigureChoiceDisabled(currentGameType, currFiguresAmount));
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
          onGuessFigure={guessFigure}
          width={w}
          height={h}
          mH={NUMBERS.mGameH}
          mV={NUMBERS.mGameV}
          disabled={isFiguresInactive}
        />
      );
    });
  };

  const getCurrentList = () => {
    if (gameMode === GAME_MODE.select) {
      return selectedFiguresList;
    } else {
      return guessedFiguresList;
    }
  };

  return (
    <FiguresFieldContainer>
      <GuessBoard>
        <InformArea />
        <SelectedFigures
          list={getCurrentList()}
          amount={currFiguresAmount}
          onCheckFigure={checkFigure}
          mH={NUMBERS.mGuessH}
          mV={NUMBERS.mGuessV}
          isFiguresInactive={isFiguresInactive}
          setGameMode={setGameMode}
          isSelectedContainerClear={selectedContainerMode}
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
    guessedFiguresList: getGuessedFigures(state),
    currFiguresAmount: getSelectedFiguresAmount(state),
    currentGameType: getCurrentGameType(state),
    isFiguresInactive: getFiguresInactive(state),
    gameMode: getGameMode(state),
    selectedContainerMode: getSelectedContainerMode(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkFigure: (id) => dispatch(checkinSelectedFigure(id)),
    guessFigure: (id) => dispatch(guessFigure(id)),
    setFiguresInactive: (val) => dispatch(setFiguresInactive(val)),
    setGameMode: (mode) => dispatch(setGameMode(mode))
  };
};
export default connect(mapStateFromProps, mapDispatchToProps)(FiguresField);
