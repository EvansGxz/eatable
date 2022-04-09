import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAsync } from "../components/hooks/useAsync";
import { useLocalStorage } from "../hooks";
import { indexProduct, showProduct } from "../services/products-service";
import { login, logout } from "../services/session-service";
import { createUser, getUser, updateUser } from "../services/users-service";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { status, data, error, byCategories, execute } = useAsync();
  const [storeArticle, setStoreArticle] = useLocalStorage([], "storeArticle");

  useEffect(() => {
    getUser()
      .then(setUser)
      .catch((error) => console.log(error));
  }, []);

  function handleLogin(credentials) {
    return login(credentials)
      .then((user) => {
        console.log(user);
        setUser(user);
        navigate("/home");
      })
      .catch(console.log);
  }

  function handleSignup(userData) {
    return createUser(userData).then((user) => {
      setUser(user);
      navigate("/profile");
    });
  }

  function handleIndexProducts() {
    return execute(indexProduct());
  }

  function handleShowProducts(id) {
    return showProduct(id).then((data) => {
      setStoreArticle([...storeArticle, data]);
    });
  }

  function handleUpdateUser(userData) {
    return updateUser(userData).then((user) => {
      setUser(user);
      navigate("/home");
    });
  }

  function handleLogout() {
    return logout().finally(() => {
      localStorage.setItem("PersonalData", null);
      localStorage.setItem("info", null);
      localStorage.setItem("listMyArticles", null);
      localStorage.setItem("TotalToPay", 0);
      setUser(null);
      navigate("/");
    });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        storeArticle,
        products: data,
        byCategories,
        show: handleShowProducts,
        update: handleUpdateUser,
        login: handleLogin,
        signup: handleSignup,
        logout: handleLogout,
        getProducts: handleIndexProducts,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
