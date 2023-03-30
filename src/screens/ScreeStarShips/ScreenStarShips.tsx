import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useAppSelector} from '../../redux/hooks/hooks';
import {RouteProp} from '@react-navigation/native';
import {setStarships} from '../../redux/slices/starshipsCharastersSlice';
import FetchStarShips from '../../utlis/FetchData/FetchStarShips';
import {useAppDispatch} from '../../redux/hooks/hooks';

type RootStackParamList = {
  ScreenStarShips: {name: string};
};
type ScreenStarShipsProps = {
  route: RouteProp<RootStackParamList, 'ScreenStarShips'>;
};

const ScreenStarShips = ({route}: ScreenStarShipsProps) => {
  const {name} = route.params;
  const dispatch = useAppDispatch();
  const starShips = useAppSelector(state => state.starshipsData.starships);

  useEffect(() => {
    const fetchStarShips = async () => {
      const starShips = await FetchStarShips();
      dispatch(setStarships(starShips));
    };
    fetchStarShips();
  }, [dispatch]);

  return (
    <View>
      {starShips.map(item => {
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

export default ScreenStarShips;
