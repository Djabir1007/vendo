import Image from "next/image";
import type { Listing, ListingBackground } from "@/shared/types/listing";
import styles from "./ProductCard.module.scss";

const backgroundClass: Record<ListingBackground, string> = {
  beige: styles.imageBeige,
  sage: styles.imageSage,
  green: styles.imageGreen,
  pink: styles.imagePink,
};

type ProductCardProps = {
  listing: Listing;
};

export const ProductCard = ({ listing }: ProductCardProps) => {
  return (
    <article className={styles.productCard}>
      <div
        className={`${styles.imageArea} ${backgroundClass[listing.imageBackground]}`}
      >
        {listing.badge && (
          <span
            className={`${styles.badge} ${
              listing.badge === "Даром"
                ? styles.freeBadge
                : styles.reservedBadge
            }`}
          >
            {listing.badge}
          </span>
        )}
        <Image
          className={styles.productImage}
          src={listing.icon}
          alt={listing.title}
          width={80}
          height={80}
        />
      </div>

      <div className={styles.details}>
        <p className={styles.price}>{listing.price}</p>
        <h2 className={styles.title}>{listing.title}</h2>
        <p className={styles.meta}>{listing.meta}</p>
        <div className={styles.footer}>
          <span
            className={`${styles.sellerType} ${
              listing.sellerType === "магазин"
                ? styles.shopSeller
                : styles.privateSeller
            }`}
          >
            {listing.sellerType}
          </span>
          <span className={styles.location}>{listing.location}</span>
        </div>
      </div>
    </article>
  );
};
