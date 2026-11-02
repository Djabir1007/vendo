import styles from "./AdditionalFilters.module.scss";

export const AdditionalFilters = () => {
  return (
    <section className={styles.additionalFilters}>
      <div className={styles.filterOption}>
        <span>Только с фото</span>

        <button className={`${styles.toggle} ${styles.toggleActive}`}>
          <span className={styles.toggleKnob}></span>
        </button>
      </div>

      <div className={styles.filterOption}>
        <span>Отдают даром</span>

        <button className={styles.toggle}>
          <span className={styles.toggleKnob}></span>
        </button>
      </div>
    </section>
  );
};
