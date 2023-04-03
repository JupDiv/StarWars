import styled from 'styled-components/native';
import {colors, typography} from '../../styles/theme';

type StarshipDetailsContainerProps = {
  isHighlighted: boolean;
};

export const StarshipDetailsContainer = styled.ScrollView`
  margin: 10px;
  margin-top: 10px;
`;
export const StarshipDetailsText = styled.Text`
  font-family: ${typography.body.fontFamily};
  font-size: ${typography.body.fontSize}px;
  font-weight: ${typography.subtitle.fontWeight};
  color: ${colors.primary};
  width: 40%;
  text-align: right;
`;
export const StarshipDetailsView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  border: ${({isHighlighted}: StarshipDetailsContainerProps) =>
    isHighlighted ? '1px solid green' : '1px solid red'};
`;
export const StarshipDetailsTitle = styled.Text`
  font-family: ${typography.body.fontFamily};
  font-size: ${typography.body.fontSize}px;
  font-weight: ${typography.title.fontWeight};
  width: 60%;
  color: ${colors.primary};
  text-transform: capitalize;
`;
