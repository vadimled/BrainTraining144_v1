import styled from 'styled-components/native';

export const GameScreenContainer = styled.ImageBackground`
    flex: 1;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    z-index: -1;
`;
export const GuessContainer = styled.View`
    width: 100%;
    height: 35%;
    border: 1px solid #ff0019;
    z-index: -1;
`;

export const FieldContainer = styled.View`
    width: 100%;
    height: 65%;
`;
