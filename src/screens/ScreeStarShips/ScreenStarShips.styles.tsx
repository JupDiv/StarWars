import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const ScreenContainer = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
`;
//
