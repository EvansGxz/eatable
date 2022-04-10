import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { HiPlusSm } from "react-icons/hi";
import { HiMinusSm } from "react-icons/hi";
import { useState } from "react";

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

export function Counter({ id, cant, onClick }) {
  const [count, setCount] = useState(cant);

  return (
    <Wrapper>
      <HiMinusSm
        onClick={() => {
          setCount(count - 1);
          onClick(count - 1, id);
        }}
        style={{ curson: "pointer" }}
      />
      {count}
      <HiPlusSm
        onClick={() => {
          setCount(count + 1);
          onClick(count + 1, id);
        }}
        style={{ curson: "pointer" }}
      />
    </Wrapper>
  );
}
