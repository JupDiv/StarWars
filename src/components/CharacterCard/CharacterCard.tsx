import {useState, useMemo} from 'react';
import {
  CardContainer,
  CardNameButton,
  CardButtonText,
} from './CharacterCard.styles';
import CharacterDetails from '../CharacterDetails/CharacterDetails';
import {CharasterTypes} from '../../entites/types/CharasterTypes';

type CharacterCardProps = {
  charaster: CharasterTypes;
};

function CharacterCard({charaster}: CharacterCardProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {name} = charaster;

  const characterDetails = useMemo(() => {
    if (isOpen) {
      return <CharacterDetails charaster={charaster} />;
    }
    return null;
  }, [isOpen, charaster]);

  return (
    <CardContainer>
      <CardNameButton onPress={() => setIsOpen(!isOpen)}>
        <CardButtonText>{name}</CardButtonText>
      </CardNameButton>
      {characterDetails}
    </CardContainer>
  );
}

export default CharacterCard;
