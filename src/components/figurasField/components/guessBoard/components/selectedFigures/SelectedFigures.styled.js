import styled from 'styled-components/native';

export const SelectedFiguresContainer = styled.View`
  width: 95%;
  height: 75%;
  max-width: 95%;
  flex-direction: row;
`;

export const FiguresContainer = styled.View`
  flex: 1;
  width: 70%;
  height: 100%;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px green solid;
`;
export const SelectingActionsContainer = styled.View`
  width: 30%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px red solid;
`;
