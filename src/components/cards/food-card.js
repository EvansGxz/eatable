import styled from "@emotion/styled";
// import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 9.75rem;
  height: 13.25rem;
  border-radius: 30px;
  position: relative;
  background-color: white;
  align-items: center;
  margin-top: 40px;
  padding: 100px 13px 26px 13px;
  gap: 0.75rem;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
`;

const Image = styled.img`
  border-radius: 50%;
  width: 8.125rem;
  height: 8.125rem;
  position: absolute;
  top: -40px;
  box-shadow: 0px 10px 17px 8px rgb(57 57 57 / 15%);
`;

const NameDish = styled.p`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #333333;
`;

const PriceDish = styled.p`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  color: #fa4a0c;
`;

export default function FoodCard({ src, name, price }) {
  return (
    <Wrapper>
      <Image src={src} />
      <NameDish>{name}</NameDish>
      <PriceDish>${price}</PriceDish>
    </Wrapper>
  );
}

// FoodCard.propTypes = {
//   size: PropTypes.oneOf(["sm", "md", "lg"]),
//   color: PropTypes.string,
//   Icon: PropTypes.func,
//   inverted: PropTypes.bool,
// };
