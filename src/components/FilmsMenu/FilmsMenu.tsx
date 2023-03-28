import {useEffect, useState} from 'react';
import FetchFilms from '../../utlis/FetchData/FetchFilms';
import {setFilms} from '../../redux/slices/filmsCharactersSlice';
import {Animated} from 'react-native';
import FilmsDetails from '../FilmsDetails/FilmsDetails';
// will do later refactoring ****************************************************
import {
  TextStyled,
  ViewStyled,
  TouchableOpacityStyled,
  AnimatedScrollViewStyled,
} from './FilmsMenu.styles';
import {useAppSelector, useAppDispatch} from '../../redux/hooks/hooks';
import {FilmsTypes} from '../../entites/types/FilmsTypes';

type FilmsMenuProps = {
  name: string;
};

const AnimatedFilmsMenu = ({name}: FilmsMenuProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const filmsData = useAppSelector(state => state.filmsData.films);
  const charaster = useAppSelector(state => state.fetchData.charaster);
  const [isOpen, setIsOpen] = useState(true);
  const [animationValue] = useState(new Animated.Value(0));
  const [selecetedFilm, setSelectedFilm] = useState<FilmsTypes | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [films] = charaster.filter(item => item.name === name);
  const listSelectedFilms = filmsData.filter(({url}) =>
    films.films.includes(url),
  );

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

  function handleSelectedFilm(film: FilmsTypes) {
    setIsOpen(false);
    setSelectedFilm(film);
    setModalVisible(true);
  }

  return (
    <AnimatedScrollViewStyled style={[{height: 130}, animatedStyle]}>
      <ViewStyled>
        {listSelectedFilms.map(film => {
          if (!selecetedFilm) {
            return (
              <TouchableOpacityStyled
                key={film.episode_id}
                onPress={() => handleSelectedFilm({...film})}>
                <TextStyled numberOfLines={1}>{film.title}</TextStyled>
              </TouchableOpacityStyled>
            );
          }
          if (selecetedFilm.episode_id === film.episode_id) {
            return (
              <FilmsDetails
                key={film.episode_id}
                {...selecetedFilm}
                setSelectedFilm={setSelectedFilm}
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
              />
            );
          }
          return null;
        })}
      </ViewStyled>
    </AnimatedScrollViewStyled>
  );
};

export default AnimatedFilmsMenu;
