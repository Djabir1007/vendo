import Image from "next/image";

import styles from "./FooterBrand.module.scss";
import { Logo } from "@/shared/ui/Logo/Logo";

export const FooterBrand = () => {
  return (
    <div className={styles.footerBrand}>
      <Logo />

      <span>Маркетплейс объявлений рядом с вами</span>

      <div className={styles.footerBrandConnect}>
        <a
          href="https://web.telegram.org/a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <Image
            src="/images/footer/tg.svg"
            alt="Telegram"
            width={20}
            height={20}
          />
        </a>

        <a
          href="https://vk.ru/feed"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="VK"
        >
          <Image src="/images/footer/vk.svg" alt="VK" width={20} height={20} />
        </a>

        <a
          href="https://www.whatsapp.com/?lang=ru"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <Image
            src="/images/footer/whatsapp.svg"
            alt="WhatsApp"
            width={20}
            height={20}
          />
        </a>
      </div>
    </div>
  );
};
