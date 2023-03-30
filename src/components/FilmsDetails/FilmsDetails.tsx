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

// function FilmsDetails({
//   title,
//   episode_id,
//   release_date,
//   opening_crawl,
//   producer,
//   director,
//   isHighlighted,
// }: FilmDetailsProps): JSX.Element {
//   const [isOpen, setIsOpen] = useState(false);
//   const scaleAnimation = useRef(new Animated.Value(0)).current;
//   const groupDataFilm = {
//     Episode: episode_id,
//     Director: director,
//     Producer: producer,
//     Release: release_date,
//   };

//   useEffect(() => {
//     Animated.timing(scaleAnimation, {
//       toValue: isOpen ? 1 : 0,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();
//   }, [isOpen]);

//   const animatedStyle = {
//     transform: [{scaleY: scaleAnimation}],
//   };

//   return (
//     <Animated.View style={animatedStyle}>
//       <FilmDetailsContainer>
//         {isOpen ? (
//           <FilmsDetailContent
//             description={opening_crawl}
//             content={groupDataFilm}
//             setIsOpen={setIsOpen}
//           />
//         ) : (
//           <FilmDetailsButton
//             onHandler={setIsOpen}
//             title={title}
//             isHighlighted={isHighlighted}
//           />
//         )}
//       </FilmDetailsContainer>
//     </Animated.View>
//   );
// }
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
  const opacityAnimation = useRef(new Animated.Value(0)).current;
  const translateYAnimation = useRef(new Animated.Value(0)).current;
  const groupDataFilm = {
    Episode: episode_id,
    Director: director,
    Producer: producer,
    Release: release_date,
  };

  useEffect(() => {
    if (isOpen) {
      Animated.parallel([
        Animated.timing(opacityAnimation, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(translateYAnimation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(opacityAnimation, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(translateYAnimation, {
          toValue: -40,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isOpen]);

  const animatedContainerStyle = {
    transform: [{translateY: translateYAnimation}],
  };

  return (
    <>
      <FilmDetailsButton
        onHandler={() => setIsOpen(!isOpen)}
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
