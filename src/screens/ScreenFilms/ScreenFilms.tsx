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
import useGetCharasterURL from '../../redux/hooks/customHooks';

type RootStackParamList = {
  ScreenFilms: {name: string};
};
type ScreenFilmsProps = {
  route: RouteProp<RootStackParamList, 'ScreenFilms'>;
};

const ScreenFilms = ({route}: ScreenFilmsProps) => {
  const {name} = route.params;
  const filmsData = useAppSelector(state => state.filmsData.films);
  const urlCharaster = useGetCharasterURL(name);

  const result = filmsData.filter((item: FilmsTypes) => {
    return item.characters.some((url: string) => url === urlCharaster);
  });

  return (
    <Container>
      <FlatList
        data={filmsData}
        renderItem={({item}) => (
          <FilmsDetails isHighlighted={result.includes(item)} {...item} />
        )}
        keyExtractor={(item: FilmsTypes) => item.episode_id.toString()}
      />
    </Container>
  );
};

export default ScreenFilms;
