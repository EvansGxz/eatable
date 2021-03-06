import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import FoodPicture from "../foodPicture/food-picture";
import { Counter } from "../counter/counter";

const Wrapper = styled.div`
  background-color: ${colors.white};
  flex-direction: row;
  display: flex;
  gap: 20px;
  width: 315px;
  height: 102px;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  box-shadow: 0px 20px 20px rgba(57, 57, 57, 0.1);
`;
export const NameDish = styled.p`
  line-height: 28px;
  align-items: center;
  text-align: center;
  color: ${colors.black};
  font-weight: semi bold;
  font-weight: 600;
`;

const PriceDish = styled.p`
  font-style: normal;
  line-height: 8px;
  align-items: center;
  text-align: center;
  color: ${colors.orange};
  font-weight: semi bold;
  font-weight: 600;
`;

export default function CardItem({ src, name, price, id, cant, onClick }) {
  return (
    <Wrapper>
      <FoodPicture src={src} />
      <div>
        <NameDish> {name} </NameDish>
        <div style={{ float: "left" }}>
          <PriceDish>${(price * cant) / 100} </PriceDish>
        </div>
      </div>
      <div style={{ marginBbottom: "24px" }}>
        <Counter id={id} cant={cant} onClick={onClick} />
      </div>
    </Wrapper>
  );
}
