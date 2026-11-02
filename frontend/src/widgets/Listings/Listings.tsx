import { Container } from "@/shared/ui/Container/Container";
import styles from "./Listings.module.scss";
import { ListingsHeader } from "./ListingsHeader/ListingsHeader";
import { ListingsContent } from "./ListingsContent/ListingsContent";

export const Listings = () => {
  return (
    <main className={styles.listings}>
      <Container>
        <ListingsHeader />
        <ListingsContent />
      </Container>
    </main>
  );
};
