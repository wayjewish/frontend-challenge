export const API_URL = 'https://api.thecatapi.com/v1';
export const API_KEY = 'live_NWOZOqblkjgnHN4yaE963eb9egvEKHDnDuSe2mGhoPxxVtk36UjnqNwTLxJ82DYN';

export const fetcher = (url: string, options: RequestInit) =>
  fetch(`${API_URL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      ...options.headers,
    },
    cache: 'no-store',
    ...options,
  })
    .then((res) => res.json())
    .catch((error) => console.log('error', error));
