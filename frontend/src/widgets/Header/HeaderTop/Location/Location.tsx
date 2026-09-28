import Image from "next/image";

import styles from "./Location.module.scss";

export const Location = () => {
  return (
    <button className={styles.button} type="button">
      <Image src="/images/header/pin.svg" alt="Адрес" width={20} height={20} />
      <span className={styles.text}>Москва, Коммунарка</span>
    </button>
  );
};
