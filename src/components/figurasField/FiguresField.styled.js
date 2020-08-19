import styled from 'styled-components/native';

export const FiguresScrollContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    zIndex: 200
  }
}))``;

export const FiguresFieldContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const GuessContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 40%;
  z-index: 100;
  background-color: rgba(0,0,0,0.2);
`;

export const GameContainer = styled.View`
  flex: 2;
  width: 100%;
  height: 60%;
  z-index: 150;
`;
