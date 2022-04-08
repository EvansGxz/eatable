import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import {HiPlusSm} from "react-icons/hi";
import {HiMinusSm} from "react-icons/hi";
import { useState } from "react";
// import PropTypes from "prop-types";

const Wrapper = styled.div`
background-color: ${colors.orange};
border-radius: 30px;
width: 52px;
heigth: 20px;
display: flex;
align-items: center;
justify-content: center;
color: ${colors.white};
`

export function Counter ({num}){
    const [count, setCount] = useState(1);
    return(
        <Wrapper>
            <HiMinusSm onClick={() => setCount(count - 1)} />
            {count}
            <HiPlusSm onClick={() => setCount(count + 1)} />
        </Wrapper>
    );
}