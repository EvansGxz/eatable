import FoodCard from "../components/cards/food-card";
import { useAuth } from "../context/auth-context";
import { useEffect, useState } from "react";

function HomePage() {
  const { getProducts, products, categories, byCategories } = useAuth();
  const [currentCategory, setCurrentCategory] = useState("italian");
  const [data, setData] = useState(null);

  useEffect(() => {
    getProducts();
    console.log(typeof getProducts());
  }, []);

  useEffect(() => {
    if (!byCategories) return;

    setData(byCategories[currentCategory]);
  }, [currentCategory]);

  function eventChangeCategory(nameCategory) {
    setCurrentCategory(nameCategory);
  }

  return (
    <div>
      <h1> HOME PAGE</h1>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {byCategories
          ? Object.keys(byCategories).map((nameCategory) => {
              return (
                <div>
                  <span
                    key={nameCategory}
                    onClick={() => eventChangeCategory(nameCategory)}
                  >
                    {nameCategory}
                  </span>

                  <div
                    style={{
                      display: "flex",
                      gap: "1.25rem",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  ></div>
                </div>
              );
            })
          : null}
      </div>

      <div
        style={{
          display: "flex",
          gap: "1.25rem",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data ? (
          data.map((product) => {
            return (
              <FoodCard
                key={product.id}
                src={product.picture_url}
                name={product.name}
                price={product.price}
              />
            );
          })
        ) : (
          <h2>Todavía no hay datos</h2>
        )}
      </div>
    </div>
  );
}

export default HomePage;
