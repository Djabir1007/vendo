import Link from "next/link";

import { footerNavigationGroups } from "@/shared/config/footerNavigation";

import styles from "./FooterNavigation.module.scss";

export const FooterNavigation = () => {
  return (
    <nav className={styles.footerNavigation}>
      {footerNavigationGroups.map((group) => (
        <div key={group.title} className={styles.footerNavigationGroup}>
          <h3 className={styles.footerNavigationTitle}>{group.title}</h3>

          <ul className={styles.footerNavigationList}>
            {group.links.map((link) => (
              <li key={link.label} className={styles.footerNavigationItem}>
                <Link href={link.href} className={styles.footerNavigationLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};
