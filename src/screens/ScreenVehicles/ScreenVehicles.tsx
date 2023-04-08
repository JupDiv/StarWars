import React, {useEffect, useState, useMemo} from 'react';
import {FlatList} from 'react-native';
import {useAppSelector} from '../../redux/hooks/hooks';
import {RouteProp} from '@react-navigation/native';
import {useAppDispatch} from '../../redux/hooks/hooks';
import StarWarsLoader from '../../components/StarWarsLoader/StarWarsLoader';
import PaginationControl from '../../components/PaginationControl/PaginationControl';
import {VehieclesContainer} from './ScreenVehicles.styles';
import VehiclesTitleMenu from '../../components/VehiclesTitleMenu/VehiclesTitleMenu';
import {useGetCharasterURL} from '../../redux/hooks/customHooks';
import {fetchVehiclesData} from '../../redux/slices/vehiclesCharastersSlice';

type RootStackParamList = {
  ScreenVehicles: {name: string};
};
type ScreenStarShipsProps = {
  route: RouteProp<RootStackParamList, 'ScreenVehicles'>;
};

const ScreenVehicles = ({route}: ScreenStarShipsProps) => {
  const {name} = route.params;
  const dispatch = useAppDispatch();
  const vehiclesData = useAppSelector(state => state.vehiclesData.vehicles);
  const urlCharaster = useGetCharasterURL(name);
  const [currentPage, setCurrentPage] = useState(1);
  const status = useAppSelector(state => state.vehiclesData.status);
  const isLoading = useAppSelector(state => state.vehiclesData.loading);
  const FilteredVehicles = useAppSelector(
    state => state.vehiclesData.filteredVehicles,
  );

  // Also I did it with useMemo, it work, but i wont to use redux because it is better practise
  // const filteredVehicles = useMemo(() => {
  //   return vehiclesData.filter((item: VehiclesTypes) => {
  //     return item.pilots.some((url: string) => url === urlCharaster);
  //   });
  // }, [vehiclesData, urlCharaster]);

  const initialPage = useMemo(() => {
    if (isLoading) {
      return <StarWarsLoader />;
    }
    return (
      <FlatList
        data={vehiclesData}
        renderItem={({item}) => (
          <VehiclesTitleMenu
            isHighlighted={FilteredVehicles.includes(item)}
            vehicle={item}
          />
        )}
        keyExtractor={item => item.id}
      />
    );
  }, [isLoading]);

  useEffect(() => {
    if (status === 'idle' || status === 'fulfilled') {
      dispatch(fetchVehiclesData({numberOfPage: currentPage, urlCharaster}));
    }
    if (status === 'rejected') {
      throw new Error('An error occurred while fetching vehicles.');
    }
  }, [currentPage]);

  return (
    <VehieclesContainer>
      {initialPage}
      <PaginationControl
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </VehieclesContainer>
  );
};

export default ScreenVehicles;
