import Image from "next/image";

import styles from "./FooterApps.module.scss";

export const FooterApps = () => {
  return (
    <div className={styles.footerApps}>
      <a href="#" className={styles.footerAppsLink} aria-label="App Store">
        <Image
          src="/images/footer/app-store.svg"
          alt=""
          width={24}
          height={24}
        />

        <span className={styles.footerAppsText}>
          <span className={styles.footerAppsLabel}>Загрузите в</span>
          <span className={styles.footerAppsName}>App Store</span>
        </span>
      </a>

      <a href="#" className={styles.footerAppsLink} aria-label="Google Play">
        <Image
          src="/images/footer/google-play.svg"
          alt=""
          width={24}
          height={24}
        />

        <span className={styles.footerAppsText}>
          <span className={styles.footerAppsLabel}>Доступно в</span>
          <span className={styles.footerAppsName}>Google Play</span>
        </span>
      </a>
    </div>
  );
};
