import styled from "@emotion/styled";
import EatableLogo from "./eatableLogo/eatable-logo";

const LoadingBackground = styled.div`
  background-image: url("https://img.freepik.com/foto-gratis/comida-catering-cocina-culinaria-gourmet-buffet-fiesta-concepto_53876-86504.jpg?w=1380");
  max-height: 100vh;
  max-width: 480;
  transform: rotate(90deg);
`;
export default function Loading() {
  // return <EatableLogo />;
  return (
    <LoadingBackground>
      <EatableLogo />
    </LoadingBackground>
  );
}
