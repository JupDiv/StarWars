import {useEffect, useState} from 'react';
import {FilmsTypes} from '../../entites/types/FilmsTypes';
import {Modal} from 'react-native';

import {
  FilmsDetailsContainer,
  FilmsDetailsText,
  FilmsHeaderTitle,
  FilmsHeaderText,
  FilmsDetailsBody,
  FilmsDetailsButton,
  FilmsDetailsButtonText,
  FilmsHeaderBody,
  ModalStyled,
  FilmsDescriptionBlock,
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
          <FilmsHeaderText>{episode_id}</FilmsHeaderText>
          <FilmsHeaderText>{director}</FilmsHeaderText>
          <FilmsHeaderText>{producer}</FilmsHeaderText>
          <FilmsHeaderText>{release_date}</FilmsHeaderText>
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
