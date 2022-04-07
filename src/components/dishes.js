import C from "../components/style-component/index";
import FoodCard from "./cards/index";
import { Link } from "react-router-dom";

function Dishes({ data, byCategories, onClick }) {
  return (
    <C.ContainerDishes>
      {byCategories ? (
        (data || byCategories["italian"]).map((product) => {
          return (
            <Link
              to={{
                pathname: "/dish",
                search: `?name=${product.name}&id=${product.id}`,
              }}
              style={{ textDecoration: "none" }}
              key={product.id}
            >
              <FoodCard
                src={product.picture_url}
                name={product.name}
                price={product.price}
                // onClick={() => onClick(product.name, product.id)}
              />
            </Link>
          );
        })
      ) : (
        <h2>Todavía no hay datos</h2>
      )}
    </C.ContainerDishes>
  );
}

export default Dishes;
