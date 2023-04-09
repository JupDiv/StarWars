import {useEffect, useState} from 'react';
import {Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ViewStyled, AnimatedScrollViewStyled} from './AdditionalMenu.styles';
import {useAppDispatch} from '../../redux/hooks/hooks';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppRootStackParams} from '../../../App';
import AdditionalMenuItem from '../AdditionalMenuItem/AdditionalMenuItem';

type FilmsMenuProps = {
  name: string;
};

const AdditionalMenu = ({name}: FilmsMenuProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(true);
  const [animationValue] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isOpen) {
      openAnimation();
    } else {
      closeAnimation();
    }
    () => {
      animationValue.stopAnimation();
    };
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
        <AdditionalMenuItem
          title="Films"
          screenName="ScreenFilms"
          name={name}
        />
        <AdditionalMenuItem
          title="StarShips"
          screenName="ScreenStarShips"
          name={name}
        />
        <AdditionalMenuItem
          title="Vehicles"
          screenName="ScreenVehicles"
          name={name}
        />
      </ViewStyled>
    </AnimatedScrollViewStyled>
  );
};

export default AdditionalMenu;
