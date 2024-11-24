import styles from '../../styles/rounds.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import propsTypes from 'prop-types';
import Icon from '../IconComponent/icon.jsx';

export default function About({ title, url }) {
  return (
    <div className={styles.container}>
      <div className={styles.rounds}>
        <div className={styles.round}>
          <Icon iconName={url} />
        </div>
        <p>{title}</p>
      </div>
    </div>
  );
}

About.propsTypes = {
  title: propsTypes.string,
  url: propsTypes.string,
};
