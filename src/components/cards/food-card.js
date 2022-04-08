import C from "../style-component";
// import PropTypes from "prop-types";

export default function FoodCard({ src, name, price, onClick }) {
  return (
    <C.Wrapper onClick={onClick}>
      <C.Image src={src} />
      <C.NameDish>{name}</C.NameDish>
      <C.PriceDish>${price / 100}</C.PriceDish>
    </C.Wrapper>
  );
}

// FoodCard.propTypes = {
//   size: PropTypes.oneOf(["sm", "md", "lg"]),
//   color: PropTypes.string,
//   Icon: PropTypes.func,
//   inverted: PropTypes.bool,
// };
