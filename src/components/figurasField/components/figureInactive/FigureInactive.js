/**
 * FigureInactive
 * @author Vadim Malckin
 * created on 24/08/2020
 */

import React from 'react';
// import {FigureInactiveContainer} from './FigureInactive.styled';
import Figure from "../components-Figure/figure"

const FigureInactive = ({width, height, mH, mV, config}) => {
  return (
    <>
      <Figure height={height} width={width} config={config} mH={mH} mV={mV} />
    </>
  );
};

export default FigureInactive;

