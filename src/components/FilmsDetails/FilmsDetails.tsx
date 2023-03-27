import {useEffect, useState} from 'react';
import {FilmsTypes} from '../../entites/types/FilmsTypes';
import {Modal} from 'react-native';

import {
  FilmsDetailsContainer,
  FilmsDetailsText,
  FilmsHeaderTitle,
  FilmsTableBody,
  FilmsDetailsBody,
  FilmsDetailsButton,
  FilmsDetailsButtonText,
  FilmsHeaderBody,
  ModalStyled,
  FilmsDescriptionBlock,
  FilmsDetailsTable,
  FilmsDetailsTableText,
  FilmsDetailsTableTitile,
} from './FilmsDetails.styles';

type FilmsMenuProps = {
  setSelectedFilm: (value: null) => void;
  setModalVisible: (value: boolean) => void;
  modalVisible: boolean;
};

function FilmsDetails({
  title,
  episode_id,
  opening_crawl,
  director,
  producer,
  release_date,
  setSelectedFilm,
  setModalVisible,
  modalVisible,
}: FilmsTypes & FilmsMenuProps): JSX.Element {
  const groupDataFilm = {
    Episode: episode_id,
    Director: director,
    Producer: producer,
    Release: release_date,
  };

  return (
    <ModalStyled
      presentationStyle="fullScreen"
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <FilmsDetailsContainer>
        <FilmsHeaderBody>
          <FilmsHeaderTitle>{title}</FilmsHeaderTitle>

          {Object.entries(groupDataFilm).map(([key, value]) => {
            return (
              <FilmsTableBody>
                <FilmsDetailsTableTitile>{key}</FilmsDetailsTableTitile>
                <FilmsDetailsTableText>{value}</FilmsDetailsTableText>
              </FilmsTableBody>
            );
          })}
        </FilmsHeaderBody>
        <FilmsDescriptionBlock>
          <FilmsDetailsText>{opening_crawl}</FilmsDetailsText>
        </FilmsDescriptionBlock>
        <FilmsDetailsBody>
          <FilmsDetailsButton onPress={() => setSelectedFilm(null)}>
            <FilmsDetailsButtonText>Back</FilmsDetailsButtonText>
          </FilmsDetailsButton>
        </FilmsDetailsBody>
      </FilmsDetailsContainer>
    </ModalStyled>
  );
}

export default FilmsDetails;
