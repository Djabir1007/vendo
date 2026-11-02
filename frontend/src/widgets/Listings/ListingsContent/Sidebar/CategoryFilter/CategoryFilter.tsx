import styles from "./CategoryFilter.module.scss";

export const CategoryFilter = () => {
  return (
    <section className={styles.categoryFilter}>
      <h2 className={styles.filterTitle}>Категория</h2>
      <div className={styles.categoryList}>
        <label className={styles.categoryItem}>
          <input type="checkbox" />
          <span className={styles.checkbox}></span>
          <span className={styles.categoryName}>Все категории</span>
        </label>
        <label className={styles.categoryItem}>
          <input type="checkbox" />
          <span className={styles.checkbox}></span>
          <span className={styles.categoryName}>Детское</span>
          <span className={styles.categoryCount}>3 210</span>
        </label>
        <label className={styles.categoryItem}>
          <input type="checkbox" />
          <span className={styles.checkbox}></span>
          <span className={styles.categoryName}>Электроника</span>
          <span className={styles.categoryCount}>2 845</span>
        </label>
        <label className={styles.categoryItem}>
          <input type="checkbox" />
          <span className={styles.checkbox}></span>
          <span className={styles.categoryName}>Одежда и обувь</span>
          <span className={styles.categoryCount}>2 390</span>
        </label>
        <label className={styles.categoryItem}>
          <input type="checkbox" />
          <span className={styles.checkbox}></span>
          <span className={styles.categoryName}>Хобби и отдых</span>
          <span className={styles.categoryCount}>1 120</span>
        </label>
      </div>
    </section>
  );
};
