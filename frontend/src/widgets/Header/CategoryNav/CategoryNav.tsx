import Link from "next/link";
import { categories } from "@/shared/config/categories";
import styles from "./CategoryNav.module.scss";

export const CategoryNav = () => {
  return (
    <nav className={styles.categoryList}>
      {categories.map((item) => (
        <Link className={styles.categoryItem} key={item.id} href={item.href}>
          {item.title}
        </Link>
      ))}
      <Link className={styles.more} href="/">
        Ещё
      </Link>
    </nav>
  );
};
