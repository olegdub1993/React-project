import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/context";
import { MyButton } from "../button/MyButton";
import styles from "./Navbar.module.css";
export const Navbar = () => {
  const { setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("isAuth");
  };
  return (
    <div className={styles.nav}>
      <div className={styles.navList}>
        <Link className={styles.item} to={"/about"}>
          About
        </Link>
        <Link className={styles.item} to={"/posts"}>
          Posts
        </Link>
      </div>
      <MyButton onClick={logout} className={styles.navBtn}>
        Log Out
      </MyButton>
    </div>
  );
};
