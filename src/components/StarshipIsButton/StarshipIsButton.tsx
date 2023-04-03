import {
  StarshipIsButtonContainer,
  StarshipIsButtonTouchable,
  StarshipIsButtonText,
} from './StarshipIsButton.styles';

type StarshipIsButtonProps = {
  setIsDetails: (value: boolean) => void;
  name: string;
  isDetails: boolean;
  isHighlighted: boolean;
};

export default function StarshipIsButton({
  name,
  setIsDetails,
  isDetails,
  isHighlighted,
}: StarshipIsButtonProps) {
  return (
    <StarshipIsButtonContainer isHighlighted={isHighlighted}>
      <StarshipIsButtonTouchable onPress={() => setIsDetails(!isDetails)}>
        <StarshipIsButtonText>{name}</StarshipIsButtonText>
      </StarshipIsButtonTouchable>
    </StarshipIsButtonContainer>
  );
}
