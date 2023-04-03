/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {colors} from '../../styles/theme';
import {useAppSelector, useAppDispatch} from '../../redux/hooks/hooks';
import {addCharasters} from '../../redux/slices/charactersDataSlice';
import FetchCharacters from '../../utlis/FetchData/FetchCharacters';
import type {CharasterTypes} from '../../entites/types/CharasterTypes';
import CharacterCard from '../CharacterCard/CharacterCard';
import FavoriteStats from '../FavoriteStats/FavoriteStats';
import StarWarsLoader from '../StarWarsLoader/StarWarsLoader';
import PaginationControl from '../PaginationControl/PaginationControl';
import {CharasterListContainer} from './CharacterList.styles';

function CharacterList(): JSX.Element {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.fetchData.charaster);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      const {results} = await FetchCharacters(currentPage);
      dispatch(addCharasters(results));
      setIsLoading(false);
    }
    fetchData();
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
          keyExtractor={(item: CharasterTypes) => (item.id ? item.id : '0')}
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
