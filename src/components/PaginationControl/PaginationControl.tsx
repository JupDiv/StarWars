import {useEffect, useCallback} from 'react';
import {AsyncThunk, AsyncThunkConfig} from '@reduxjs/toolkit';
import {
  BlockButton,
  PaginationButtonStyle,
  PaginationButtonText,
} from './PaginationControl.styles';
import {useAppDispatch, useAppSelector} from '../../redux/hooks/hooks';
import {useRoute} from '@react-navigation/native';
import {fetchCharastersPagination} from '../../redux/slices/paginationCharastersSlice';
import {fetchStarshipsPagination} from '../../redux/slices/paginationStarshipsSlice';
import {fetchVehiclesPagination} from '../../redux/slices/paginationVehiclesSlice';

interface FetchActions {
  Home: AsyncThunk<
    {previous: string; next: string},
    {numberOfPage: number},
    AsyncThunkConfig
  >;
  ScreenStarShips: AsyncThunk<
    {previous: string; next: string},
    {numberOfPage: number},
    AsyncThunkConfig
  >;
  ScreenVehicles: AsyncThunk<
    {previous: string; next: string},
    {numberOfPage: number},
    AsyncThunkConfig
  >;
  [key: string]: AsyncThunk<any, any, any>;
}

type PaginationResponse = {
  previous: string | null;
  next: string | null;
};

interface DirectionProps {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

export default function PaginationControl({
  currentPage,
  setCurrentPage,
}: DirectionProps): JSX.Element {
  const dispatch = useAppDispatch();
  const route = useRoute();
  const title = route.name;
  const paginationCharastersData = useAppSelector(
    state => state.paginationCharasters,
  );
  const paginationStarshipsData = useAppSelector(
    state => state.paginationStarships,
  );
  const paginationVehiclesData = useAppSelector(
    state => state.paginationVehicles,
  );

  useEffect(() => {
    const fetchPaginationData: FetchActions = {
      Home: fetchCharastersPagination,
      ScreenStarShips: fetchStarshipsPagination,
      ScreenVehicles: fetchVehiclesPagination,
    };
    if (fetchPaginationData[title]) {
      dispatch(fetchPaginationData[title]({numberOfPage: currentPage}));
    }
  }, [currentPage, title, dispatch]);

  const getPaginationData = (): PaginationResponse => {
    const paginationData: {
      [key in
        | 'Home'
        | 'ScreenStarShips'
        | 'ScreenVehicles']: PaginationResponse;
    } = {
      Home: paginationCharastersData,
      ScreenStarShips: paginationStarshipsData,
      ScreenVehicles: paginationVehiclesData,
    };

    return paginationData[
      title as 'Home' | 'ScreenStarShips' | 'ScreenVehicles'
    ];
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  function handleNextPage() {
    setCurrentPage(currentPage + 1);
  }

  const renderButton = useCallback(
    (direction: 'previous' | 'next') => {
      const paginationPage: PaginationResponse = getPaginationData();
      const isDisabled =
        direction === 'previous'
          ? !paginationPage.previous
          : !paginationPage.next;
      const buttonText = direction === 'previous' ? 'Back' : 'Next';
      const onPressHandler =
        direction === 'previous' ? handlePreviousPage : handleNextPage;

      return (
        <PaginationButtonStyle
          disabled={isDisabled}
          onPress={onPressHandler}
          style={isDisabled ? {opacity: 0} : {}}>
          <PaginationButtonText>{buttonText}</PaginationButtonText>
        </PaginationButtonStyle>
      );
    },
    [handlePreviousPage, handleNextPage, getPaginationData],
  );

  return (
    <BlockButton>
      {renderButton('previous')}
      {renderButton('next')}
    </BlockButton>
  );
}
