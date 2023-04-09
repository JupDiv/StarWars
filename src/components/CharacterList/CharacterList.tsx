import React, {useMemo, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useAppSelector, useAppDispatch} from '../../redux/hooks/hooks';
import type {CharasterTypes} from '../../entites/types/CharasterTypes';
import CharacterCard from '../CharacterCard/CharacterCard';
import FavoriteStats from '../FavoriteStats/FavoriteStats';
import StarWarsLoader from '../StarWarsLoader/StarWarsLoader';
import PaginationControl from '../PaginationControl/PaginationControl';
import {CharasterListContainer} from './CharacterList.styles';
import {fetchCharacters} from '../../redux/slices/charactersDataSlice';

function CharacterList(): JSX.Element {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.fetchData.charaster);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const isLoading = useAppSelector(state => state.fetchData.loading);
  const status = useAppSelector(state => state.fetchData.status);

  useEffect(() => {
    if (status === 'rejected') {
      throw new Error('An error occurred while fetching charasters.');
    }
    dispatch(fetchCharacters(currentPage));
  }, [currentPage, dispatch]);

  const listCharasters = useMemo(() => {
    return isLoading ? (
      <StarWarsLoader />
    ) : (
      <FlatList
        data={data}
        renderItem={({item}) => (
          <CharacterCard isToggle={isToggle} charaster={item} />
        )}
        keyExtractor={(item: CharasterTypes) => item.id}
      />
    );
  }, [data, isLoading, isToggle]);

  return (
    <CharasterListContainer>
      <FavoriteStats isToggle={isToggle} setIsToggle={setIsToggle} />
      {listCharasters}
      <PaginationControl
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </CharasterListContainer>
  );
}

export default CharacterList;
