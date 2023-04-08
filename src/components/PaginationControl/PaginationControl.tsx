import {useEffect, useState, useMemo} from 'react';
import {
  BlockButton,
  PaginationButtonStyle,
  PaginationButtonText,
} from './PaginationControl.styles';
import {useAppDispatch, useAppSelector} from '../../redux/hooks/hooks';
import {setIsAnimating} from '../../redux/slices/animationSlice';
import {useRoute} from '@react-navigation/native';
import {fetchCharastersPagination} from '../../redux/slices/paginationCharastersSlice';
import {fetchStarshipsPagination} from '../../redux/slices/paginationStarshipsSlice';
import {fetchVehiclesPagination} from '../../redux/slices/paginationVehiclesSlice';

type paginationResponse = {
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
    if (title === 'ScreenStarShips') {
      dispatch(fetchStarshipsPagination({numberOfPage: currentPage}));
    }
    if (title === 'ScreenVehicles') {
      dispatch(fetchVehiclesPagination({numberOfPage: currentPage}));
    }
    if (title === 'Home') {
      dispatch(fetchCharastersPagination({numberOfPage: currentPage}));
    }
  }, [currentPage]);

  const getPaginationData = () => {
    if (title === 'ScreenStarShips') {
      return paginationStarshipsData;
    }
    if (title === 'ScreenVehicles') {
      return paginationVehiclesData;
    }
    return paginationCharastersData;
  };

  const handlePreviousPage = () => {
    dispatch(setIsAnimating(false));
    setCurrentPage(currentPage - 1);
  };
  function handleNextPage() {
    dispatch(setIsAnimating(false));
    setCurrentPage(currentPage + 1);
  }

  const previousButton = useMemo(() => {
    const paginationPage: paginationResponse = getPaginationData();
    if (paginationPage.previous) {
      return (
        <PaginationButtonStyle onPress={handlePreviousPage}>
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
  }, [
    paginationCharastersData,
    paginationStarshipsData,
    paginationVehiclesData,
  ]);

  const nextButton = useMemo(() => {
    const paginationPage: paginationResponse = getPaginationData();
    if (paginationPage.next) {
      return (
        <PaginationButtonStyle onPress={handleNextPage}>
          <PaginationButtonText>Next</PaginationButtonText>
        </PaginationButtonStyle>
      );
    } else {
      return null;
    }
  }, [
    paginationCharastersData,
    paginationStarshipsData,
    paginationVehiclesData,
  ]);

  return (
    <BlockButton>
      {previousButton}
      {nextButton}
    </BlockButton>
  );
}
