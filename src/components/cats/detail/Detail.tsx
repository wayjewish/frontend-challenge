import Image from 'next/image';
import styles from './Detail.module.css';
import { Cat } from '@/api/types';

interface Props {
  cat: Cat;
}

export default function Detail({ cat }: Props) {
  const { url, width, height } = cat;

  return <Image className={styles.image} src={url} width={225} height={225} alt='cat' />;
}
