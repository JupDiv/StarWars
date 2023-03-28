import React from 'react';
import {View, Text} from 'react-native';
import {useAppSelector} from '../redux/hooks/hooks';

const ScreenStarShips = () => {
  const filmsData = useAppSelector(state => state.filmsData.films);

  return (
    <View>
      {filmsData.map(item => {
        return <Text key={item.title}>{item.title}</Text>;
      })}
      <Text>InfoAboutFilms</Text>
    </View>
  );
};

export default ScreenStarShips;
