import styled from 'styled-components/native';

export const FigureTouchableContainer = styled.TouchableOpacity`
  margin: ${(props) => `${props.mV}px ${props.mH}px`};
`;
export const FigureContainerBgn = styled.ImageBackground`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  position: relative;
  background-color: transparent;
  justify-content: flex-start;
  align-items: flex-end;
`;
export const FigureContainer = styled.View`
  flex: 1;
  max-width: 80%;
  max-height: 70%;
  width: 80%;
  height: 70%;
  position: relative;
  background-color: transparent;
  z-index: 0;
`;
export const SecondShape = styled.View`
  position: absolute;
  top: 30%;
  left: 20%;
`;
