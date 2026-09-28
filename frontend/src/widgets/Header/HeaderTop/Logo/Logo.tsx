import Link from "next/link";
import Image from "next/image";
import { poppins } from "@/shared/fonts/fonts";
import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <Link href="/" className={styles.link}>
      <Image
        src="/images/header/vendo-znak.svg"
        alt="Vendo"
        width={32}
        height={32}
      />
      <span className={`${styles.title} ${poppins.className}`}>Vendo</span>
    </Link>
  );
};
