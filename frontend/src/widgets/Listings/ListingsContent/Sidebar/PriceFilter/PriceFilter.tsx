import styles from "./PriceFilter.module.scss";

export const PriceFilter = () => {
  return (
    <section className={styles.priceFilter}>
      <h2 className={styles.filterTitle}>Цена, ₽</h2>
      <div className={styles.priceContainer}>
        <input className={styles.priceInput} type="number" placeholder="от" />
        <input className={styles.priceInput} type="number" placeholder="до" />
      </div>
    </section>
  );
};
