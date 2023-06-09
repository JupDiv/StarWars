import styled from 'styled-components/native';
import {colors, typography} from '../../styles/theme';

export const FilmDetailBlockInfo = styled.ScrollView``;

export const FilmDetailBlockInfoGroup = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-top: 10px;
`;
export const FilmDetailBlockInfoTitle = styled.Text`
  font-size: ${typography.title.fontSize}px;
  font-weight: ${typography.title.fontWeight};
  font-family: ${typography.title.fontFamily};
  text-align: center;
`;

export const FilmDetailBlockInfoText = styled.Text`
  font-size: ${typography.subtitle.fontSize}px;
  font-family: ${typography.subtitle.fontFamily};
  font-weight: ${typography.subtitle.fontWeight};
  margin-right: 20px;
  width: 200px
  text-align: right;
`;

export const FilmDetailBlockDescription = styled.View`
  margin: 5px;
  padding: 5px;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
`;

export const FilmDetailBlockDescriptionText = styled.Text`
  font-size: ${typography.body.fontSize}px;
  font-family: ${typography.body.fontFamily};
  font-weight: ${typography.subtitle.fontWeight};
`;
