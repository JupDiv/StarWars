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
import PaginationControls from '../PaginationControls/PaginationControls';
import FavoriteStats from '../FavoriteStats/FavoriteStats';

function CharacterList(): JSX.Element {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.fetchData.charaster);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isToggle, setIsToggle] = useState<boolean>(false);

  useEffect(() => {
    FetchCharacters(currentPage).then(response => {
      dispatch(addCharasters(response));
    });
  }, [currentPage, dispatch]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.dark,
      }}>
      <FavoriteStats isToggle={isToggle} setIsToggle={setIsToggle} />
      <FlatList
        data={data}
        renderItem={({item}) => <CharacterCard isToggle={isToggle} {...item} />}
        keyExtractor={(item: CharasterTypes) => (item.id ? item.id : '0')}
      />

      <PaginationControls
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </SafeAreaView>
  );
}

export default CharacterList;
