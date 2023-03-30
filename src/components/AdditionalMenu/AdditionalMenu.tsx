import {useEffect, useState} from 'react';
import FetchFilms from '../../utlis/FetchData/FetchFilms';
import {setFilms} from '../../redux/slices/filmsCharactersSlice';
import {setStarships} from '../../redux/slices/starshipsCharastersSlice';
import {setVehicles} from '../../redux/slices/vehiclesCharastersSlice';
import FetchStarShips from '../../utlis/FetchData/FetchStarShips';
import FetchVehicles from '../../utlis/FetchData/FetchVehicles';
import {Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  TextStyled,
  ViewStyled,
  TouchableOpacityStyled,
  AnimatedScrollViewStyled,
} from './AdditionalMenu.styles';
import {useAppDispatch} from '../../redux/hooks/hooks';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppRootStackParams} from '../../../App';

type FilmsMenuProps = {
  name: string;
};

const AdditionalMenu = ({name}: FilmsMenuProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(true);
  const [animationValue] = useState(new Animated.Value(0));
  const navigation =
    useNavigation<NativeStackNavigationProp<AppRootStackParams>>();
  //rebuild redux
  useEffect(() => {
    const fetchFilms = async () => {
      const films = await FetchFilms();
      dispatch(setFilms(films));
    };
    const fetchStarShips = async () => {
      const starships = await FetchStarShips();
      dispatch(setStarships(starships));
    };
    const fetchVehicles = async () => {
      const vehicles = await FetchVehicles();
      dispatch(setVehicles(vehicles));
    };
    fetchStarShips();
    fetchVehicles();
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
    setIsOpen(false);
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
          <TextStyled>Starships</TextStyled>
        </TouchableOpacityStyled>
        <TouchableOpacityStyled
          onPress={() => navigation.navigate('ScreenVehicles', {name})}>
          <TextStyled>Vehicles</TextStyled>
        </TouchableOpacityStyled>
      </ViewStyled>
    </AnimatedScrollViewStyled>
  );
};

export default AdditionalMenu;
