import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useAppSelector} from '../../redux/hooks/hooks';
import {setStarships} from '../../redux/slices/starshipsCharastersSlice';
import FetchStarShips from '../../utlis/FetchData/FetchStarShips';
import {useAppDispatch} from '../../redux/hooks/hooks';
import {ScreenContainer} from './ScreenStarShips.styles';
import StarshipsTitleMenu from '../../components/StarshipsTitleMenu/StarshipsTitleMenu';
import {RouteProp} from '@react-navigation/native';
import {useGetCharasterURL} from '../../redux/hooks/customHooks';
import {StarshipsTypes} from '../../entites/types/StarshipsTypes';
import StarWarsLoader from '../../components/StarWarsLoader/StarWarsLoader';
import PaginationControl from '../../components/PaginationControl/PaginationControl';

type RootStackParamList = {
  ScreenStarShips: {name: string};
};
type ScreenStarShipsProps = {
  route: RouteProp<RootStackParamList, 'ScreenStarShips'>;
};

const ScreenStarShips = ({route}: ScreenStarShipsProps) => {
  const {name} = route.params;
  const dispatch = useAppDispatch();
  const starShipsData = useAppSelector(state => state.starshipsData.starships);
  const urlCharaster = useGetCharasterURL(name);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStarShips = async () => {
      const {results} = await FetchStarShips(currentPage);
      setIsLoading(false);
      dispatch(setStarships(results));
    };
    fetchStarShips();
  }, [dispatch, currentPage]);

  const filteredStarShips = starShipsData.filter((item: StarshipsTypes) => {
    return item.pilots.some((url: string) => url === urlCharaster);
  });

  return (
    <ScreenContainer>
      {isLoading ? (
        <StarWarsLoader />
      ) : (
        <FlatList
          data={starShipsData}
          renderItem={({item}) => (
            <StarshipsTitleMenu
              isHighlighted={filteredStarShips.includes(item)}
              starship={item}
            />
          )}
          keyExtractor={item => item.name}
        />
      )}
      <PaginationControl
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </ScreenContainer>
  );
};

export default ScreenStarShips;
