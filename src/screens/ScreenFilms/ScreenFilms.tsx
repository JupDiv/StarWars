import React, {useState, useEffect} from 'react';
import {useAppSelector} from '../../redux/hooks/hooks';
import {RouteProp} from '@react-navigation/native';
import {Container, Block} from './ScreenFilms.styles';
import FetchFilms from '../../utlis/FetchData/FetchFilms';
import {setFilms} from '../../redux/slices/filmsCharactersSlice';
import FilmsDetails from '../../components/FilmsDetails/FilmsDetails';
import {FilmsTypes} from '../../entites/types/FilmsTypes';
import {useAppDispatch} from '../../redux/hooks/hooks';
import {FlatList} from 'react-native';
import {useGetCharasterURL} from '../../redux/hooks/customHooks';
import StarWarsLoader from '../../components/StarWarsLoader/StarWarsLoader';

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
  const urlCharaster = useGetCharasterURL(name);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFilms = async () => {
      const films = await FetchFilms();
      setIsLoading(false);
      dispatch(setFilms(films));
    };
    fetchFilms();
  }, [dispatch]);

  const filteredFilms = filmsData.filter((item: FilmsTypes) => {
    return item.characters.some((url: string) => url === urlCharaster);
  });

  return (
    <Container>
      <Block>
        {isLoading ? (
          <StarWarsLoader />
        ) : (
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
        )}
      </Block>
    </Container>
  );
};

export default ScreenFilms;
