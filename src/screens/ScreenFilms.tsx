import React from 'react';
import {View, Text} from 'react-native';
import {useAppSelector} from '../redux/hooks/hooks';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  ScreenFilms: {name: string};
};
type ScreenFilmsProps = {
  route: RouteProp<RootStackParamList, 'ScreenFilms'>;
};
const ScreenFilms = ({route}: ScreenFilmsProps) => {
  const {name} = route.params;
  console.log(name);
  const filmsData = useAppSelector(state => state.filmsData.films);

  return (
    <View>
      {filmsData.map(item => {
        return <Text key={item.title}>{item.title}</Text>;
      })}
      <Text>{name}</Text>
    </View>
  );
};

export default ScreenFilms;
