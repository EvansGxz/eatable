import styled from "@emotion/styled";
import { typography } from "../../styles/typography";
import { colors } from "../../styles/colors";

const Wrapper = styled.div`
background-color: ${colors.white};
padding:20px

`

const Image = styled.img`
  border-radius: 50%;
  width: 62px;
  height: 62px;
  top: -40px;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
`;

export default function FoodPicture({src}){
    return(
        <Image src={src} />
    )
};