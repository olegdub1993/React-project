import styles from "./MyButton.module.css";
export const MyButton = ({ children, className, ...props }) => {
  return (
    <button className={[styles.button, className].join(" ")} {...props}>
      {children}
    </button>
  );
};
