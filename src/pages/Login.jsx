import styles from "./Login.module.css";
import { useContext } from "react";
import { MyButton } from "../components/UI/button/MyButton";
import { MyInput } from "../components/UI/input/MyInput";
import { AuthContext } from "../context/context";

export const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("isAuth", "true");
  };
  return (
    <form className={styles.form} onSubmit={login}>
      <MyInput type="text" placeholder="name" />
      <MyInput type="password" placeholder="password" />
      <MyButton>Log in</MyButton>
    </form>
  );
};
