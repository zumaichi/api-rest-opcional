import { Character } from './character-collection.api-model';

const url = 'https://rickandmortyapi.com/graphql';

const query = `
  query getcharacters{
  characters(page: 1) {
    info {
      count
      pages
    }
    results {
      id
      name
      status
      species
      image
      location {
        id
        name
      }
      episode {
        id
      }
    }
  }
}
`;

export const getCharacterCollection = async (): Promise<Character[]> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`Error loading character collection: ${response.status}`);
  }

  const json = await response.json();

  if (json.errors) {
    throw new Error(json.errors[0]?.message ?? 'GraphQL error');
  }

  return json.data.characters.results;
};
