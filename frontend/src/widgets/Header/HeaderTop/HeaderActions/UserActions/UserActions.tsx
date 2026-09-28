import styles from "./UserActions.module.scss";

export const UserActions = () => {
  return (
    <div className={styles.userActions}>
      <button type="button" className={styles.createButton}>
        <span className={styles.plus}>+</span>
        <span className={styles.createText}>Разместить объявление</span>
      </button>

      <button type="button" className={styles.profile}>
        АШ
      </button>
    </div>
  );
};
