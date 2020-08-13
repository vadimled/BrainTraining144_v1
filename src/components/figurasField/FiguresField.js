/**
 * FiguresField
 * @author Vadim Malckin
 * created on 16/07/2020
 */

import React, { useState, useRef } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Image } from 'react-native';
import Figure from '../figure';
import { BlurView } from 'expo-blur';
// import {BlurView} from "@react-native-community/blur/index"
// import {GuessContainer} from "../../screens/gameScreen/GameScreen.styled"

const FiguresField = ({ list }) => {
  const [isDragging, setDragging] = useState(false);
  const [overlayFlag, setOverlayFlag] = useState(false);
  const scrollRef = useRef().current;
  const handleBlur = () => {
    setOverlayFlag(!overlayFlag);
    scrollRef?.scrollTo({
      y: 0,
      animated: true
    });
  };

  const setDraggingHandle = (val) => {
    console.log('--------> ', val);
    setDragging(val);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.guessContainer} />
      <View style={styles.gameContainer}>
        <ScrollView
          contentContainerStyle={styles.scrolledContainer}
          scrollEnabled={isDragging}
          ref={scrollRef}
        >
          {list.map((item, index) => {
            return (
              <Figure
                key={index}
                config={item}
                setDragging={setDraggingHandle}
                onBlur={handleBlur}
              />
            );
          })}
          {overlayFlag && (
            <BlurView
              intensity={90}
              style={[StyleSheet.absoluteFill, styles.absolute]}
              tint={'dark'}
            />
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  guessContainer: {
    flex: 1,
    width: '100%',
    height: '40%',
    backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex: 100
  },
  gameContainer: {
    flex: 2,
    width: '100%',
    height: '60%',
    zIndex: 150
  },
  scrolledContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    zIndex: 200
  },
  absolute: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 200
  }
});
export default FiguresField;
