

import { Character } from './character-collection.api-model';
import { mockCharacters } from './character-collection.mock-data';

let characterCollection = [...mockCharacters];

const url = 'https://rickandmortyapi.com/graphql';



export const getCharacterCollection = async (): Promise<Character[]> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error loading character collection: ${response.status}`);
  }

  const data = (await response.json()) as {
    info: { count: number };
    results: Character[];
  };

  return data.results;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== Number(id));
  return true;
};

