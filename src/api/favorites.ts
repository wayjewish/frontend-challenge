import { fetcher } from './api';

export const fetcherGetFavourites = (url: string) =>
  fetcher(`/favourites${url}`, {
    method: 'GET',
  });
