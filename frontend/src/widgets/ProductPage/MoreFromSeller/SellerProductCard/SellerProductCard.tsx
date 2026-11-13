import Image from "next/image";
import type { ListingSellerType } from "@/shared/types/listing";
import type { SellerProduct } from "@/shared/types/productPage";
import { SellerBadge } from "@/shared/ui/SellerBadge/SellerBadge";
import styles from "./SellerProductCard.module.scss";

type SellerProductCardProps = {
  product: SellerProduct;
  sellerType: ListingSellerType;
  location: string;
};

export const SellerProductCard = ({
  product,
  sellerType,
  location,
}: SellerProductCardProps) => {
  return (
    <article className={styles.sellerProductCard}>
      <div className={styles.imageArea}>
        <button type="button" className={styles.favoriteButton}>
          <Image
            src="/images/header/heart.svg"
            alt="В избранное"
            width={16}
            height={16}
          />
        </button>
        <Image
          className={styles.productImage}
          src={product.icon}
          alt={product.title}
          width={48}
          height={48}
        />
      </div>

      <div className={styles.details}>
        <p className={styles.price}>{product.price}</p>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.meta}>{product.meta}</p>
        <div className={styles.footer}>
          <SellerBadge type={sellerType} />
          <span className={styles.location}>{location}</span>
        </div>
      </div>
    </article>
  );
};
