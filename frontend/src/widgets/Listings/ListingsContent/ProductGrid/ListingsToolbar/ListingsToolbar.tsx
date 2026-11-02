import Image from "next/image";
import styles from "./ListingsToolbar.module.scss";

export const ListingsToolbar = () => {
  return (
    <>
      <div className={styles.infoBanner}>
        <Image
          src="/images/listings/info.svg"
          alt="Информация"
          width={20}
          height={20}
        />
        <span className={styles.infoText}>
          <strong>Место в ленте не продаётся.</strong> Порядок — по свежести и
          расстоянию. На 2 объявления частников — не больше 1 от магазина.
        </span>
      </div>

      <div className={styles.resultsBar}>
        <span className={styles.resultsText}>
          Показаны объявления в радиусе 3 км
        </span>
        <select className={styles.sortSelect} defaultValue="new">
          <option value="new">Сначала новые</option>
          <option value="old">Сначала старые</option>
          <option value="cheap">Сначала дешевле</option>
          <option value="expensive">Сначала дороже</option>
        </select>
      </div>
    </>
  );
};
