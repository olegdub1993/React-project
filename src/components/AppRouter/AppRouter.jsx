import { Switch, Route, Redirect } from "react-router-dom";
import Posts from "./../../pages/Posts";
import Post from "./../../pages/Post";
import About from "./../../pages/About";
import Error from "../../pages/Error";
import { privateRoutes, publicRoutes } from "../../router/router";
import { useContext } from "react";
import { AuthContext } from "../../context/context";
import { Loader } from "../UI/loader/Loader";
export const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);
  if (isLoading) return <Loader />;
  return isAuth ? (
    <Switch>
      {privateRoutes.map((r) => (
        <Route key={r.path} exact={r.exact} path={r.path}>
          {<r.component />}
        </Route>
      ))}
      <Redirect to={"/posts"} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((r) => (
        <Route key={r.path} exact={r.exact} path={r.path}>
          {<r.component />}
        </Route>
      ))}
      <Redirect to={"/login"} />
    </Switch>
  );
};
