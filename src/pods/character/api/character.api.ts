import { Character } from './character.api-model';
import { Lookup } from '#common/models';

export const getCharacterById = async (id: string): Promise<Character> => {
  const response = await fetch(`/api/character/${id}`);

  if (!response.ok) {
    throw new Error(`Error loading character ${id}: ${response.status}`);
  }

  const data = (await response.json()) as Character;
  return data;
};

export const getCities = async (): Promise<Lookup[]> => {
  return [];
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
