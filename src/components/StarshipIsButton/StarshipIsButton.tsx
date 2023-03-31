import {Text, View, TouchableOpacity} from 'react-native';

import {
  StarshipIsButtonContainer,
  StarshipIsButtonTouchable,
  StarshipIsButtonText,
} from './StarshipIsButton.styles';

type StarshipIsButtonProps = {
  setIsDetails: (value: boolean) => void;
  name: string;
  isDetails: boolean;
};

const StarshipIsButton = ({
  name,
  setIsDetails,
  isDetails,
}: StarshipIsButtonProps) => {
  return (
    <StarshipIsButtonContainer>
      <StarshipIsButtonTouchable onPress={() => setIsDetails(!isDetails)}>
        <StarshipIsButtonText>{name}</StarshipIsButtonText>
      </StarshipIsButtonTouchable>
    </StarshipIsButtonContainer>
  );
};

export default StarshipIsButton;
