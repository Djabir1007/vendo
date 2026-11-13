import Link from "next/link";
import Image from "next/image";
import { productPage } from "@/shared/config/productPage";
import { SellerBadge } from "@/shared/ui/SellerBadge/SellerBadge";
import styles from "./ProductSellerCard.module.scss";

export const ProductSellerCard = () => {
  const { seller } = productPage;

  return (
    <section className={styles.sellerCard}>
      <div className={styles.header}>
        <span className={styles.avatar}>{seller.initials}</span>

        <div>
          <h2 className={styles.name}>{seller.name}</h2>
          <div className={styles.rating}>
            <SellerBadge type={seller.sellerType} />
            <Image
              src="/images/productPage/star.svg"
              alt=""
              width={14}
              height={14}
            />
            <span>
              {seller.rating} · {seller.reviews}
            </span>
          </div>
        </div>
      </div>

      <p className={styles.description}>{seller.description}</p>

      <Link href="#" className={styles.storeLink}>
        Открыть витрину · {seller.productsCount}
        <Image
          src="/images/productPage/arrow-right.svg"
          alt=""
          width={16}
          height={16}
        />
      </Link>
    </section>
  );
};
