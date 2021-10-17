import styles from "./MyModal.module.css";
export const MyModal = ({ children, visible, setVisible }) => {
  const rootStyles = [styles.modal];
  if (visible) rootStyles.push(styles.active);
  return (
    <div className={rootStyles.join(" ")} onClick={() => setVisible(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
