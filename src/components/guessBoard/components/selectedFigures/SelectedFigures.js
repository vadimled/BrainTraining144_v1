/**
 * SelectedFigures
 * @author Vadim Malckin
 * created on 21/08/2020
 */

import React from 'react';
import { SelectedFiguresContainer } from './SelectedFigures.styled';
import Figure from '../../../figure';
import { screenWidth } from '../../../../utils/constants';

const SelectedFigures = ({ list, amount }) => {
  const w = ((screenWidth-(screenWidth/20)) / amount);
  const h = w * 1.1;

  const renderFigures = () => {
    return list.map((item, index) => {
      return <Figure key={index} config={item} width={w} height={h} />;
    });
  };

  return <SelectedFiguresContainer>{renderFigures()}</SelectedFiguresContainer>;
};

export default SelectedFigures;
