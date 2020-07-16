import styled from 'styled-components/native';
import { COLORS } from '../../utils/constants';
import css from 'react-native-web/dist/exports/StyleSheet/css';

export const FiguresFieldContainer = styled.ScrollView.attrs({
  contentContainerStyle: () => css`
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: rosybrown;
    justify-content: flex-start;
    align-items: flex-start;
  `
})``;
