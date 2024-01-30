'use client';

import { API_URL, fetcher } from '@/api/cats/api';
import styles from './List.module.css';

import useSWR from 'swr';
import { Cat } from '@/api/cats/types';
import Detail from '../detail/Detail';

interface Props {
  activeKey: string;
}

export default function List({ activeKey }: Props) {
  const { data, error, isLoading } = useSWR<Cat[]>('?limit=20', fetcher);

  console.log('какого хуя?');

  if (error) return <>failed to load</>;
  if (isLoading) return <>loading...</>;

  if (!data) return <div>???</div>;

  return (
    <div className={styles.list}>
      {data.map((cat: Cat) => (
        <Detail key={cat.id} cat={cat} />
      ))}
    </div>
  );
}
