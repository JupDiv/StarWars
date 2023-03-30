import React from 'react';
import {
  FilmsDetailBlockButton,
  FilmDetailBlockMainTitle,
} from './FilmDetailsButton.styles';

type FilmDetailsButtonProps = {
  title: string;
  isHighlighted: boolean;
  onHandler: (value: boolean) => void;
};

function FilmDetailsButton({
  title,
  isHighlighted,
  onHandler,
}: FilmDetailsButtonProps) {
  return (
    <FilmsDetailBlockButton onPress={() => onHandler(true)}>
      <FilmDetailBlockMainTitle isHighlighted={isHighlighted}>
        {title}
      </FilmDetailBlockMainTitle>
    </FilmsDetailBlockButton>
  );
}

export default FilmDetailsButton;
