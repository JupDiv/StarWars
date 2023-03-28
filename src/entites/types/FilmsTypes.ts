export interface FilmsTypes {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

export type PromiseFilms = Pick<
  FilmsTypes,
  | 'title'
  | 'episode_id'
  | 'opening_crawl'
  | 'director'
  | 'producer'
  | 'release_date'
>;
