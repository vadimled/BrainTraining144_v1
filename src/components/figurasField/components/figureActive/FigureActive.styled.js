import styled from 'styled-components/native';

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
