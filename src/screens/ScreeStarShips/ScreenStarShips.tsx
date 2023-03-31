import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useAppSelector} from '../../redux/hooks/hooks';
import {setStarships} from '../../redux/slices/starshipsCharastersSlice';
import FetchStarShips from '../../utlis/FetchData/FetchStarShips';
import {useAppDispatch} from '../../redux/hooks/hooks';
import {ScreenContainer} from './ScreenStarShips.styles';
import StarshipsTitleMenu from '../../components/StarshipsTitleMenu/StarshipsTitleMenu';

const ScreenStarShips = () => {
  const dispatch = useAppDispatch();
  const starShips = useAppSelector(state => state.starshipsData.starships);

  useEffect(() => {
    const fetchStarShips = async () => {
      const starShips = await FetchStarShips();
      dispatch(setStarships(starShips));
    };
    fetchStarShips();
  }, [dispatch]);

  // I need will do function which return url and name of starship and then I will use it in FlatList
  // as conditionally for component and

  return (
    <ScreenContainer>
      <FlatList
        data={starShips}
        renderItem={({item}) => <StarshipsTitleMenu starship={item} />}
        keyExtractor={item => item.name}
      />
    </ScreenContainer>
  );
};

export default ScreenStarShips;
