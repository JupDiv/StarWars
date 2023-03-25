import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { colors, typography } from '../../styles/theme';

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${colors.secondary};
  padding: 15px;
  border-radius: 10px;
`;

export const HeaderTitle = styled.Text`
  font-family: ${typography.title.fontFamily};
  font-size: ${typography.title.fontSize}px;
  font-weight: ${typography.title.fontWeight};
  color: ${colors.primary};
  border: 2px solid ${colors.primary};
  text-align: center;
`;

export const HeaderResetButton = styled(TouchableOpacity)`
  margin: auto ;
  margin-top: 10px;
  background-color: ${colors.primary}};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  height: 40px
  width: 100px;
`;

export const HeaderCountBlock = styled.View`
  flex: 1;
`;
export const HeaderCountTab = styled.View`
  display: flex;
  flex-direction: row;
`;
export const HeaderButtonBlock = styled(View)`
  width: 100%;
`;
export const HeaderButtonText = styled.Text`
  color: ${colors.dark};
  font-family: ${typography.subtitle.fontFamily};
  font-size: ${typography.subtitle.fontSize}px;
  font-weight: ${typography.subtitle.fontWeight};
`;
