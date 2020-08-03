/**
 * FiguresField
 * @author Vadim Malckin
 * created on 16/07/2020
 */

import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import Figure from '../figure';
// import {GuessContainer} from "../../screens/gameScreen/GameScreen.styled"

const FiguresField = ({ list }) => {
  const [isDragging, setDragging] = useState(false);
  const setDraggingHandle = (val) => {
    console.log('--------> ', val);
    setDragging(val);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.guessContainer} />
      <View style={styles.gameContainer}>
        <ScrollView contentContainerStyle={styles.scrolledContainer} scrollEnabled={isDragging}>
          {list.map((item, index) => {
            return <Figure key={index} config={item} setDragging={setDraggingHandle} />;
          })}
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
  }
});
export default FiguresField;
