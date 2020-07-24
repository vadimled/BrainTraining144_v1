import styled from 'styled-components/native';

export const FigureTouchableContainer = styled.TouchableOpacity`
  margin: 8px;
`;
export const FigureContainerBgn = styled.ImageBackground`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};;
  position: relative;
  background-color: transparent;
  z-index: 10000;
`;
export const FigureContainer = styled.View`
  margin-top: 4px;
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
  top: 18px;
  left: 5px;
`;
