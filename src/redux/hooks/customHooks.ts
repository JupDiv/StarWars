import {useAppSelector} from './hooks';

export function useGetCharasterURL(name: string) {
  const charaster = useAppSelector(state => state.fetchData.charaster);
  const url = charaster.reduce((acc, item) => {
    if (item.name === name) {
      acc = item.url;
      return acc;
    }
    return acc;
  }, '');
  return url;
}

export function useDetailInfoForDisplay(array: [string, string | string[]][]) {
  const filteredArray = array.filter(([key]: [string, string | string[]]) => {
    if (
      key === 'films' ||
      key === 'pilots' ||
      key === 'created' ||
      key === 'edited' ||
      key === 'url'
    ) {
      return false;
    }
    return true;
  });
  return filteredArray;
}
