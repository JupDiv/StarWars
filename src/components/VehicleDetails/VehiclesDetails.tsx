import {useMemo, useCallback} from 'react';
import {VehiclesTypes} from '../../entites/types/VehiclesTypes';
import {useDetailInfoForDisplay} from '../../redux/hooks/customHooks';
import {
  VehiclesDetailsContainer,
  VehiclesDetailsText,
  VehiclesDetailsTitle,
  VehiclesDetailsView,
} from './VehiclesDetails.styles';

type VehiclesDetailsProp = {
  vehicle: VehiclesTypes;
  isHighlighted: boolean;
};

export default function VehiclesDetails({
  vehicle,
  isHighlighted,
}: VehiclesDetailsProp) {
  const arrayVehicles = Object.entries(vehicle);
  const filteredArray = useDetailInfoForDisplay(arrayVehicles);

  const renderVehiclesDetails = useCallback(
    (keyValuePair: [string, string | string[]]) => {
      const [key, value] = keyValuePair;
      return (
        <VehiclesDetailsView key={key} isHighlighted={isHighlighted}>
          <VehiclesDetailsTitle>{key}</VehiclesDetailsTitle>
          <VehiclesDetailsText>{value}</VehiclesDetailsText>
        </VehiclesDetailsView>
      );
    },
    [isHighlighted],
  );

  const filteredArrayVehicles = useMemo(() => {
    return filteredArray.map(renderVehiclesDetails);
  }, [filteredArray, renderVehiclesDetails]);

  return (
    <VehiclesDetailsContainer>{filteredArrayVehicles}</VehiclesDetailsContainer>
  );
}
