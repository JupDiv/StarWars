import styled from 'styled-components/native';
import {colors, typography} from '../../styles/theme';

type VehiclesDetailsContainerProps = {
  isHighlighted: boolean;
};

export const VehiclesDetailsContainer = styled.ScrollView`
  margin: 10px;
  margin-top: 10px;
`;
export const VehiclesDetailsText = styled.Text`
  font-family: ${typography.body.fontFamily};
  font-size: ${typography.body.fontSize}px;
  font-weight: ${typography.subtitle.fontWeight};
  color: ${colors.primary};
  width: 40%;
  text-align: right;
`;
export const VehiclesDetailsView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  border: ${({isHighlighted}: VehiclesDetailsContainerProps) =>
    isHighlighted ? '1px solid green' : '1px solid red'};
`;
export const VehiclesDetailsTitle = styled.Text`
  font-family: ${typography.body.fontFamily};
  font-size: ${typography.body.fontSize}px;
  font-weight: ${typography.title.fontWeight};
  width: 60%;
  color: ${colors.primary};
  text-transform: capitalize;
`;
