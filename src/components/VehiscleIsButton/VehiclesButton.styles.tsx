import styled from 'styled-components/native';
import {colors, typography} from '../../styles/theme';
import {Dimensions} from 'react-native';

type VehiclesIsButtonContainerType = {
  isHighlighted: boolean;
};

export const VehieclesButtonContainer = styled.ScrollView`
  border: 1px solid white;
  border-radius: 10px;
  margin-top: 10px;
  padding: 8px;
  width: ${Dimensions.get('window').width}px;
  overflow: hidden;
  background-color: ${colors.primary};
  border: ${({isHighlighted}: VehiclesIsButtonContainerType) =>
    isHighlighted ? '5px solid green' : '5px solid red'};
`;
export const VehieclesIsButtonTouchable = styled.TouchableOpacity``;
export const VehieclesButtonText = styled.Text`
  color: ${colors.dark};
  font-size: ${typography.subtitle.fontSize}px;
  font-weight: ${typography.subtitle.fontWeight};
  font-family: ${typography.subtitle.fontFamily};
  text-align: center;
`;
