import React, {useState, useEffect} from 'react';
import {useAppSelector} from '../../redux/hooks/hooks';
import {RouteProp} from '@react-navigation/native';
import {
  Container,
  Block,
  TextStyled,
  StyledFlatList,
} from './ScreenFilms.styles';
import FilmsDetails from '../../components/FilmsDetails/FilmsDetails';
import {FilmsTypes} from '../../entites/types/FilmsTypes';
import {FlatList} from 'react-native';

type RootStackParamList = {
  ScreenFilms: {name: string};
};
type ScreenFilmsProps = {
  route: RouteProp<RootStackParamList, 'ScreenFilms'>;
};
const ScreenFilms = ({route}: ScreenFilmsProps) => {
  const {name} = route.params;
  const filmsData = useAppSelector(state => state.filmsData.films);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <FlatList
        data={filmsData}
        renderItem={({item}) => <FilmsDetails {...item} />}
        keyExtractor={(item: FilmsTypes) => item.episode_id.toString()}
      />
    </Container>
  );
};

export default ScreenFilms;
