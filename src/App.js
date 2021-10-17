import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/UI/navbar/Navbar";
import { AppRouter } from "./components/AppRouter/AppRouter";
import { AuthContext } from "./context/context";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("isAuth")) setIsAuth(true);
    setIsLoading(false);
  }, []);
  return (
    <div className="App">
      <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
