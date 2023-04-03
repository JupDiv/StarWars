import styled from 'styled-components/native';
import {typography, colors} from '../../styles/theme';
import {Animated} from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.dark};
`;

export const Star = styled(Animated.View)`
  position: absolute;
  margin: auto;
  width: 2px;
  height: 2px;
  background-color: ${colors.light};
`;

export const StarsContainer = styled.View`
  position: absolute;
  width: 800px;
  height: 800px;
  top: 50%;
  left: 50%;
  margin-top: -400px;
  margin-left: -400px;
  z-index: 1;
`;
