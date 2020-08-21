/**
 * SelectedFigures
 * @author Vadim Malckin
 * created on 21/08/2020
 */

import React from 'react';
import {SelectedFiguresContainer} from './SelectedFigures.styled';
import Figure from "../../../figure"

const SelectedFigures = ({list}) => {
  
  const renderFigures = () => {
    return list.map((item, index) => {
      return <Figure key={index} config={item} />;
    });
  };
  
  return (
    <SelectedFiguresContainer>
      {renderFigures()}
    </SelectedFiguresContainer>
  );
};

export default SelectedFigures;

