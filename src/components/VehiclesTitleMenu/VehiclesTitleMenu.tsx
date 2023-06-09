import React, {useState} from 'react';
import {VehiclesTypes} from '../../entites/types/VehiclesTypes';
import {VehieclesTitleMenuContainer} from './VehiclesTitleMenu.styles';
import VehiclesButton from '../VehiscleIsButton/VehicleIsButton';
import VehiclesDetails from '../VehicleDetails/VehiclesDetails';

type VehiclesTitleMenuProps = {
  vehicle: VehiclesTypes;
  isHighlighted: boolean;
};

export default function VehiclesTitleMenu({
  vehicle,
  isHighlighted,
}: VehiclesTitleMenuProps) {
  const {name} = vehicle;
  const [isDetails, setIsDetails] = useState(false);

  const renderVehiclesDetails = () =>
    isDetails && (
      <VehiclesDetails vehicle={vehicle} isHighlighted={isHighlighted} />
    );

  return (
    <VehieclesTitleMenuContainer>
      <VehiclesButton
        name={name}
        setIsDetails={setIsDetails}
        isDetails={isDetails}
        isHighlighted={isHighlighted}
      />
      {renderVehiclesDetails()}
    </VehieclesTitleMenuContainer>
  );
}
