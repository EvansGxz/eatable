import FoodCard from "../components/cards/food-card";
import { useAuth } from "../context/auth-context";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks";
import C from "../components/style-component/index";
import SearchForm from "../components/search-form";
import HeaderCategories from "../components/header-categories";
import Dishes from "../components/dishes";

function HomePage() {
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

  return (
    <div>
      <h1> HOME PAGE</h1>

      <SearchForm store={store} onEvent={eventChangeCategory} />

      {store.query ? (
        <C.ContainerDishes>
          {products.map((product) => {
            if (!product.name.match(store.query)) return null;
            return (
              <FoodCard
                key={product.id}
                src={product.picture_url}
                name={product.name}
                price={product.price}
              />
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

          <Dishes data={data} byCategories={byCategories} />
        </div>
      )}
    </div>
  );
}

export default HomePage;