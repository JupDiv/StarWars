import styled from 'styled-components/native';
import {colors, typography} from '../../styles/theme';

interface ListItemProps {
  isHighlighted: boolean;
}
interface ButtonItemProps {
  isOpen: boolean;
}

export const FilmsDetailBlockButton = styled.TouchableOpacity``;

export const FilmDetailBlockMainTitle = styled.Text`
  position: relative;
  z-index: 999;
  font-size: ${typography.title.fontSize}px;
  font-weight: ${typography.title.fontWeight};
  font-family: ${typography.title.fontFamily};

  text-align: center;
  margin-top: 10px;
  border: ${({isHighlighted}: ListItemProps) =>
    isHighlighted ? 'solid 5px green' : 'solid 5px red'};
  background-color: ${({isOpen}: ButtonItemProps) =>
    isOpen ? colors.secondary : colors.primary};
  color: ${({isOpen}: ButtonItemProps) =>
    isOpen ? colors.primary : colors.secondary};
`;
