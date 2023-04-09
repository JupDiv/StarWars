import {useAppSelector, useAppDispatch} from '../../redux/hooks/hooks';
import {
  resetValueButton,
  changeStatus,
} from '../../redux/slices/favoriteCharactersSlice';
import {
  HeaderContainer,
  HeaderTitle,
  HeaderCountBlock,
  HeaderCountTab,
  HeaderResetButton,
  HeaderButtonText,
} from './FavoriteStats.styles';

type GenderArrayType = {id: number; gender: string; count: number}[];
type FavouriteWindowsProps = {
  setIsToggle: (value: boolean) => void;
  isToggle: boolean;
};

export default function FavoriteStats({
  setIsToggle,
  isToggle,
}: FavouriteWindowsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const female = useAppSelector(state => state.favouriteCharaster.female);
  const male = useAppSelector(state => state.favouriteCharaster.male);
  const other = useAppSelector(state => state.favouriteCharaster.other);
  const status = useAppSelector(state => state.favouriteCharaster.status);

  const genderArray: GenderArrayType = [
    {id: 1, gender: 'male', count: male.length},
    {id: 2, gender: 'female', count: female.length},
    {id: 3, gender: 'other', count: other.length},
  ];

  function resetValue() {
    setIsToggle(!isToggle);
    dispatch(resetValueButton([]));
    dispatch(changeStatus(!status));
  }
  return (
    <HeaderContainer>
      <HeaderCountTab>
        {genderArray.map(item => (
          <HeaderCountBlock key={item.id}>
            <HeaderTitle>{item.count}</HeaderTitle>
            <HeaderTitle>{item.gender}</HeaderTitle>
          </HeaderCountBlock>
        ))}
      </HeaderCountTab>
      <HeaderResetButton onPress={resetValue}>
        <HeaderButtonText>Reset</HeaderButtonText>
      </HeaderResetButton>
    </HeaderContainer>
  );
}
