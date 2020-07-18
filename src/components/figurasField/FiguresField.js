/**
 * FiguresField
 * @author Vadim Malckin
 * created on 16/07/2020
 */

import React from 'react';
import { FiguresFieldContainer } from './FiguresField.styled';
import Figure from '../figure';

const FiguresField = ({ list }) => {
  return (
    <FiguresFieldContainer>
      {list.map((item, index) => {
        return <Figure key={index} config={item} />;
      })}
    </FiguresFieldContainer>
  );
};

export default FiguresField;
