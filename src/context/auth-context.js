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
  const [storeArticle, setStoreArticle] = useLocalStorage(null, "Articles List");

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
    return showProduct(id).then(data => {
      //setStoreArticle([...storeArticle, data])
      const temp = JSON.parse(localStorage.getItem('storeArticle'));
      temp ? localStorage.setItem('storeArticle', JSON.stringify([...temp, data])):
      localStorage.setItem('storeArticle', JSON.stringify([data]))
    })
  }

  function handleUpdateUser(userData) {
    console.log(
      "%c😄 🇧🇫: handleUpdateUser -> userData ",
      "font-size:16px;background-color:#5fe218;color:black;",
      userData
    );
    return updateUser(userData).then((user) => {
      setUser(user);
      navigate("/home");
    });
  }

  function handleLogout() {
    return logout().finally(() => {
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
