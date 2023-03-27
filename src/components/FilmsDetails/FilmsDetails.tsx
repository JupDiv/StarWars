import {useEffect, useState} from 'react';
import {FilmsTypes} from '../../entites/types/FilmsTypes';
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

function FilmsDetails({
  title,
  episode_id,
  opening_crawl,
  director,
  producer,
  release_date,
}: FilmsTypes): JSX.Element {
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
        <FilmsDetailsButton />
        <FilmsDetailsButtonText>Back</FilmsDetailsButtonText>
      </FilmsDetailsBody>
    </FilmsDetailsContainer>
  );
}

export default FilmsDetails;
