import {useAppSelector} from './hooks';

export default function useGetCharasterURL(name: string) {
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
