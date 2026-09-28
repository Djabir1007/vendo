import { Container } from "@/shared/ui/Container/Container";
import styles from "./Header.module.scss";
import { HeaderTop } from "./HeaderTop/HeaderTop";
import { CategoryNav } from "./CategoryNav/CategoryNav";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <Container>
          <HeaderTop />
        </Container>
      </div>

      <Container>
        <CategoryNav />
      </Container>
    </header>
  );
};
