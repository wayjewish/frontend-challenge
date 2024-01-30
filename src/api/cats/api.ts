export const API_URL = 'https://api.thecatapi.com/v1/images/search';
export const API_KEY = 'live_NWOZOqblkjgnHN4yaE963eb9egvEKHDnDuSe2mGhoPxxVtk36UjnqNwTLxJ82DYN';

export const fetcher = (url: string) =>
  fetch(`${API_URL}${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
    cache: 'no-store',
  })
    .then((res) => res.json())
    .catch((error) => console.log('error', error));
