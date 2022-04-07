import C from "../components/style-component/index";
import FoodCard from "./cards/index";

function Dishes({ data, byCategories }) {
  return (
    <C.ContainerDishes>
      {byCategories ? (
        (data || byCategories["italian"]).map((product) => {
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
    </C.ContainerDishes>
  );
}

export default Dishes;
