import styled from 'styled-components/native';
import {colors, typography} from '../../styles/theme';

export const CharasterButton = styled.TouchableOpacity`
  height: 27px;
  border-radius: 10px;
  background-color: ${colors.primary};
  margin-top: 10px;
  width: 140px;
`;

export const CharasterButtonText = styled.Text`
  font-family: ${typography.subtitle.fontFamily};
  font-size: ${typography.subtitle.fontSize}px;
  font-weight: ${typography.subtitle.fontWeight};
  color: ${colors.dark};
  text-align: center;
`;

export const CharasterContainer = styled.View`
  display: flex;
  justify-content: center;
  background-color: ${colors.secondary};
  border-radius: 8px;
  padding: 10px;
`;

export const CharasterBody = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: ${typography.body.fontFamily};
  font-size: ${typography.body.fontSize}px;
  color: ${colors.light};
  border: 1px solid ${colors.primary};
  padding: 10px;
`;

export const CharasterBodyButton = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const CharasterTextTitle = styled.Text`
  font-family: ${typography.subtitle.fontFamily};
  font-size: ${typography.subtitle.fontSize}px;
  font-weight: ${typography.subtitle.fontWeight};
  color: ${colors.primary};
  text-transform: capitalize;
`;

export const CharasterText = styled.Text`
  font-family: ${typography.body.fontFamily};
  font-size: ${typography.body.fontSize}px;
  color: ${colors.light};
`;

export const BlockButtonWithMenu = styled.View``;
