import {useMemo} from 'react';
import {useAppSelector, useAppDispatch} from '../../redux/hooks/hooks';
import {resetValueButton} from '../../redux/slices/favoriteCharactersSlice';
import {
  HeaderContainer,
  HeaderTitle,
  HeaderCountBlock,
  HeaderCountTab,
  HeaderResetButton,
  HeaderButtonText,
} from './FavoriteStats.styles';

type GenderArrayType = {id: number; gender: string; count: number}[];

export default function FavoriteStats(): JSX.Element {
  const dispatch = useAppDispatch();
  const female = useAppSelector(state => state.favouriteCharaster.female);
  const male = useAppSelector(state => state.favouriteCharaster.male);
  const other = useAppSelector(state => state.favouriteCharaster.other);

  function resetValue() {
    dispatch(resetValueButton([]));
  }
  const headerTable = useMemo(() => {
    const genderArray: GenderArrayType = [
      {id: 1, gender: 'male', count: male.length},
      {id: 2, gender: 'female', count: female.length},
      {id: 3, gender: 'other', count: other.length},
    ];

    return genderArray.map(item => (
      <HeaderCountBlock key={item.id}>
        <HeaderTitle>{item.count}</HeaderTitle>
        <HeaderTitle>{item.gender}</HeaderTitle>
      </HeaderCountBlock>
    ));
  }, [male, female, other]);

  return (
    <HeaderContainer>
      <HeaderCountTab>{headerTable}</HeaderCountTab>
      <HeaderResetButton onPress={resetValue}>
        <HeaderButtonText>Reset</HeaderButtonText>
      </HeaderResetButton>
    </HeaderContainer>
  );
}
