import styles from "./Loader.module.css";
import loader from "./loader.gif";
export const Loader = ({}) => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderText}>Posts is loaded...</div>
      <img src={loader} alt="loader" />
    </div>
  );
};
