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

export const GameContainer = styled.View`
  flex: 2;
  width: 100%;
  height: 66%;
  z-index: 150;
`;

export const FiguresFieldContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
`;

