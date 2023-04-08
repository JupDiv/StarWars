import {useState, useEffect, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/hooks/hooks';
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
import {fetchAllPlanets} from '../../redux/slices/planetsSlice';
import {fetchAllSpecies} from '../../redux/slices/speciesSlice';

type CharacterDetailsProps = {
  isToggle: boolean;
  charaster: CharasterTypes;
};

function CharacterDetails({
  isToggle,
  charaster,
}: CharacterDetailsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [isFavToggled, setIsFavToggled] = useState<boolean>(false);
  const [isOpenInfo, setIsOpenInfo] = useState<boolean>(true);
  const {homeworld, name, gender, url} = charaster;
  const planets = useAppSelector(state => state.fetchPlanets.planets);
  const species = useAppSelector(state => state.fetchSpecies.species);

  const isFavouriteMale = useAppSelector(
    state => state.favouriteCharaster.male,
  );
  const isFavouriteFemale = useAppSelector(
    state => state.favouriteCharaster.female,
  );
  const isFavouriteOther = useAppSelector(
    state => state.favouriteCharaster.other,
  );

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
    dispatch(fetchAllPlanets());
    dispatch(fetchAllSpecies());

    setIsFavToggled(false);
  }, [isToggle]);

  function isToggleFavourite() {
    if (!isFavToggled) {
      dispatch(addFavouriteCharaster({name, gender}));
      setIsFavToggled(true);
    } else {
      dispatch(removeFavouriteCharaster({name, gender}));
      setIsFavToggled(false);
    }
  }

  const characterDetails = useMemo(() => {
    if (isOpenInfo) {
      return null;
    }
    return <AdditionalMenu name={name} />;
  }, [isOpenInfo, name]);

  const buttonAddDelete = useMemo(() => {
    if (isFavToggled) {
      return `Delete`;
    } else {
      return 'Add';
    }
  }, [isFavToggled]);

  const showCloseButton = useMemo(() => {
    if (isOpenInfo) {
      return 'Show';
    } else {
      return 'Close';
    }
  }, [isOpenInfo]);

  const homeWorld = useMemo(() => {
    const planet = planets.find(planet => planet.url === homeworld);

    if (planet) {
      return planet.name;
    }
    return '';
  }, [homeworld, planets]);

  const speciesTest = useMemo(() => {
    const spec = species.find(spec => spec.people.includes(url));

    if (spec) {
      return spec.name;
    }
    return '';
  }, [species, url]);

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
        <CharasterText>{speciesTest}</CharasterText>
      </CharasterBody>
      <CharasterBodyButton>
        <CharasterButton onPress={() => isToggleFavourite()}>
          <CharasterButtonText>{buttonAddDelete}</CharasterButtonText>
        </CharasterButton>
        <CharasterButton onPress={() => setIsOpenInfo(!isOpenInfo)}>
          <CharasterButtonText>{showCloseButton}</CharasterButtonText>
        </CharasterButton>
      </CharasterBodyButton>
      {characterDetails}
    </CharasterContainer>
  );
}

export default CharacterDetails;
