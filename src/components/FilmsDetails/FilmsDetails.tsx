import {useEffect, useState} from 'react';
import {FilmsTypes} from '../../entites/types/FilmsTypes';
import {useAppSelector} from '../../redux/hooks/hooks';
import FetchFilms from '../../utlis/FetchData/FetchFilms';
import {
  FilmsDetailsContainer,
  FilmsDetailsText,
  FilmsHeaderTitle,
  FilmsHeaderText,
  FilmsDetailsBody,
  FilmsDetailsButton,
  FilmsDetailsButtonText,
  FilmsHeaderBody,
} from './FilmsDetails.styles';

type FilmsMenuProps = {
  setSelectedFilm: (value: null) => void;
};

function FilmsDetails({
  title,
  episode_id,
  opening_crawl,
  director,
  producer,
  release_date,
  setSelectedFilm,
}: FilmsTypes & FilmsMenuProps): JSX.Element {
  return (
    <FilmsDetailsContainer>
      <FilmsHeaderBody>
        <FilmsHeaderTitle>{title}</FilmsHeaderTitle>
        <FilmsHeaderText>{episode_id}</FilmsHeaderText>
        <FilmsHeaderText>{director}</FilmsHeaderText>
        <FilmsHeaderText>{producer}</FilmsHeaderText>
        <FilmsHeaderText>{release_date}</FilmsHeaderText>
      </FilmsHeaderBody>
      <FilmsDetailsText>{opening_crawl}</FilmsDetailsText>
      <FilmsDetailsBody>
        <FilmsDetailsButton onPress={() => setSelectedFilm(null)}>
          <FilmsDetailsButtonText>Back</FilmsDetailsButtonText>
        </FilmsDetailsButton>
      </FilmsDetailsBody>
    </FilmsDetailsContainer>
  );
}

export default FilmsDetails;
