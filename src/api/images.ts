import { fetcher } from './api';

export const fetcherGetImages = (url: string) =>
  fetcher(`/images/search${url}`, {
    method: 'GET',
  });
