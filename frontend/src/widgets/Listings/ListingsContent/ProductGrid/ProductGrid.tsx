import { ListingsToolbar } from "./ListingsToolbar/ListingsToolbar";
import { ProductCard } from "./ProductCard/ProductCard";
import { listings } from "@/shared/config/listings";
import styles from "./ProductGrid.module.scss";

export const ProductGrid = () => {
  return (
    <section className={styles.productGrid}>
      <ListingsToolbar />
      <div className={styles.cards}>
        {listings.map((listing) => (
          <ProductCard key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  );
};
