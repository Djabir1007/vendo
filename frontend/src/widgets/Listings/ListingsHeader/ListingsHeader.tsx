import styles from "./ListingsHeader.module.scss";

export const ListingsHeader = () => {
  return (
    <section className={styles.listingsHeader}>
      <nav className={styles.breadcrumbs}>Москва › Все объявления</nav>
      <h1 className={styles.title}>Объявления рядом с вами</h1>
      <span className={styles.subtitle}>
        12 480 объявлений в Москве · 214 рядом с Коммунаркой
      </span>
    </section>
  );
};
