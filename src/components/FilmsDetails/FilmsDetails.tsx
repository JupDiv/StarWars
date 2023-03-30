import React, {useState} from 'react';
import {FilmsTypes} from '../../entites/types/FilmsTypes';
import FilmsDetailContent from '../FilmDetailContent/FilmDetailContent';
import FilmDetailsButton from '../FilmDetailsButton/FilmDetailsButton';

import {FilmDetailsContainer} from './FilmsDetails.styles';

type FilmDetailsProps = Pick<
  FilmsTypes,
  | 'title'
  | 'episode_id'
  | 'release_date'
  | 'opening_crawl'
  | 'producer'
  | 'director'
> & {
  isHighlighted: boolean;
};

function FilmsDetails({
  title,
  episode_id,
  release_date,
  opening_crawl,
  producer,
  director,
  isHighlighted,
}: FilmDetailsProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const groupDataFilm = {
    Episode: episode_id,
    Director: director,
    Producer: producer,
    Release: release_date,
  };

  return (
    <FilmDetailsContainer>
      {isOpen ? (
        <FilmsDetailContent
          description={opening_crawl}
          content={groupDataFilm}
        />
      ) : (
        <FilmDetailsButton
          onHandler={setIsOpen}
          title={title}
          isHighlighted={isHighlighted}
        />
      )}
    </FilmDetailsContainer>
  );
}

export default FilmsDetails;
