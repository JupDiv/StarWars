import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useAppSelector} from '../../redux/hooks/hooks';
import {RouteProp} from '@react-navigation/native';
import {setVehicles} from '../../redux/slices/vehiclesCharastersSlice';
import FetchVehicles from '../../utlis/FetchData/FetchVehicles';
import {useAppDispatch} from '../../redux/hooks/hooks';
import StarWarsLoader from '../../components/StarWarsLoader/StarWarsLoader';
import PaginationCommonPage from '../../components/PaginationCommonPage/PaginationCommonPage';
import {VehieclesContainer} from './ScreenVehicles.styles';
import VehiclesTitleMenu from '../../components/VehiclesTitleMenu/VehiclesTitleMenu';
import {useGetCharasterURL} from '../../redux/hooks/customHooks';
import {VehiclesTypes} from '../../entites/types/VehiclesTypes';

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
  const [currentPage, setCurrentPage] = useState(1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      const {results} = await FetchVehicles(currentPage);
      setIsLoading(false);
      dispatch(setVehicles(results));
    };
    fetchVehicles();
  }, [dispatch, currentPage]);

  const filteredVehicles = vehiclesData.filter((item: VehiclesTypes) => {
    return item.pilots.some((url: string) => url === urlCharaster);
  });

  return (
    <VehieclesContainer>
      {isLoading ? (
        <StarWarsLoader />
      ) : (
        <FlatList
          data={vehiclesData}
          renderItem={({item}) => (
            <VehiclesTitleMenu
              isHighlighted={filteredVehicles.includes(item)}
              vehicle={item}
            />
          )}
          keyExtractor={item => item.model}
        />
      )}
      <PaginationCommonPage
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </VehieclesContainer>
  );
};

export default ScreenVehicles;
