import styles from '../../styles/loader.module.scss';

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <div className={styles.title}>
          <p className={styles.loadingText}>LOADING</p>
          <div className={styles.therefore}>∴</div>
          <p className={styles.loadingNumber}>%</p>
        </div>
        <div className={styles.loadingBarBorder}>
          <div className={styles.loadingBar}></div>
        </div>
        <div className={styles.warning}>
          <p>
            <div className={styles.exclamation}>!</div>
            &nbsp; CAUTION, Do not turn off.
          </p>
          <div className={styles.lineCascates}></div>
        </div>
      </div>
    </div>
  );
}
