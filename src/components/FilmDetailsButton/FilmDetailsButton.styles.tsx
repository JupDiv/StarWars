import styled from 'styled-components/native';
import {colors, typography} from '../../styles/theme';

interface ListItemProps {
  isHighlighted: boolean;
}
interface ButtonItemProps {
  isOpen: boolean;
}

export const FilmsDetailBlockButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
`;

export const FilmDetailBlockMainTitle = styled.Text`
  font-size: ${typography.title.fontSize}px;
  font-weight: ${typography.title.fontWeight};
  font-family: ${typography.title.fontFamily};
  overflow: hidden;
  border: ${({isHighlighted}: ListItemProps) =>
    isHighlighted ? 'solid 3px green' : 'solid 3px red'};
  border-radius: 20px;
  background-color: ${({isOpen}: ButtonItemProps) =>
    isOpen ? colors.secondary : colors.primary};
  color: ${({isOpen}: ButtonItemProps) =>
    isOpen ? colors.primary : colors.secondary};
    margin: 1px
  margin-top: 19px;
  text-align: center;
`;
