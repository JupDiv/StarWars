import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {colors, typography} from '../../styles/theme';

export const FilmDetailsContainer = styled.ScrollView`
  background-color: ${colors.primary};
  border: 1px solid ${colors.dark};
`;

export const FilmDetailBlockInfo = styled.View``;

export const FilmDetailBlockMainTitle = styled.Text`
  font-size: ${typography.title.fontSize}px;
  font-weight: ${typography.title.fontWeight};
  font-family: ${typography.title.fontFamily};
  text-align: center;
  margin-top: 10px;
`;

export const FilmDetailBlockInfoTitle = styled.Text`
  font-size: ${typography.title.fontSize}px;
  font-weight: ${typography.title.fontWeight};
  font-family: ${typography.title.fontFamily};
  text-align: center;
`;

export const FilmDetailBlockInfoGroup = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-top: 10px;
`;

export const FilmDetailBlockInfoText = styled.Text`
  font-size: ${typography.body.fontSize}px;
  font-family: ${typography.body.fontFamily};
  margin-right: 20px;
  width: 200px
  text-align: right;
`;

export const FilmDetailBlockDescription = styled.View`
  margin: 5px;
  padding: 5px;
  justify-content: space-around;
  align-items: center;
`;

export const FilmDetailBlockDescriptionText = styled.Text`
  font-size: ${typography.body.fontSize}px;
  font-family: ${typography.body.fontFamily};
`;
