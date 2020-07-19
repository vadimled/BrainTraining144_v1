import styled from 'styled-components/native';
import { COLORS } from '../../utils/constants';

export const ShapeContainer = styled.View`
  background-color: transparent;
  flex: 1;
  margin: 3px;
`;
export const SquareShape = styled.View`
  background-color: ${(props) => props.color};
  width: ${(props) => `${props.width-2}px`};
  height: ${(props) => `${props.height-2}px`};
  border: white 1px solid;
`;
export const TriangleShape = styled.View`
  width: 0;
  height: 0;
  position: relative;
  border-style: solid;
  border-left-width: ${(props) => `${props.height / 2}px`};
  border-left-color: transparent;
  border-right-width: ${(props) => `${props.height / 2}px`};
  border-right-color: transparent;
  border-bottom-width: ${(props) => `${props.width}px`};
  border-bottom-color: white;
`;
export const TriangleInnerShape = styled.View`
  width: 0;
  height: 0;
  position: absolute;
  border-style: solid;
  top: 2px;
  left: ${(props) => `-${(props.width - 4) / 2}px`};
  border-left-width: ${(props) => `${(props.height - 4) / 2}px`};
  border-left-color: transparent;
  border-right-width: ${(props) => `${(props.height - 4) / 2}px`};
  border-right-color: transparent;
  border-bottom-width: ${(props) => `${props.width - 4}px`};
  border-bottom-color: ${(props) => props.color};
`;
export const CircleShape = styled.View`
  background-color: ${(props) => props.color};
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  border: white 1px solid;
  border-radius: ${(props) => `${props.width / 2}px`};
`;
