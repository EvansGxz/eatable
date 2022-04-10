import styled from "@emotion/styled";
import { colors } from "../../styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 224px;
  height: 195px;
  position: fixed;
  top: 25%;
  left: 35%;
`;
const Text = styled.p`
  font-family: "Source Sans Pro";
  font-weight: 600;
  font-size: 28px;
  text-align: center;
  color: ${colors.black};
`;

export default function NoContent({ text, icon }) {
  return (
    <Wrapper>
      <div className="text-align: center;">{icon}</div>
      <Text>{text}</Text>
    </Wrapper>
  );
}
