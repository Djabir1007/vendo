import styles from "./DistanceFilter.module.scss";

export const DistanceFilter = () => {
  return (
    <section className={styles.distanceFilter}>
      <h2 className={styles.filterTitle}>Расстояние</h2>
      <div className={styles.distanceOptions}>
        <button className={styles.distanceOption}>до 1 км</button>
        <button
          className={`${styles.distanceOption} ${styles.distanceOptionActive} `}
        >
          до 3 км
        </button>
        <button className={styles.distanceOption}>весь город</button>
      </div>
    </section>
  );
};
