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

  //after test remove index from key
  return (
    <VehiclesDetailsContainer>
      {filteredArray.map(([key, value], index) => (
        <VehiclesDetailsView key={index} isHighlighted={isHighlighted}>
          <VehiclesDetailsTitle>{key}</VehiclesDetailsTitle>
          <VehiclesDetailsText>{value}</VehiclesDetailsText>
        </VehiclesDetailsView>
      ))}
    </VehiclesDetailsContainer>
  );
}
