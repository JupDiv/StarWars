import styled from 'styled-components/native';
import {Animated} from 'react-native';
import {colors, typography} from '../../styles/theme';

export const TextStyled = styled.Text`
  font-family: ${typography.subtitle.fontFamily};
`;
export const ViewStyled = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const ScrollViewStyled = styled.ScrollView``;
export const TouchableOpacityStyled = styled.TouchableOpacity`
  background-color: ${colors.primary};
  width: 130px;
  height: 30px;
  border-radius: 8px;
  padding: 5px;
  margin: 5px;
`;

export const AnimatedScrollViewStyled = styled(Animated.ScrollView)`
  height: 130px;
  margin: 5px;
`;
