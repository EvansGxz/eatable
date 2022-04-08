import FoodCard from "../components/cards/food-card";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks";
import C from "../components/style-component/index";
import SearchForm from "../components/search-form";
import HeaderCategories from "../components/header-categories";
import Dishes from "../components/dishes";

function HomePage() {
  const navigate = useNavigate();
  const { getProducts, products, byCategories } = useAuth();
  const [store, setStore] = useLocalStorage(
    { currentCategory: null, query: null },
    "info"
  );
  const [data, setData] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (!byCategories) return;

    setData(byCategories[store.currentCategory]);
  }, [store]);

  function eventChangeCategory(key, value) {
    setStore({ ...store, [key]: value });
  }

  function redirect(nameDish, idDish) {
    console.log(
      "%c 🚶‍♀️: redirect -> nameDish ",
      "font-size:16px;background-color:#ed05fc;color:white;",
      nameDish
    );

    // return navigate(`/dishes?name=${nameDish}&id=${idDish}`);
    return navigate(`/dishes/${idDish}`);
  }

  return (
    <div>
      <SearchForm store={store} onEvent={eventChangeCategory} />

      {store.query ? (
        <C.ContainerDishes>
          {products.map((product) => {
            if (!product.name.match(store.query)) return null;
            return (
              <C.StyledLink
                to={{
                  pathname: "/dish",
                  search: `?name=${product.name}&id=${product.id}`,
                }}
              >
                <FoodCard
                  key={product.id}
                  src={product.picture_url}
                  name={product.name}
                  price={product.price}
                  // onClick={() => redirect(product.name, product.id)}
                />
              </C.StyledLink>
            );
          })}
        </C.ContainerDishes>
      ) : (
        <div>
          <HeaderCategories
            store={store}
            byCategories={byCategories}
            onEvent={eventChangeCategory}
          />

          <Dishes data={data} byCategories={byCategories} onClick={redirect} />
        </div>
      )}
    </div>
  );
}

export default HomePage;
