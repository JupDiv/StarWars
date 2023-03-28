import {FilmsTypes} from '../../entites/types/FilmsTypes';

import {
  FilmsDetailsContainer,
  FilmsDetailsText,
  FilmsHeaderTitle,
  FilmsTableBody,
  FilmsDetailsBody,
  FilmsDetailsButton,
  FilmsDetailsButtonText,
  FilmsHeaderBody,
  ModalStyled,
  FilmsDescriptionBlock,
  FilmsDetailsTableText,
  FilmsDetailsTableTitile,
} from './FilmsDetails.styles';

function FilmsDetails({
  title,
  episode_id,
  release_date,
}: FilmsTypes): JSX.Element {
  // const groupDataFilm = {
  //   Episode: episode_id,
  //   Director: director,
  //   Producer: producer,
  //   Release: release_date,
  // };

  return (
    <FilmsDetailsContainer>
      <FilmsHeaderTitle>{title}</FilmsHeaderTitle>
      <FilmsDetailsText>{episode_id}</FilmsDetailsText>
      <FilmsDetailsText>{release_date}</FilmsDetailsText>
    </FilmsDetailsContainer>
  );
}

export default FilmsDetails;
