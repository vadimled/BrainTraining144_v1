import styled from 'styled-components/native';

export const FigureTouchableContainer = styled.TouchableOpacity`
  margin: ${props => `5px ${props.margin}px`};
`;
export const FigureContainerBgn = styled.ImageBackground`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  position: relative;
  background-color: transparent;
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
  z-index: 0;
`;
export const SecondShape = styled.View`
  position: absolute;
  top: 18px;
  left: 5px;
`;
export const ActionsContainer = styled.View`
  flex:1;
  position: absolute;
  flex-direction: row;
  width: ${(props) => `${props.width*2 + 44}px`};
  height: 44px;
  top: ${(props) => `${props.height*2 + 88}px`};
  left: ${(props) => `${props.screenWidth/2 - props.width*2 + 44}px`};
  align-items: center;
  justify-content: space-between;

  z-index: 1100;
`;
