import { productPage } from "@/shared/config/productPage";
import styles from "./ProductSpecifications.module.scss";

export const ProductSpecifications = () => {
  return (
    <section className={styles.specifications}>
      <h2 className={styles.title}>Характеристики</h2>
      <dl className={styles.list}>
        {productPage.characteristics.map((item) => (
          <div className={styles.row} key={item.id}>
            <dt className={styles.label}>{item.label}</dt>
            <dd className={styles.value}>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};
