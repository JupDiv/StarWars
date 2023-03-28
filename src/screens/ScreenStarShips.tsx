import React from 'react';
import {View, Text} from 'react-native';
import {useAppSelector} from '../redux/hooks/hooks';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  ScreenStarShips: {name: string};
};
type ScreenStarShipsProps = {
  route: RouteProp<RootStackParamList, 'ScreenStarShips'>;
};

const ScreenStarShips = ({route}: ScreenStarShipsProps) => {
  const {name} = route.params;
  const starShips = useAppSelector(state => state.starshipsData.starships);

  return (
    <View>
      {starShips.map(item => {
        return <Text key={item.name}>{item.name}</Text>;
      })}
      <Text>{name}</Text>
    </View>
  );
};

export default ScreenStarShips;
