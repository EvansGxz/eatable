import styled from "@emotion/styled";
import EatableLogo from "./eatableLogo/eatable-logo";

const LoadingBackground =styled.div`
    background-image: url("https://img.freepik.com/foto-gratis/comida-catering-cocina-culinaria-gourmet-buffet-fiesta-concepto_53876-86504.jpg?w=1380");
    max-height: 896px;
    max-width: auto;
`
export default function Loading(){
    return(
    <LoadingBackground>
        <EatableLogo />
    </LoadingBackground>
    )
};