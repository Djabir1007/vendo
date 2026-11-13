import Image from "next/image";
import styles from "./ProductSafetyNotice.module.scss";

export const ProductSafetyNotice = () => {
  return (
    <div className={styles.safetyNotice}>
      <Image
        className={styles.icon}
        src="/images/productPage/warning.svg"
        alt=""
        width={18}
        height={18}
      />
      <p>
        Не переходите по ссылкам на оплату и «доставку», которые присылают в
        сообщениях. На Vendo оплата — при встрече.
      </p>
    </div>
  );
};
