import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { HiPlusSm } from "react-icons/hi";
import { HiMinusSm } from "react-icons/hi";
import { useState } from "react";
// import PropTypes from "prop-types";

const Wrapper = styled.div`
  background-color: ${colors.orange};
  border-radius: 30px;
  min-width: 52px;
  max-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  gap: 3px;
`;

export function Counter({ onClick, id }) {
  const [count, setCount] = useState(1);
  const [items, setItems] = useState({});

  function eventCant(value, id) {
    console.log(
      "%c 👩‍🏭: eventCant -> Items ",
      "font-size:16px;background-color:#4ad3a0;color:black;",
      items,
      value,
      id
    );
    if (value === 0) {
      let temp = items;
      delete temp[id];
      setItems(temp);

      let temp2 = JSON.parse(localStorage.getItem("storeArticle")).filter(
        (article) => article.id !== id
      );
      localStorage.setItem("storeArticle", JSON.stringify(temp2));
    } else if (value > 0) setItems({ ...items, [id]: value });
  }

  return (
    <Wrapper>
      <HiMinusSm
        onClick={() => {
          const newValue = count <= 1 ? 0 : count - 1;
          setCount(newValue) && eventCant(newValue, id);
        }}
        style={{ curson: "pointer" }}
      />
      {count}
      <HiPlusSm
        onClick={() => {
          setCount(count + 1);
          eventCant(count + 1, id);
        }}
        style={{ curson: "pointer" }}
      />
    </Wrapper>
  );
}
