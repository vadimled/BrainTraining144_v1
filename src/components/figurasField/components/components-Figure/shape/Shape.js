/**
 * Shape
 * @author Vadim Malckin
 * created on 17/07/2020
 */

import React from 'react';
import {
  SquareShape,
  ShapeContainer,
  TriangleShape,
  CircleShape,
  TriangleInnerShape
} from './Shape.styled';

const Shape = ({ size, shape, color }) => {
  const getShape = () => {
    switch (shape) {
      case 'circle':
        return <CircleShape width={size} height={size} color={color} />;
      case 'triangle':
        return (
          <TriangleShape width={size} height={size} color={color}>
            <TriangleInnerShape width={size} height={size} color={color} />
          </TriangleShape>
        );
      case 'square':
        return <SquareShape width={size} height={size} color={color} />;
    }
  };

  return <ShapeContainer>{getShape()}</ShapeContainer>;
};

export default Shape;
