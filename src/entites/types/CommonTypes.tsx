import { CharasterTypes } from './CharasterTypes';

export default interface CommonTypes {
  count: number;
  next: string;
  previous: string;
  results: CharasterTypes[] | undefined;
}
