export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;

  location: {
    id: string;
    name: string;
  };

  episode: {
    id: string;
  }[];
}

export interface CharacterListResponse {
  info: {
    count: number;
    pages: number;
  };
  results: Character[];
}
