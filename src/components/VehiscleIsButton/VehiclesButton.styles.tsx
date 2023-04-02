import styled from 'styled-components/native';
import {colors} from '../../styles/theme';
import {Dimensions} from 'react-native';

type VehiclesIsButtonContainerType = {
  isHighlighted: boolean;
};

export const VehieclesButtonContainer = styled.ScrollView`
  border: 1px solid white;
  border-radius: 10px;
  margin-top: 10px;
  padding: 8px;
  width: ${Dimensions.get('window').width - 20}px;
  overflow: hidden;
  background-color: ${colors.primary};
  border: ${({isHighlighted}: VehiclesIsButtonContainerType) =>
    isHighlighted ? '5px solid green' : '5px solid red'};
`;
export const VehieclesIsButtonTouchable = styled.TouchableOpacity``;
export const VehieclesButtonText = styled.Text``;
