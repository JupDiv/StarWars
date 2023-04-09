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

  const isFilteredKey = (key: string): boolean => {
    return ![
      'homeworld',
      'species',
      'films',
      'vehicles',
      'starships',
      'created',
      'edited',
      'url',
      'id',
    ].includes(key);
  };

  const charasterFilteredArray = Object.entries(charaster).filter(([key]) =>
    isFilteredKey(key),
  );

  useEffect(() => {
    dispatch(fetchAllPlanets());
    dispatch(fetchAllSpecies());
  }, [isToggle, dispatch]);

  const isToggleFavourite = () => {
    if (!isFavToggled) {
      dispatch(addFavouriteCharaster({name, gender}));
      setIsFavToggled(true);
    } else {
      dispatch(removeFavouriteCharaster({name, gender}));
      setIsFavToggled(false);
    }
  };

  const buttonAddDelete = useMemo(() => {
    console.log(isToggle);
    if (isFavToggled) {
      return `Delete`;
    } else {
      return 'Add';
    }
  }, [isFavToggled, isToggle]);

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
        <CharasterButton onPress={isToggleFavourite}>
          <CharasterButtonText>{buttonAddDelete}</CharasterButtonText>
        </CharasterButton>
        <CharasterButton onPress={() => setIsOpenInfo(!isOpenInfo)}>
          <CharasterButtonText>{showCloseButton}</CharasterButtonText>
        </CharasterButton>
      </CharasterBodyButton>
      {!isOpenInfo && <AdditionalMenu name={name} />}
    </CharasterContainer>
  );
}

export default CharacterDetails;
