import { Container } from "@/shared/ui/Container/Container";
import { MoreFromSeller } from "./MoreFromSeller/MoreFromSeller";
import { ProductBreadcrumbs } from "./ProductBreadcrumbs/ProductBreadcrumbs";
import { ProductDescription } from "./ProductDescription/ProductDescription";
import { ProductGallery } from "./ProductGallery/ProductGallery";
import { ProductPurchaseCard } from "./ProductPurchaseCard/ProductPurchaseCard";
import { ProductSafetyNotice } from "./ProductSafetyNotice/ProductSafetyNotice";
import { ProductSellerCard } from "./ProductSellerCard/ProductSellerCard";
import { ProductSpecifications } from "./ProductSpecifications/ProductSpecifications";
import styles from "./ProductPage.module.scss";

export const ProductPage = () => {
  return (
    <main className={styles.productPage}>
      <Container>
        <ProductBreadcrumbs />

        <div className={styles.productLayout}>
          <div className={styles.content}>
            <ProductGallery />
            <ProductSpecifications />
            <ProductDescription />
          </div>

          <aside className={styles.sidebar}>
            <ProductPurchaseCard />
            <ProductSellerCard />
            <ProductSafetyNotice />
          </aside>
        </div>

        <MoreFromSeller />
      </Container>
    </main>
  );
};
