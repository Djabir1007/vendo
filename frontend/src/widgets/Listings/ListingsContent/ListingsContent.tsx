import styles from "./ListingsContent.module.scss";
import { ProductGrid } from "./ProductGrid/ProductGrid";
import { Sidebar } from "./Sidebar/Sidebar";

export const ListingsContent = () => {
  return (
    <section className={styles.listingsContent}>
      <Sidebar />
      <ProductGrid />
    </section>
  );
};
