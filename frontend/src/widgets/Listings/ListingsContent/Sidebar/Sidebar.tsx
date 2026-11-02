import { AdditionalFilters } from "./AdditionalFilters/AdditionalFilters";
import { CategoryFilter } from "./CategoryFilter/CategoryFilter";
import { ConditionFilter } from "./ConditionFilter/ConditionFilter";
import { DistanceFilter } from "./DistanceFilter/DistanceFilter";
import { FilterButton } from "./FilterButton/FilterButton";
import { PriceFilter } from "./PriceFilter/PriceFilter";
import { SellerFilter } from "./SellerFilter/SellerFilter";
import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <SellerFilter />
      <CategoryFilter />
      <PriceFilter />
      <DistanceFilter />
      <ConditionFilter />
      <AdditionalFilters />
      <FilterButton />
    </aside>
  );
};
