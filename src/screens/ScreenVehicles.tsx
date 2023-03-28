import React from 'react';
import {View, Text} from 'react-native';
import {useAppSelector} from '../redux/hooks/hooks';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  ScreenVehicles: {name: string};
};
type ScreenStarShipsProps = {
  route: RouteProp<RootStackParamList, 'ScreenVehicles'>;
};

const ScreenVehicles = ({route}: ScreenStarShipsProps) => {
  const {name} = route.params;
  const vehicles = useAppSelector(state => state.vehiclesData.vehicles);

  return (
    <View>
      {vehicles.map(item => {
        return <Text key={item.name}>{item.name}</Text>;
      })}
      <Text>{name}</Text>
    </View>
  );
};

export default ScreenVehicles;
