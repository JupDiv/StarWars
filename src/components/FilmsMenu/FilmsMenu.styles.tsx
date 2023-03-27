import styled from 'styled-components/native';
import {Animated, Dimensions} from 'react-native';
import {colors, typography} from '../../styles/theme';

export const TextStyled = styled.Text`
  font-family: ${typography.subtitle.fontFamily};
  font-size: ${typography.subtitle.fontSize}px;
  font-weight: ${typography.subtitle.fontWeight};
`;
export const ViewStyled = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TouchableOpacityStyled = styled.TouchableOpacity`
  background-color: ${colors.primary};
  width: 300px;
  height: 35px;
  border-radius: 8px;
  padding: 5px;
  margin: 5px;
  align-items: center;
`;

export const AnimatedScrollViewStyled = styled(Animated.ScrollView)`
  margin-top: 10px;
`;
