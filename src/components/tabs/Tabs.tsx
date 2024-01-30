import classNames from 'classnames';
import styles from './Tabs.module.css';
import type { Tab } from './Tabs.types';

interface Props {
  tabs: Tab[];
  activeKey: string;
  setActiveKey: (key: string) => void;
}

export default function Tabs({ tabs, activeKey, setActiveKey }: Props) {
  return (
    <ul className={styles.tabs}>
      {tabs.map((tab) => (
        <li
          key={tab.id}
          className={classNames(styles.tab, { [styles.tabActive]: activeKey === tab.id })}
          onClick={() => setActiveKey(tab.id)}
        >
          {tab.text}
        </li>
      ))}
    </ul>
  );
}
