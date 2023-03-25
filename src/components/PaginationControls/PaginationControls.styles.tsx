import styled from 'styled-components/native';
import { colors, typography } from '../../styles/theme';

export const BlockButton = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const PaginationButtonStyle = styled.TouchableOpacity`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  margin: 5px;
  background-color: ${colors.primary};
  border-radius: 8px;
`;

export const PaginationButtonText = styled.Text`
  color: ${colors.dark};
  font-family: ${typography.subtitle.fontFamily};
  font-size: ${typography.subtitle.fontSize}px;
  font-weight: ${typography.subtitle.fontWeight};
`;
