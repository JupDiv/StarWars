import React, {useState, useMemo, useRef} from 'react';
import {FilmsTypes} from '../../entites/types/FilmsTypes';
import FilmsDetailContent from '../FilmDetailContent/FilmDetailContent';
import FilmDetailsButton from '../FilmDetailsButton/FilmDetailsButton';
import {Animated} from 'react-native';

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
  const translateYAnimation = useRef(new Animated.Value(-40)).current;
  const groupDataFilm = {
    Episode: episode_id,
    Director: director,
    Producer: producer,
    Release: release_date,
  };

  const toggleAnimation = () => {
    Animated.timing(translateYAnimation, {
      toValue: isOpen ? -40 : 5,
      duration: isOpen ? 1000 : 1500,
      useNativeDriver: true,
    }).start();

    setIsOpen(!isOpen);
  };

  const animatedContainerStyle = {
    transform: [{translateY: translateYAnimation}],
  };

  const renderFilmDetails = useMemo(() => {
    if (isOpen) {
      return (
        <FilmsDetailContent
          description={opening_crawl}
          content={groupDataFilm}
        />
      );
    }
  }, [isOpen, opening_crawl, groupDataFilm]);

  return (
    <>
      <FilmDetailsButton
        onHandler={toggleAnimation}
        title={title}
        isHighlighted={isHighlighted}
        isOpen={isOpen}
      />
      <Animated.View style={animatedContainerStyle}>
        <FilmDetailsContainer>{renderFilmDetails}</FilmDetailsContainer>
      </Animated.View>
    </>
  );
}

export default FilmsDetails;
