import {useEffect, useState, useMemo} from 'react';
import {CommonTypes} from '../../entites/types/CommonTypes';
import {
  BlockButton,
  PaginationButtonStyle,
  PaginationButtonText,
} from './PaginationControl.styles';
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

export default function PaginationControl({
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

  const previousButton = useMemo(() => {
    if (pagination.previous) {
      return (
        <PaginationButtonStyle onPress={() => setCurrentPage(currentPage - 1)}>
          <PaginationButtonText>Back</PaginationButtonText>
        </PaginationButtonStyle>
      );
    } else {
      return (
        <PaginationButtonStyle disabled style={{opacity: 0}}>
          <PaginationButtonText>Back</PaginationButtonText>
        </PaginationButtonStyle>
      );
    }
  }, [pagination.previous]);

  const nextButton = useMemo(() => {
    if (pagination.next) {
      return (
        <PaginationButtonStyle onPress={() => setCurrentPage(currentPage + 1)}>
          <PaginationButtonText>Next</PaginationButtonText>
        </PaginationButtonStyle>
      );
    } else {
      return null;
    }
  }, [pagination.next]);

  return (
    <BlockButton>
      {previousButton}
      {nextButton}
    </BlockButton>
  );
}
