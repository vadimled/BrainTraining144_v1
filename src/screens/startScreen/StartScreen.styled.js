import styled from 'styled-components/native';
import { COLORS } from '@utils/constants';

export const StartScreenContainer = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
`;
export const ButtonsGroup = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const BtnBackground = styled.TouchableOpacity`
  width: 240px;
  height: 45px;
  text-align: center;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${COLORS.green100};
  margin-left: 20px;
  margin-bottom: 30px;

`;
export const BtnTitle = styled.Text`
  font-size: 22px;
  text-align: center;
  color: ${COLORS.tableFont100};
`;
export const StartTitle = styled.Text`
  width: 100%;
  margin-top: 130px;
  margin-bottom: 40px;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  color: ${COLORS.tableFont100};
  text-align: center;
`;
