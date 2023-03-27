/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
import {useState, useEffect} from 'react';
import {useAppDispatch} from '../../redux/hooks/hooks';
import FetchPlanetData from '../../utlis/FetchData/FetchPlanetData';
import FetchSpeciesData from '../../utlis/FetchData/FetchSpeciesData';
import {
  CharasterButton,
  CharasterBody,
  CharasterContainer,
  CharasterButtonText,
  CharasterText,
  CharasterTextTitle,
  CharasterBodyButton,
  BlockButtonWithMenu,
} from './CharacterDetails.styles';
import {
  addFavouriteCharaster,
  removeFavouriteCharaster,
} from '../../redux/slices/favoriteCharactersSlice';
import type {CharasterTypes} from '../../entites/types/CharasterTypes';

import AnimatedFilmsMenu from '../FilmsMenu/FilmsMenu';

type PersonDataProps = {
  isToggle: boolean;
};

type commonCharasterType = CharasterTypes & PersonDataProps;

function CharacterDetails({
  name,
  homeworld,
  gender,
  birth_year,
  species,
  height,
  mass,
  hair_color,
  skin_color,
  eye_color,
  isToggle,
}: commonCharasterType): JSX.Element {
  const dispatch = useAppDispatch();
  const [homeWorld, setPlanet] = useState<string>();
  const [isSpecies, setSpec] = useState<string>();
  const [isFavToggled, setIsFavToggled] = useState<boolean>(false);
  const [isOpenInfo, setIsOpenInfo] = useState<boolean>(true);

  const characterDataArray = {
    Name: name,
    Gender: gender,
    Birthday: birth_year,
    Height: height,
    Mass: mass,
    'Hair color': hair_color,
    'Skin Color': skin_color,
    'Eye color': eye_color,
  };

  useEffect(() => {
    FetchPlanetData(homeworld).then(data => {
      setPlanet(data);
    });

    species.forEach((personSpec): void => {
      FetchSpeciesData(personSpec).then(response => {
        setSpec(response);
      });
    });

    setIsFavToggled(false);
  }, [homeworld, species, isToggle]);

  function isToggleFavourite() {
    if (!isFavToggled) {
      dispatch(addFavouriteCharaster({name, gender}));
      setIsFavToggled(true);
    } else {
      dispatch(removeFavouriteCharaster({name, gender}));
      setIsFavToggled(false);
    }
  }

  return (
    <CharasterContainer>
      {Object.entries(characterDataArray).map(([title, value]) => (
        <CharasterBody key={title}>
          <CharasterTextTitle>{title}</CharasterTextTitle>
          <CharasterText>{value}</CharasterText>
        </CharasterBody>
      ))}
      <CharasterBody>
        <CharasterTextTitle>HomeWorld</CharasterTextTitle>
        <CharasterText>{homeWorld}</CharasterText>
      </CharasterBody>
      <CharasterBody>
        <CharasterTextTitle>Species</CharasterTextTitle>
        <CharasterText>{isSpecies}</CharasterText>
      </CharasterBody>
      <CharasterBodyButton>
        <CharasterButton onPress={() => isToggleFavourite()}>
          <CharasterButtonText>
            {isFavToggled ? `Delete` : 'Add'}
          </CharasterButtonText>
        </CharasterButton>
        <CharasterButton onPress={() => setIsOpenInfo(!isOpenInfo)}>
          <CharasterButtonText>
            {isOpenInfo ? 'Show films' : 'Close films'}
          </CharasterButtonText>
        </CharasterButton>
      </CharasterBodyButton>
      {isOpenInfo ? null : <AnimatedFilmsMenu name={name} />}
    </CharasterContainer>
  );
}

export default CharacterDetails;
