import {useEffect, useState} from 'react';
import {CommonTypes} from '../../entites/types/CommonTypes';
import {
  BlockButton,
  PaginationButtonStyle,
  PaginationButtonText,
} from './Pagination.styles';
import FetchStarShips from '../../utlis/FetchData/FetchStarShips';

type paginationResponse = Pick<CommonTypes, 'next' | 'previous'>;

interface DirectionProps {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

const initialState = {
  next: '',
  previous: '',
};

export default function Pagination({
  currentPage,
  setCurrentPage,
}: DirectionProps): JSX.Element {
  const [pagination, setPagination] =
    useState<paginationResponse>(initialState);

  useEffect(() => {
    FetchStarShips(currentPage).then(({next, previous}: paginationResponse) =>
      setPagination({next, previous}),
    );
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
