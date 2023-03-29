import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useAppSelector} from '../../redux/hooks/hooks';
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
  const [isOpen, setIsOpen] = useState(false);

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
