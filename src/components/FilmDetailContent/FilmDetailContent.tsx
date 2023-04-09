import React, {useMemo} from 'react';

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

export default function FilmsDetails({content, description}: FilmDetailsProps) {
  const filmsTitlesData = useMemo(() => {
    return Object.entries(content).map(([key, value]) => (
      <FilmDetailBlockInfoGroup key={key}>
        <FilmDetailBlockInfoTitle>{key}</FilmDetailBlockInfoTitle>
        <FilmDetailBlockInfoText>{value}</FilmDetailBlockInfoText>
      </FilmDetailBlockInfoGroup>
    ));
  }, [content]);

  return (
    <>
      <FilmDetailBlockInfo>
        {filmsTitlesData}
        <FilmDetailBlockDescription>
          <FilmDetailBlockDescriptionText>
            {description}
          </FilmDetailBlockDescriptionText>
        </FilmDetailBlockDescription>
      </FilmDetailBlockInfo>
    </>
  );
}
