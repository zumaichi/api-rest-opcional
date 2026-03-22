import { Character } from './character.api-model';


const url = 'https://rickandmortyapi.com/graphql';

const getCharacterByIdQuery = `
  query GetCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      type
      image
      origin {
        name
      }
      location {
        name
      }
         episode {
      id
    }
    }
  }
`;

export const getCharacterById = async (id: string): Promise<Character> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getCharacterByIdQuery,
      variables: { id },
    }),
  });

  if (!response.ok) {
    throw new Error(`Error loading character ${id}: ${response.status}`);
  }

  const json = await response.json();

  if (json.errors) {
    throw new Error(json.errors[0]?.message ?? 'GraphQL error');
  }

  return json.data.character as Character;
};

