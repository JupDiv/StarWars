import styled from 'styled-components/native';
import {Modal, Dimensions} from 'react-native';
import {colors, typography} from '../../styles/theme';

export const ModalStyled = styled(Modal)`
  bakcground-color: ${colors.primary};
`;

export const FilmsDetailsContainer = styled.ScrollView``;

export const FilmsHeaderBody = styled.View``;

export const FilmsHeaderTitle = styled.Text`
  color: ${colors.dark};
  font-size: ${typography.title.fontSize}px;
  font-weight: ${typography.title.fontWeight};
  font-family: ${typography.title.fontFamily};
`;

export const FilmsDescriptionBlock = styled.View`
  align-items: center;
  margin-top: 10px;
`;

export const FilmsDetailsText = styled.Text``;

export const FilmsDetailsBody = styled.View`
  background-color: ${colors.primary};
`;

export const FilmsDetailsButton = styled.TouchableOpacity`
  background-color: ${colors.dark};
  width: 140px;
  height: 30px;
  border-radius: 8px;
  margin-top: 30px;
`;
export const FilmsDetailsButtonText = styled.Text`
  color: ${colors.light};
  text-align: center;
  font-size: ${typography.subtitle.fontSize}px;
  font-weight: ${typography.subtitle.fontWeight};
  font-family: ${typography.subtitle.fontFamily};
`;

export const FilmsDetailsTableTitile = styled.Text`
  font-size: ${typography.subtitle.fontSize}px;
  font-weight: ${typography.subtitle.fontWeight};
  font-family: ${typography.subtitle.fontFamily};
`;

export const FilmsDetailsTableText = styled.Text`
  font-size: ${typography.body.fontSize}px;
  font-family: ${typography.body.fontFamily};
  width: 180px;
`;
export const FilmsTableBody = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: ${colors.dark};
  width: 300px;
  height: 40px;
`;
