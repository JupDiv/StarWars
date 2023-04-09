import React, {useCallback} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {AppRootStackParams} from '../../../App';
import {TouchableOpacityStyled, TextStyled} from './AdditionalMenuItem.styles';

type AdditionalMenuItemProps = {
  title: string;
  screenName: string;
  name: string;
};

const AdditionalMenuItem = ({
  title,
  screenName,
  name,
}: AdditionalMenuItemProps): JSX.Element => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppRootStackParams>>();

  const onPress = useCallback(() => {
    if (screenName === 'ScreenFilms') {
      navigation.navigate('ScreenFilms', {name});
    } else if (screenName === 'ScreenStarShips') {
      navigation.navigate('ScreenStarShips', {name});
    } else if (screenName === 'ScreenVehicles') {
      navigation.navigate('ScreenVehicles', {name});
    }
  }, [navigation, screenName, name]);

  return (
    <TouchableOpacityStyled onPress={onPress}>
      <TextStyled>{title}</TextStyled>
    </TouchableOpacityStyled>
  );
};

export default AdditionalMenuItem;
