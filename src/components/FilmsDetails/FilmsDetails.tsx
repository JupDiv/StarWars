import {FilmsTypes} from '../../entites/types/FilmsTypes';

import {
  FilmDetailsContainer,
  FilmDetailBlockInfo,
  FilmDetailBlockMainTitle,
  FilmDetailBlockInfoTitle,
  FilmDetailBlockInfoGroup,
  FilmDetailBlockInfoText,
  FilmDetailBlockDescription,
  FilmDetailBlockDescriptionText,
} from './FilmsDetails.styles';

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
  const groupDataFilm = {
    Episode: episode_id,
    Director: director,
    Producer: producer,
    Release: release_date,
  };

  return (
    <FilmDetailsContainer>
      <FilmDetailBlockInfo>
        <FilmDetailBlockMainTitle isHighlighted={isHighlighted}>
          {title}
        </FilmDetailBlockMainTitle>
        {Object.entries(groupDataFilm).map(([key, value]) => (
          <FilmDetailBlockInfoGroup key={key}>
            <FilmDetailBlockInfoTitle>{key}</FilmDetailBlockInfoTitle>
            <FilmDetailBlockInfoText>{value}</FilmDetailBlockInfoText>
          </FilmDetailBlockInfoGroup>
        ))}
      </FilmDetailBlockInfo>
      <FilmDetailBlockDescription>
        <FilmDetailBlockDescriptionText>
          {opening_crawl}
        </FilmDetailBlockDescriptionText>
      </FilmDetailBlockDescription>
    </FilmDetailsContainer>
  );
}

export default FilmsDetails;
