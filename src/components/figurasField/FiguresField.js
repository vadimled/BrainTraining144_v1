/**
 * FiguresField
 * @author Vadim Malckin
 * created on 16/07/2020
 */

import React, { useState } from 'react';
import { FiguresFieldContainer } from './FiguresField.styled';
import Figure from '../figure';

const FiguresField = ({ list }) => {
  const [isDragging, setDragging] = useState(false);
  const setDraggingHandle = val => {
    console.log("--------> ", val)
    setDragging(val)
  }
  return (
    <FiguresFieldContainer scrollEbabled={isDragging}>
      {list.map((item, index) => {
        return (
          <Figure key={index} config={item} setDragging={setDraggingHandle} />
        );
      })}
    </FiguresFieldContainer>
  );
};

export default FiguresField;
