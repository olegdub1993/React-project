import styles from "./MyInput.module.css";
export const MyInput = ({ children, ...props }) => {
  return <input className={styles.input} {...props}></input>;
};
