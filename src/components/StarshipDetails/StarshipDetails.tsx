import {ScrollView, Text} from 'react-native';
import {StarshipsProps} from '../StarshipsTitleMenu/StarshipsTitleMenu';
import {useDetailInfoForDisplay} from '../../redux/hooks/customHooks';

type StarshipDetailsProp = {
  starship: StarshipsProps;
};

const StarshipsDetails = ({starship}: StarshipDetailsProp) => {
  const arrayStarships = Object.entries(starship);

  const filteredArray = useDetailInfoForDisplay(arrayStarships);

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
};

export default StarshipsDetails;
