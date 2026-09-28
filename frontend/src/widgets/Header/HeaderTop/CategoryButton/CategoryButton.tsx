import Image from "next/image";

import styles from "./CategoryButton.module.scss";

export const CategoryButton = () => {
  return (
    <button className={styles.button}>
      <Image
        src="/images/header/grid.svg"
        alt="Все категории"
        width={20}
        height={20}
      />
      <span className={styles.text}>Все категории</span>
    </button>
  );
};
