import Image from "next/image";
import { productPage } from "@/shared/config/productPage";
import { SellerBadge } from "@/shared/ui/SellerBadge/SellerBadge";
import styles from "./ProductPurchaseCard.module.scss";

export const ProductPurchaseCard = () => {
  const { price, title, publishedAt, seller } = productPage;

  return (
    <section className={styles.purchaseCard}>
      <p className={styles.price}>{price}</p>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.meta}>
        <SellerBadge type={seller.sellerType} />
        <span>
          {seller.location} · {publishedAt}
        </span>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.primaryButton}>
          <Image
            src="/images/productPage/chat.svg"
            alt=""
            width={18}
            height={18}
          />
          Написать продавцу
        </button>

        <button type="button" className={styles.secondaryButton}>
          <Image
            src="/images/productPage/call.svg"
            alt=""
            width={18}
            height={18}
          />
          Показать телефон
        </button>
      </div>

      <button type="button" className={styles.favoriteButton}>
        <Image
          src="/images/productPage/heart.svg"
          alt=""
          width={18}
          height={18}
        />
        В избранное
      </button>
    </section>
  );
};
