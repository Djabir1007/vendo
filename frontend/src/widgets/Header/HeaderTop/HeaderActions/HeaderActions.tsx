import styles from "./HeaderActions.module.scss";
import { NavigationActions } from "./NavigationActions/NavigationActions";
import { UserActions } from "./UserActions/UserActions";

export const HeaderActions = () => {
  return (
    <div className={styles.actions}>
      <NavigationActions />
      <UserActions />
    </div>
  );
};
