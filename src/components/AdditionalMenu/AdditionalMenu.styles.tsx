import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const ViewStyled = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AnimatedScrollViewStyled = styled(Animated.ScrollView)`
  margin-top: 10px;
`;
