import React from 'react';
import {
  VehieclesButtonContainer,
  VehieclesIsButtonTouchable,
  VehieclesButtonText,
} from './VehiclesButton.styles';

type VehiclesButtonProps = {
  setIsDetails: (value: boolean) => void;
  name: string;
  isDetails: boolean;
  isHighlighted: boolean;
};

export default function VehiclesButton({
  name,
  setIsDetails,
  isDetails,
  isHighlighted,
}: VehiclesButtonProps) {
  return (
    <VehieclesButtonContainer isHighlighted={isHighlighted}>
      <VehieclesIsButtonTouchable onPress={() => setIsDetails(!isDetails)}>
        <VehieclesButtonText>{name}</VehieclesButtonText>
      </VehieclesIsButtonTouchable>
    </VehieclesButtonContainer>
  );
}
