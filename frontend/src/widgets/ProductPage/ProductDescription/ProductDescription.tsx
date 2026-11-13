import { productPage } from "@/shared/config/productPage";
import styles from "./ProductDescription.module.scss";

export const ProductDescription = () => {
  return (
    <section className={styles.description}>
      <h2 className={styles.title}>Описание</h2>
      <p className={styles.text}>{productPage.description}</p>
    </section>
  );
};
