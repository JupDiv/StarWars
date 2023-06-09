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
  charaster: CharasterTypes;
};

function CharacterDetails({charaster}: CharacterDetailsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [isOpenInfo, setIsOpenInfo] = useState<boolean>(true);
  const {homeworld, name, gender, url} = charaster;
  const planetsData = useAppSelector(state => state.fetchPlanets.planets);
  const speciesData = useAppSelector(state => state.fetchSpecies.species);
  const female = useAppSelector(state => state.favouriteCharaster.female);
  const male = useAppSelector(state => state.favouriteCharaster.male);
  const other = useAppSelector(state => state.favouriteCharaster.other);

  const isCharacterFavourite = useMemo(() => {
    return [female, male, other].some(favCharName =>
      favCharName.includes(name),
    );
  }, [female, male, other, name]);

  const [isFavToggled, setIsFavToggled] =
    useState<boolean>(isCharacterFavourite);

  const filteredCharasterData = useMemo(
    () =>
      Object.entries(charaster).filter(
        ([key]) =>
          ![
            'homeworld',
            'species',
            'films',
            'vehicles',
            'starships',
            'created',
            'edited',
            'url',
            'id',
          ].includes(key),
      ),
    [charaster],
  );

  useEffect(() => {
    dispatch(fetchAllPlanets());
    dispatch(fetchAllSpecies());
  }, []);

  useEffect(() => {
    setIsFavToggled(isCharacterFavourite);
  }, [isCharacterFavourite]);

  const toggleFavourite = () => {
    if (!isFavToggled) {
      dispatch(addFavouriteCharaster({name, gender}));
    } else {
      dispatch(removeFavouriteCharaster({name, gender}));
    }
  };

  const buttonAddDelete = isFavToggled ? 'Delete' : 'Add';
  const showCloseButton = isOpenInfo ? 'Show' : 'Close';

  const homeWorld = useMemo(() => {
    const planet = planetsData.find(planet => planet.url === homeworld);

    if (planet) {
      return planet.name;
    }
    return '';
  }, [homeworld, planetsData]);

  const species = useMemo(() => {
    const spec = speciesData.find(spec => spec.people.includes(url));

    if (spec) {
      return spec.name;
    }
    return '';
  }, [speciesData, url]);

  const charasterFilter = useMemo(() => {
    return filteredCharasterData.map(([title, value]) => (
      <CharasterBody key={title}>
        <CharasterTextTitle>{title}</CharasterTextTitle>
        <CharasterText>{value}</CharasterText>
      </CharasterBody>
    ));
  }, [filteredCharasterData]);

  const renderAdditionalMenu = useMemo(() => {
    if (!isOpenInfo) {
      return <AdditionalMenu name={name} />;
    }
  }, [isOpenInfo, name]);

  return (
    <CharasterContainer>
      {charasterFilter}
      <CharasterBody>
        <CharasterTextTitle>HomeWorld</CharasterTextTitle>
        <CharasterText>{homeWorld}</CharasterText>
      </CharasterBody>
      <CharasterBody>
        <CharasterTextTitle>Species</CharasterTextTitle>
        <CharasterText>{species}</CharasterText>
      </CharasterBody>
      <CharasterBodyButton>
        <CharasterButton onPress={toggleFavourite}>
          <CharasterButtonText>{buttonAddDelete}</CharasterButtonText>
        </CharasterButton>
        <CharasterButton onPress={() => setIsOpenInfo(!isOpenInfo)}>
          <CharasterButtonText>{showCloseButton}</CharasterButtonText>
        </CharasterButton>
      </CharasterBodyButton>
      {renderAdditionalMenu}
    </CharasterContainer>
  );
}

export default CharacterDetails;
