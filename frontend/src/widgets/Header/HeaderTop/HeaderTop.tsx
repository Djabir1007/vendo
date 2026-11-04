import { Logo } from "@/shared/ui/Logo/Logo";
import { CategoryButton } from "./CategoryButton/CategoryButton";
import { HeaderActions } from "./HeaderActions/HeaderActions";
import styles from "./HeaderTop.module.scss";
import { Location } from "./Location/Location";

import { Search } from "./Search/Search";

export const HeaderTop = () => {
  return (
    <div className={styles.headerTop}>
      <Logo />
      <CategoryButton />
      <Search />
      <Location />
      <HeaderActions />
    </div>
  );
};
