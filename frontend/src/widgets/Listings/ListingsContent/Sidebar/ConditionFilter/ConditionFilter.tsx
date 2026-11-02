import styles from "./ConditionFilter.module.scss";

export const ConditionFilter = () => {
  return (
    <section className={styles.conditionFilter}>
      <h2 className={styles.filterTitle}>Состояние</h2>
      <div className={styles.conditionOptions}>
        <button className={styles.conditionOption}>Новое</button>
        <button className={styles.conditionOption}>Как новое</button>
        <button className={styles.conditionOption}>Хорошее</button>
        <button className={styles.conditionOption}>Есть следы</button>
      </div>
    </section>
  );
};
