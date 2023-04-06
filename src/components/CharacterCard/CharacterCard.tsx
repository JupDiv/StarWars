import {useState, useMemo} from 'react';
import {
  CardContainer,
  CardNameButton,
  CardButtonText,
} from './CharacterCard.styles';
import CharacterDetails from '../CharacterDetails/CharacterDetails';
import {CharasterTypes} from '../../entites/types/CharasterTypes';

type CharacterCardProps = {
  isToggle: boolean;
  charaster: CharasterTypes;
};

function CharacterCard({charaster, isToggle}: CharacterCardProps): JSX.Element {
  const [isOpen, setToggle] = useState<boolean>(false);
  const {name} = charaster;

  const characterDetails = useMemo(() => {
    if (isOpen) {
      return <CharacterDetails isToggle={isToggle} charaster={charaster} />;
    }
    return null;
  }, [isOpen, charaster]);
  return (
    <CardContainer>
      <CardNameButton onPress={() => setToggle(!isOpen)}>
        <CardButtonText>{name}</CardButtonText>
      </CardNameButton>
      {characterDetails}
    </CardContainer>
  );
}

export default CharacterCard;
