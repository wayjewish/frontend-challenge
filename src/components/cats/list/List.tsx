'use client';

import { fetcher } from '@/api/api';
import styles from './List.module.css';

import useSWR from 'swr';
import { Cat } from '@/api/types';
import Detail from '../detail/Detail';
import { useEffect } from 'react';
import { fetcherGetImages } from '@/api/images';

interface Props {
  activeKey: string;
}

export default function List({ activeKey }: Props) {
  const { data, error, isLoading, isValidating, mutate } = useSWR<Cat[]>(
    '?limit=20',
    fetcherGetImages,
    {
      revalidateIfStale: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      revalidateOnMount: true,
    },
  );

  useEffect(() => {
    mutate([]);
  }, [activeKey]);

  if (error) return <>failed to load</>;
  if (isLoading || isValidating) return <>loading...</>;

  return (
    <div className={styles.list}>{data?.map((cat: Cat) => <Detail key={cat.id} cat={cat} />)}</div>
  );
}
