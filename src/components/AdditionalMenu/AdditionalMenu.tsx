import {useEffect, useState} from 'react';
import FetchFilms from '../../utlis/FetchData/FetchFilms';
import {setFilms} from '../../redux/slices/filmsCharactersSlice';
import {Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FilmsDetails from '../FilmsDetails/FilmsDetails';
// will do later refactoring ****************************************************
import {
  TextStyled,
  ViewStyled,
  TouchableOpacityStyled,
  AnimatedScrollViewStyled,
} from './AdditionalMenu.styles';
import {useAppDispatch} from '../../redux/hooks/hooks';

type FilmsMenuProps = {
  name: string;
};

const AdditionalMenu = ({name}: FilmsMenuProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(true);
  const [animationValue] = useState(new Animated.Value(0));
  const navigation = useNavigation();

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
        <TouchableOpacityStyled
          onPress={() => navigation.navigate('ScreenFilms', {name})}>
          <TextStyled>Films</TextStyled>
        </TouchableOpacityStyled>
        <TouchableOpacityStyled
          onPress={() => navigation.navigate('ScreenStarShips', {name})}>
          <TextStyled>starships</TextStyled>
        </TouchableOpacityStyled>
        <TouchableOpacityStyled
          onPress={() => navigation.navigate('ScreenVehicles', {name})}>
          <TextStyled>vehicles</TextStyled>
        </TouchableOpacityStyled>
      </ViewStyled>
    </AnimatedScrollViewStyled>
  );
};

export default AdditionalMenu;
