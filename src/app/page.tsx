'use client';
import { useState } from 'react';
import Header from '@/components/header/Header';
import Tabs from '@/components/tabs/Tabs';
import type { Tab } from '@/components/tabs/Tabs.types';

import styles from './page.module.css';
import CatsList from '@/components/cats/list/List';

const tabs: Tab[] = [
  {
    id: 'all',
    text: 'Все котики',
  },
  {
    id: 'favourite',
    text: 'Любимые котики',
  },
];

export default function Home() {
  const [activeKey, setActiveKey] = useState<string>('all');

  return (
    <>
      <Header>
        <Tabs tabs={tabs} activeKey={activeKey} setActiveKey={(key) => setActiveKey(key)} />
      </Header>
      <main className={styles.main}>
        <CatsList activeKey={activeKey} />
      </main>
    </>
  );
}
