import {useEffect, useState} from 'react';
import FetchFilms from '../../utlis/FetchData/FetchFilms';
import {setFilms} from '../../redux/slices/filmsCharactersSlice';
import {Animated, Modal} from 'react-native';

import {
  TextStyled,
  ViewStyled,
  TouchableOpacityStyled,
  AnimatedScrollViewStyled,
} from './FilmsMenu.styles';
import {useAppSelector, useAppDispatch} from '../../redux/hooks/hooks';

const AnimatedFilmsMenu = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const films = useAppSelector(state => state.filmsData.films);
  const [isOpen, setIsOpen] = useState(true);
  const [animationValue] = useState(new Animated.Value(0));
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  useEffect(() => {
    const fetchFilms = async () => {
      const films = await FetchFilms();
      dispatch(setFilms(films));
    };
    fetchFilms();
    if (isOpen) {
      openAnimation();
    } else {
      closeAnimation();
    }
  }, [dispatch]);

  const openAnimation = () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const closeAnimation = () => {
    Animated.timing(animationValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const animatedStyle = {
    opacity: animationValue,
    transform: [
      {
        translateX: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0.01, 1],
        }),
      },
    ],
  };

  return (
    <AnimatedScrollViewStyled style={[{height: 130}, animatedStyle]}>
      <ViewStyled>
        {films.map(film => (
          <TouchableOpacityStyled
            key={film.episode_id}
            onPress={() => setIsOpen(false)}>
            <TextStyled numberOfLines={1}>{film.title}</TextStyled>
          </TouchableOpacityStyled>
        ))}
      </ViewStyled>
    </AnimatedScrollViewStyled>
  );
};

export default AnimatedFilmsMenu;
