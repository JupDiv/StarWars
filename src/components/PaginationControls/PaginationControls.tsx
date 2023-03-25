import { useEffect, useState } from 'react';
import getPagination from '../../utlis/FetchData/FetchPaginatedData';
import Data from '../../entites/types/CommonTypes';
import {
  BlockButton,
  PaginationButtonStyle,
  PaginationButtonText,
} from './PaginationControls.styles';

type paginationResponse = Pick<Data, 'next' | 'previous'>;

interface DirectionProps {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

const initialState = {
  next: null,
  previous: null,
};

export default function PaginationControls({
  currentPage,
  setCurrentPage,
}: DirectionProps): JSX.Element {
  const [pagination, setPagination] =
    useState<paginationResponse>(initialState);

  useEffect(() => {
    getPagination(currentPage).then((response) => setPagination(response));
  }, [currentPage]);

  const disabledButton = (
    <PaginationButtonStyle disabled style={{ opacity: 0 }}>
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
