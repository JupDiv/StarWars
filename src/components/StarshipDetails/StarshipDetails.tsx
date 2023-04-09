import {useMemo, useCallback} from 'react';
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

  const renderStarshipsDetails = useCallback(
    (keyValuePair: [string, string | string[]]) => {
      const [key, value] = keyValuePair;
      return (
        <StarshipDetailsView key={key} isHighlighted={isHighlighted}>
          <StarshipDetailsTitle>{key}</StarshipDetailsTitle>
          <StarshipDetailsText>{value}</StarshipDetailsText>
        </StarshipDetailsView>
      );
    },
    [isHighlighted],
  );

  const filteredArrayVehicles = useMemo(() => {
    return filteredArray.map(renderStarshipsDetails);
  }, [filteredArray, renderStarshipsDetails]);

  return (
    <StarshipDetailsContainer>{filteredArrayVehicles}</StarshipDetailsContainer>
  );
}
