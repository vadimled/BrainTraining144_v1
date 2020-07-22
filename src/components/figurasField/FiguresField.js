/**
 * FiguresField
 * @author Vadim Malckin
 * created on 16/07/2020
 */

import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Figure from '../figure';
import {GuessContainer} from "../../screens/gameScreen/GameScreen.styled"

const FiguresField = ({ list }) => {
  const [isDragging, setDragging] = useState(false);
  const setDraggingHandle = (val) => {
    console.log('--------> ', val);
    setDragging(val);
  };
  return (
    <SafeAreaView style={styles.container}>
      <GuessContainer />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        scrollEnabled={isDragging}
      >
        {list.map((item, index) => {
          return <Figure key={index} config={item} setDragging={setDraggingHandle} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 100
  },
  contentContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    zIndex: 100
  }
});
export default FiguresField;
