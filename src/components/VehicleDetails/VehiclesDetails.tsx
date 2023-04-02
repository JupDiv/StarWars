import {ScrollView, Text} from 'react-native';
import {VehiclesTypes} from '../../entites/types/VehiclesTypes';
import {useDetailInfoForDisplay} from '../../redux/hooks/customHooks';

type VehiclesDetailsProp = {
  vehicle: VehiclesTypes;
};

export default function VehiclesDetails({vehicle}: VehiclesDetailsProp) {
  const arrayVehicles = Object.entries(vehicle);

  const filteredArray = useDetailInfoForDisplay(arrayVehicles);

  //after test remove index from key
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      {filteredArray.map(([key, value], index) => (
        <Text key={index}>
          {key}: {value}
        </Text>
      ))}
    </ScrollView>
  );
}
