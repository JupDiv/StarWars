/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import {useState} from 'react';
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
  return (
    <CardContainer>
      <CardNameButton onPress={() => setToggle(!isOpen)}>
        <CardButtonText>{name}</CardButtonText>
      </CardNameButton>
      {isOpen ? (
        <CharacterDetails isToggle={isToggle} charaster={charaster} />
      ) : null}
    </CardContainer>
  );
}

export default CharacterCard;
