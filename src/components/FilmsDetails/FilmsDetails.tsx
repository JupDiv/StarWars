import React, {useState, useEffect, useRef} from 'react';
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
    if (isOpen) {
      Animated.timing(translateYAnimation, {
        toValue: -40,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => setIsOpen(false));
    } else {
      setIsOpen(true);
      Animated.timing(translateYAnimation, {
        toValue: 5,
        duration: 1500,
        useNativeDriver: true,
      }).start();
    }
  };

  const animatedContainerStyle = {
    transform: [{translateY: translateYAnimation}],
  };

  return (
    <>
      <FilmDetailsButton
        onHandler={toggleAnimation}
        title={title}
        isHighlighted={isHighlighted}
        isOpen={isOpen}
      />
      <Animated.View style={animatedContainerStyle}>
        <FilmDetailsContainer>
          {isOpen ? (
            <FilmsDetailContent
              description={opening_crawl}
              content={groupDataFilm}
            />
          ) : null}
        </FilmDetailsContainer>
      </Animated.View>
    </>
  );
}

export default FilmsDetails;
