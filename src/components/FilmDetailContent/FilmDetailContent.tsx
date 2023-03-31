import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {
  FilmDetailBlockInfo,
  FilmDetailBlockInfoGroup,
  FilmDetailBlockInfoTitle,
  FilmDetailBlockInfoText,
  FilmDetailBlockDescription,
  FilmDetailBlockDescriptionText,
} from './FilmDetailsContent.styled';

type FilmDetailsProps = {
  content: {
    Episode: number;
    Director: string;
    Producer: string;
    Release: string;
  };
  description: string;
};

const FilmsDetails = ({content, description}: FilmDetailsProps) => {
  return (
    <>
      <FilmDetailBlockInfo>
        {Object.entries(content).map(([key, value]) => (
          <FilmDetailBlockInfoGroup key={key}>
            <FilmDetailBlockInfoTitle>{key}</FilmDetailBlockInfoTitle>
            <FilmDetailBlockInfoText>{value}</FilmDetailBlockInfoText>
          </FilmDetailBlockInfoGroup>
        ))}
        <FilmDetailBlockDescription>
          <FilmDetailBlockDescriptionText>
            {description}
          </FilmDetailBlockDescriptionText>
        </FilmDetailBlockDescription>
      </FilmDetailBlockInfo>
    </>
  );
};

export default FilmsDetails;
