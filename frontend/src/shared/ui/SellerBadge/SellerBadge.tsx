import type { ListingSellerType } from "@/shared/types/listing";
import styles from "./SellerBadge.module.scss";

const badgeClass: Record<ListingSellerType, string> = {
  магазин: styles.shop,
  частник: styles.private,
};

type SellerBadgeProps = {
  type: ListingSellerType;
};

export const SellerBadge = ({ type }: SellerBadgeProps) => {
  return (
    <span className={`${styles.sellerBadge} ${badgeClass[type]}`}>{type}</span>
  );
};
