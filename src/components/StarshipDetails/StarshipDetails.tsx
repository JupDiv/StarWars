import {ScrollView, Text} from 'react-native';
import {StarshipsProps} from '../StarshipsTitleMenu/StarshipsTitleMenu';

type StarshipDetailsProp = {
  starship: StarshipsProps;
};

const StarshipsDetails = ({starship}: StarshipDetailsProp) => {
  const arrayStarships = Object.entries(starship);

  const filteredArray = arrayStarships.map(([key, value]) => {
    if (key === 'films' || key === 'pilots') {
      return [key, value.length];
    }
    if (key === 'created' || key === 'edited' || key === 'url') {
      return [key, ''];
    }
    return [key, value];
  });

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      {filteredArray.map(([key, value]) => (
        <Text key={key}>
          {key}: {value}
        </Text>
      ))}
    </ScrollView>
  );
};

export default StarshipsDetails;
