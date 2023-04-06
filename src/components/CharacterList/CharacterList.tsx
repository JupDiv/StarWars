import React from 'react';
import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useAppSelector, useAppDispatch} from '../../redux/hooks/hooks';
import {addCharasters} from '../../redux/slices/charactersDataSlice';
import FetchCharacters from '../../utlis/FetchData/FetchCharacters';
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

  return (
    <CharasterListContainer>
      <FavoriteStats isToggle={isToggle} setIsToggle={setIsToggle} />
      {isLoading ? (
        <StarWarsLoader />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <CharacterCard isToggle={isToggle} charaster={item} />
          )}
          keyExtractor={(item: CharasterTypes) => item.id}
        />
      )}

      <PaginationControl
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </CharasterListContainer>
  );
}

export default CharacterList;
