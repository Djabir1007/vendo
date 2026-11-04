import { Container } from "@/shared/ui/Container/Container";
import styles from "./Footer.module.scss";
import { FooterMain } from "./FooterMain/FooterMain";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <FooterMain />
      </Container>
    </footer>
  );
};
