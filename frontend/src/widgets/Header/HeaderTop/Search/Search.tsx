import Image from "next/image";

import styles from "./Search.module.scss";

export const Search = () => {
  return (
    <form action="#" className={styles.search}>
      <Image
        src="/images/header/search.svg"
        alt="Поиск"
        width={20}
        height={20}
      />

      <input
        className={styles.input}
        type="text"
        placeholder="Коляска, Iphone, спиннинг..."
      />

      <button className={styles.button} type="submit">
        Найти
      </button>
    </form>
  );
};
