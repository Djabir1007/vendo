import Link from "next/link";
import Image from "next/image";
import { productPage } from "@/shared/config/productPage";
import styles from "./ProductBreadcrumbs.module.scss";

export const ProductBreadcrumbs = () => {
  return (
    <nav className={styles.breadcrumbs}>
      <Link href="/" className={styles.backLink}>
        <Image
          src="/images/productPage/arrow-left.svg"
          alt=""
          width={16}
          height={16}
        />
        Назад к ленте
      </Link>
      <span className={styles.path}>{productPage.breadcrumbs.join(" › ")}</span>
    </nav>
  );
};
