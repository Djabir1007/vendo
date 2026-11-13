import { productPage } from "@/shared/config/productPage";
import { SellerProductCard } from "./SellerProductCard/SellerProductCard";
import styles from "./MoreFromSeller.module.scss";

export const MoreFromSeller = () => {
  const { seller, sellerProducts } = productPage;

  return (
    <section className={styles.moreFromSeller}>
      <h2 className={styles.title}>Ещё у этого продавца</h2>
      <div className={styles.cards}>
        {sellerProducts.map((product) => (
          <SellerProductCard
            key={product.id}
            product={product}
            sellerType={seller.sellerType}
            location={seller.location}
          />
        ))}
      </div>
    </section>
  );
};
