import {StarshipsProps} from '../StarshipsTitleMenu/StarshipsTitleMenu';
import {useDetailInfoForDisplay} from '../../redux/hooks/customHooks';
import {
  StarshipDetailsContainer,
  StarshipDetailsText,
  StarshipDetailsView,
  StarshipDetailsTitle,
} from './StarshipDetails.styles';

type StarshipDetailsProp = {
  starship: StarshipsProps;
  isHighlighted: boolean;
};

export default function StarshipsDetails({
  starship,
  isHighlighted,
}: StarshipDetailsProp) {
  const arrayStarships = Object.entries(starship);

  const filteredArray = useDetailInfoForDisplay(arrayStarships);

  return (
    <StarshipDetailsContainer>
      {filteredArray.map(([key, value]) => (
        <StarshipDetailsView key={key} isHighlighted={isHighlighted}>
          <StarshipDetailsTitle>{key}</StarshipDetailsTitle>
          <StarshipDetailsText>{value}</StarshipDetailsText>
        </StarshipDetailsView>
      ))}
    </StarshipDetailsContainer>
  );
}
