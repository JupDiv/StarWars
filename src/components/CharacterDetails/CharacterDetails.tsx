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
} from './CharacterDetails.styles';
import {
  addFavouriteCharaster,
  removeFavouriteCharaster,
} from '../../redux/slices/favoriteCharactersSlice';
import type {CharasterTypes} from '../../entites/types/CharasterTypes';
import AdditionalMenu from '../AdditionalMenu/AdditionalMenu';

type CharacterDetailsProps = {
  isToggle: boolean;
  charaster: CharasterTypes;
};

function CharacterDetails({
  isToggle,
  charaster,
}: CharacterDetailsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [homeWorld, setPlanet] = useState<string>();
  const [isSpecies, setSpec] = useState<string>();
  const [isFavToggled, setIsFavToggled] = useState<boolean>(false);
  const [isOpenInfo, setIsOpenInfo] = useState<boolean>(true);
  const {homeworld, name, species, gender} = charaster;

  const charasterFilteredArray = Object.entries(charaster).filter(([key]) => {
    if (
      key === 'homeworld' ||
      key === 'species' ||
      key === 'films' ||
      key === 'vehicles' ||
      key === 'starships' ||
      key === 'created' ||
      key === 'edited' ||
      key === 'url' ||
      key === 'id'
    ) {
      return false;
    }
    return true;
  });

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
      {charasterFilteredArray.map(([title, value]) => (
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
            {isOpenInfo ? 'Show info' : 'Close info'}
          </CharasterButtonText>
        </CharasterButton>
      </CharasterBodyButton>
      {isOpenInfo ? null : <AdditionalMenu name={name} />}
    </CharasterContainer>
  );
}

export default CharacterDetails;
