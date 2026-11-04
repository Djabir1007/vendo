import { FooterApps } from "./FooterApps/FooterApps";
import { FooterBrand } from "./FooterBrand/FooterBrand";

import styles from "./FooterMain.module.scss";
import { FooterNavigation } from "./FooterNavigation/FooterNavigation";

export const FooterMain = () => {
  return (
    <div className={styles.footerMain}>
      <FooterBrand />
      <FooterNavigation />
      <FooterApps />
    </div>
  );
};
