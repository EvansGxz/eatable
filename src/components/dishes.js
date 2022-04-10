import C from "../components/style-component/index";
import FoodCard from "./cards/index";
import { Link } from "react-router-dom";
import EatableLogo from "./eatableLogo/eatable-logo";
import NoContent from "./noContent/no-content";
import { colors } from "../styles";
import { MdOutlineSearchOff } from "react-icons/md";

function Dishes({ data, byCategories, status }) {
  if (status === "success") {
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
                />
              </Link>
            );
          })
        ) : (
          <NoContent
            icon={
              <MdOutlineSearchOff size={105} style={{ fill: colors.gray }} />
            }
            text="No history yet."
          />
        )}
      </C.ContainerDishes>
    );
  } else if (status === "loading") {
    return <EatableLogo />;
  }
}

export default Dishes;
