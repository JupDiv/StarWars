/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import {
  CardContainer,
  CardNameButton,
  CardButtonText,
} from './CharacterCard.styles';
import CharacterDetails from '../CharacterDetails/CharacterDetails';
import { CharasterTypes } from '../../entites/types/CharasterTypes';

type AdditionalProps = {
  isToggle: boolean;
};

function CharacterCard({
  name,
  ...other
}: CharasterTypes & AdditionalProps): JSX.Element {
  const [isOpen, setToggle] = useState<boolean>(false);
  return (
    <CardContainer>
      <CardNameButton onPress={() => setToggle(!isOpen)}>
        <CardButtonText>{name}</CardButtonText>
      </CardNameButton>
      {isOpen ? <CharacterDetails name={name} {...other} /> : null}
    </CardContainer>
  );
}

export default CharacterCard;
