import {useEffect, useState} from 'react';
import {CommonTypes} from '../../entites/types/CommonTypes';
import {
  BlockButton,
  PaginationButtonStyle,
  PaginationButtonText,
} from './PaginationCommonPage.styles';
import FetchStarShips from '../../utlis/FetchData/FetchStarShips';
import FetchVehicles from '../../utlis/FetchData/FetchVehicles';
import FetchCharacters from '../../utlis/FetchData/FetchCharacters';
import {useNavigationState} from '@react-navigation/native';

type paginationResponse = Pick<CommonTypes, 'next' | 'previous'>;

interface DirectionProps {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

const initialState = {
  next: '',
  previous: '',
};

export default function PaginationCommonPage({
  currentPage,
  setCurrentPage,
}: DirectionProps): JSX.Element {
  const [pagination, setPagination] =
    useState<paginationResponse>(initialState);

  const title = useNavigationState(state => state.routes[state.index].name);

  useEffect(() => {
    if (title === 'ScreenStarShips') {
      FetchStarShips(currentPage).then(({next, previous}: paginationResponse) =>
        setPagination({next, previous}),
      );
    }
    if (title === 'ScreenVehicles') {
      FetchVehicles(currentPage).then(({next, previous}: paginationResponse) =>
        setPagination({next, previous}),
      );
    }
    if (title === 'Home') {
      FetchCharacters(currentPage).then(
        ({next, previous}: paginationResponse) =>
          setPagination({next, previous}),
      );
    }
  }, [currentPage]);

  const disabledButton = (
    <PaginationButtonStyle disabled style={{opacity: 0}}>
      <PaginationButtonText>Back</PaginationButtonText>
    </PaginationButtonStyle>
  );

  return (
    <BlockButton>
      {pagination.previous ? (
        <PaginationButtonStyle onPress={() => setCurrentPage(currentPage - 1)}>
          <PaginationButtonText>Back</PaginationButtonText>
        </PaginationButtonStyle>
      ) : (
        disabledButton
      )}
      {pagination.next ? (
        <PaginationButtonStyle onPress={() => setCurrentPage(currentPage + 1)}>
          <PaginationButtonText>Next</PaginationButtonText>
        </PaginationButtonStyle>
      ) : null}
    </BlockButton>
  );
}
