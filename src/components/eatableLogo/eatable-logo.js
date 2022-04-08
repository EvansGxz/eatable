import styled from "@emotion/styled";
import { typography } from "../../styles/typography";
import { colors } from "../../styles/colors";
import {ReactComponent as EatableLogoSvg} from './eatable_logo.svg';
import './loading.css';
 
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content:center;
    min-height: 262px;
    max-width: 262px;
    border-radius:50%;
    background-color: ${colors.white};
    gap: 24px;
`

export default function EatableLogo(){
    return(
    <Wrapper>
        <EatableLogoSvg style={{marginTop:'43px'}} />
        <div
        className="load"
        ></div>
    </Wrapper>
    )
};
