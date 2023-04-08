import React, {useState, useMemo, useEffect} from 'react';
import {VehiclesTypes} from '../../entites/types/VehiclesTypes';
import {VehieclesTitleMenuContainer} from './VehiclesTitleMenu.styles';
import VehiclesButton from '../VehiscleIsButton/VehicleIsButton';
import VehiclesDetails from '../VehicleDetails/VehiclesDetails';
import {setIsAnimating} from '../../redux/slices/animationSlice';
import {useAppDispatch, useAppSelector} from '../../redux/hooks/hooks';

type VehiclesTitleMenuProps = {
  vehicle: VehiclesTypes;
  isHighlighted: boolean;
};

export default function VehiclesTitleMenu({
  vehicle,
  isHighlighted,
}: VehiclesTitleMenuProps) {
  const dispatch = useAppDispatch();
  const {name} = vehicle;
  const isAnimating = useAppSelector(state => state.animation.isAnimating);
  const [isDetails, setIsDetails] = useState(false);

  const vehiclesDetails = useMemo(() => {
    if (isDetails) {
      return (
        <VehiclesDetails vehicle={vehicle} isHighlighted={isHighlighted} />
      );
    } else {
      return null;
    }
  }, [isDetails]);

  return (
    <VehieclesTitleMenuContainer>
      <VehiclesButton
        name={name}
        setIsDetails={setIsDetails}
        isDetails={isDetails}
        isHighlighted={isHighlighted}
      />
      {vehiclesDetails}
    </VehieclesTitleMenuContainer>
  );
}
