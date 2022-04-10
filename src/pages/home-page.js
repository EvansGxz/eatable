import FoodCard from "../components/cards/food-card";
import { useAuth } from "../context/auth-context";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks";
import C from "../components/style-component/index";
import SearchForm from "../components/search-form";
import HeaderCategories from "../components/header-categories";
import Dishes from "../components/dishes";
import NoContent from "../components/noContent/no-content";
import { colors } from "../styles/colors";
import { MdOutlineSearchOff } from "react-icons/md";

function HomePage() {
  const { getProducts, products, byCategories, status } = useAuth();
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
      <SearchForm store={store} onEvent={eventChangeCategory} />

      {store.query ? (
        <C.ContainerDishes>
          {products.map((product) => {
            if (!product.name.match(store.query))
              return (
                <NoContent
                  key={product.id}
                  icon={
                    <MdOutlineSearchOff
                      size={105}
                      style={{ fill: colors.gray }}
                    />
                  }
                  text="No products found."
                />
              );
            return (
              <C.StyledLink
                to={{
                  pathname: "/dish",
                  search: `?name=${product.name}&id=${product.id}`,
                }}
                key={product.id}
              >
                <FoodCard
                  src={product.picture_url}
                  name={product.name}
                  price={product.price}
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

          <Dishes
            style={{ backgroundColor: "green" }}
            data={data}
            byCategories={byCategories}
            status={status}
          />
        </div>
      )}
    </div>
  );
}

export default HomePage;
