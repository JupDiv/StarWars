import React from 'react';
import {
  FilmsDetailBlockButton,
  FilmDetailBlockMainTitle,
} from './FilmDetailsButton.styles';

type FilmDetailsButtonProps = {
  title: string;
  isHighlighted: boolean;
  onHandler: (value: boolean) => void;
  isOpen: boolean;
};

function FilmDetailsButton({
  title,
  isHighlighted,
  onHandler,
  isOpen,
}: FilmDetailsButtonProps) {
  return (
    <FilmsDetailBlockButton onPress={() => onHandler(true)}>
      <FilmDetailBlockMainTitle isOpen={isOpen} isHighlighted={isHighlighted}>
        {title}
      </FilmDetailBlockMainTitle>
    </FilmsDetailBlockButton>
  );
}

export default FilmDetailsButton;
