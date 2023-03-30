import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useAppSelector} from '../../redux/hooks/hooks';
import {RouteProp} from '@react-navigation/native';
import {setVehicles} from '../../redux/slices/vehiclesCharastersSlice';
import FetchVehicles from '../../utlis/FetchData/FetchVehicles';
import {useAppDispatch} from '../../redux/hooks/hooks';

type RootStackParamList = {
  ScreenVehicles: {name: string};
};
type ScreenStarShipsProps = {
  route: RouteProp<RootStackParamList, 'ScreenVehicles'>;
};

const ScreenVehicles = ({route}: ScreenStarShipsProps) => {
  const {name} = route.params;
  const dispatch = useAppDispatch();
  const vehicles = useAppSelector(state => state.vehiclesData.vehicles);

  useEffect(() => {
    const fetchVehicles = async () => {
      const vehicles = await FetchVehicles();
      dispatch(setVehicles(vehicles));
    };
    fetchVehicles();
  }, [dispatch]);

  return (
    <View>
      {vehicles.map(item => {
        return (
          <Text style={{color: 'white'}} key={item.name}>
            {item.name}
          </Text>
        );
      })}
      <Text>{name}</Text>
    </View>
  );
};

export default ScreenVehicles;
