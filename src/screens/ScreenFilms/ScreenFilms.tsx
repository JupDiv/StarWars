import React, {useMemo, useEffect} from 'react';
import {useAppSelector} from '../../redux/hooks/hooks';
import {RouteProp} from '@react-navigation/native';
import {Container, Block} from './ScreenFilms.styles';
import FilmsDetails from '../../components/FilmsDetails/FilmsDetails';
import {FilmsTypes} from '../../entites/types/FilmsTypes';
import {useAppDispatch} from '../../redux/hooks/hooks';
import {FlatList} from 'react-native';
import {useGetCharasterURL} from '../../redux/hooks/customHooks';
import StarWarsLoader from '../../components/StarWarsLoader/StarWarsLoader';
import {fetchFilms} from '../../redux/slices/filmsCharactersSlice';

type RootStackParamList = {
  ScreenFilms: {name: string};
};
type ScreenFilmsProps = {
  route: RouteProp<RootStackParamList, 'ScreenFilms'>;
};

const ScreenFilms = ({route}: ScreenFilmsProps) => {
  const {name} = route.params;
  const dispatch = useAppDispatch();
  const filmsData = useAppSelector(state => state.filmsData.films);
  const loading = useAppSelector(state => state.filmsData.loading);
  const status = useAppSelector(state => state.filmsData.status);
  const urlCharaster = useGetCharasterURL(name);

  const filteredFilms = useMemo(() => {
    return filmsData.filter((item: FilmsTypes) => {
      return item.characters.some((url: string) => url === urlCharaster);
    });
  }, [filmsData, urlCharaster]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFilms());
    }
    if (status === 'rejected') {
      throw new Error('An error occurred while fetching films.');
    }
  }, [dispatch]);

  const initialPage = useMemo(() => {
    if (loading) {
      return <StarWarsLoader />;
    }
    return (
      <FlatList
        data={filmsData}
        renderItem={({item}) => (
          <FilmsDetails
            isHighlighted={filteredFilms.includes(item)}
            {...item}
          />
        )}
        keyExtractor={(item: FilmsTypes) => item.episode_id.toString()}
      />
    );
  }, [loading]);

  return (
    <Container>
      <Block>{initialPage}</Block>
    </Container>
  );
};

export default ScreenFilms;
