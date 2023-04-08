import {useState, useMemo} from 'react';
import {StarshipsTypes} from '../../entites/types/StarshipsTypes';
import StarshipsDetails from '../StarshipDetails/StarshipDetails';
import StarshipIsButton from '../StarshipIsButton/StarshipIsButton';
import {StarshipsMenuContainer} from './StarshipsTitleMenu.styles';

export type StarshipsProps = Pick<
  StarshipsTypes,
  | 'name'
  | 'model'
  | 'manufacturer'
  | 'cargo_capacity'
  | 'cost_in_credits'
  | 'length'
  | 'max_atmosphering_speed'
  | 'crew'
  | 'hyperdrive_rating'
  | 'passengers'
  | 'pilots'
  | 'starship_class'
  | 'consumables'
  | 'MGLT'
>;

type StarshipsTitleMenuProps = {
  starship: StarshipsTypes;
  isHighlighted: boolean;
};

export default function StarshipsTitleMenu({
  starship,
  isHighlighted,
}: StarshipsTitleMenuProps) {
  const [isDetails, setIsDetails] = useState(false);
  const {name} = starship;

  const starshipsDetails = useMemo(() => {
    if (isDetails) {
      return (
        <StarshipsDetails isHighlighted={isHighlighted} starship={starship} />
      );
    } else {
      return null;
    }
  }, [isDetails]);

  return (
    <StarshipsMenuContainer>
      <StarshipIsButton
        name={name}
        isDetails={isDetails}
        setIsDetails={setIsDetails}
        isHighlighted={isHighlighted}
      />

      {starshipsDetails}
    </StarshipsMenuContainer>
  );
}
