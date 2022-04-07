import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAsync } from "../components/hooks/useAsync";
import { indexProduct } from "../services/products-service";
import { login, logout } from "../services/session-service";
import { createUser, getUser, updateUser } from "../services/users-service";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { status, data, error, byCategories, execute } = useAsync();

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
        products: data,
        byCategories,
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
