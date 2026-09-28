import Image from "next/image";
import Link from "next/link";

import styles from "./NavigationActions.module.scss";

export const NavigationActions = () => {
  return (
    <div className={styles.navigation}>
      <Link href="/" className={styles.iconLink} aria-label="Избранное">
        <Image src="/images/header/heart.svg" alt="" width={24} height={24} />
      </Link>

      <Link href="/" className={styles.iconLink} aria-label="Сообщения">
        <Image src="/images/header/chat.svg" alt="" width={24} height={24} />
      </Link>
    </div>
  );
};
