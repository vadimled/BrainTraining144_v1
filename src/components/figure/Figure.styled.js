import styled from 'styled-components/native';
import { COLORS } from '../../utils/constants';

export const FigureTouchableContainer = styled.TouchableOpacity`
  flex: 1;
  width: 65px;
  height: 72px;
  margin: 3px;
`;
export const FigureContainerBgn = styled.ImageBackground`
  flex: 1;
  width: 65px;
  height: 72px;
  position: relative;
  background-color: transparent;
`;
export const FigureContainer = styled.View`
  margin-top: 7px;
  margin-left: 7px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: transparent;
`;
export const SecondShape = styled.View`
  position: absolute;
  top: 21px;
  left: 5px;
`;
