import FoodCard from "../components/cards/food-card";
import { useAuth } from "../context/auth-context";
import { useEffect } from "react";

function HomePage() {
  const { getProducts, products } = useAuth();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1> HOME PAGE</h1>
      <div
        style={{
          display: "flex",
          gap: "1.25rem",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {products ? (
          products.map((product) => {
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
