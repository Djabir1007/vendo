import styles from "./SellerFilter.module.scss";

export const SellerFilter = () => {
  return (
    <section className={styles.sellerFilter}>
      <h2 className={styles.filterTitle}>Кто продаёт</h2>
      <div className={styles.sellerOptions}>
        <button
          className={`${styles.sellerOption} ${styles.sellerOptionActive}`}
        >
          Все
        </button>
        <button className={styles.sellerOption}>Частники</button>
        <button className={styles.sellerOption}>Магазины</button>
      </div>
    </section>
  );
};
