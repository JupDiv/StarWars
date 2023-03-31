import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {colors, typography} from '../../styles/theme';

export const StarshipIsButtonContainer = styled.ScrollView`
  border: 1px solid white;
  border-radius: 10px;
  margin-top: 10px;
  padding: 8px;
  width: ${Dimensions.get('window').width - 20}px;
  overflow: hidden;
  background-color: ${colors.primary};
`;
export const StarshipIsButtonTouchable = styled.TouchableOpacity``;
export const StarshipIsButtonText = styled.Text`
  color: ${colors.dark};
  font-size: ${typography.subtitle.fontSize}px;
  font-weight: ${typography.subtitle.fontWeight};
  font-family: ${typography.subtitle.fontFamily};
  text-align: center;
`;
