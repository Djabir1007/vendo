import { Container } from "@/shared/ui/Container/Container";
import styles from "./Listings.module.scss";
import { ListingsHeader } from "./ListingsHeader/ListingsHeader";

export const Listings = () => {
  return (
    <main className={styles.listings}>
      <Container>
        <ListingsHeader />
      </Container>
    </main>
  );
};
