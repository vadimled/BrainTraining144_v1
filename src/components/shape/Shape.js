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
        return <CircleShape width={size.width} height={size.height} color={color} />;
      case 'triangle':
        return (
          <TriangleShape width={size.width} height={size.height} color={color}>
            <TriangleInnerShape width={size.width} height={size.height} color={color} />
          </TriangleShape>
        );
      case 'square':
        return <SquareShape width={size.width} height={size.height} color={color} />;
    }
  };

  return <ShapeContainer>{getShape()}</ShapeContainer>;
};

export default Shape;
