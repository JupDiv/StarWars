import styled from 'styled-components/native';
import { colors, typography } from '../../styles/theme';

export const CharasterButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  background-color: ${colors.primary};
  margin-top: 10px;
`;

export const CharasterButtonText = styled.Text`
  font-family: ${typography.subtitle.fontFamily};
  font-size: ${typography.subtitle.fontSize}px;
  font-weight: ${typography.subtitle.fontWeight};
  color: ${colors.dark};
`;

export const CharasterContainer = styled.View`
  background-color: ${colors.secondary};
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
`;

export const CharasterBody = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: ${typography.body.fontFamily};
  font-size: ${typography.body.fontSize}px;
  color: ${colors.light};
  border: 1px solid ${colors.primary};
`;

export const CharasterTextTitle = styled.Text`
  font-family: ${typography.subtitle.fontFamily};
  font-size: ${typography.subtitle.fontSize}px;
  font-weight: ${typography.subtitle.fontWeight};
  color: ${colors.primary};
`;

export const CharasterText = styled.Text`
  font-family: ${typography.body.fontFamily};
  font-size: ${typography.body.fontSize}px;
  color: ${colors.light};
`;
