import styled from "@emotion/styled";
import { useState } from "react";
import LoginForm from "./components/login-form";
import SignupForm from "./components/signup-form";
import { colors, typography } from "./styles";
// import EatableLogo from "./components/eatableLogo/eatable-logo";
import { ReactComponent as EatableLogoSvg } from "./components/eatableLogo/eatable_logo.svg";

const Section = styled.div`
  margin: 96px auto;
  margin-bottom: 0px;
`;

const Container = styled.div`
  max-width: 480px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-color: ${colors.ligthGray};
`;

const Title = styled.h1`
  ${typography.semibold.sm}
  font-weight: 600;
  padding: 0.5rem 2rem;
  cursor: pointer;
`;

const CustomLink = styled.a`
  cursor: pointer;
  color: ${colors.gray.medium};
  font-weight: 600;
  &:hover {
    color: ${colors.gray.dark};
  }
`;

function UnauthenticatedApp() {
  const [showLogin, setShowLogin] = useState(true);

  function handleLinkClick(event) {
    event.preventDefault();
    setShowLogin(!showLogin);
  }

  return (
    <Section>
      <Container>
        <div
          style={{
            diplay: "flex",
            flexDirection: "column",
            borderRadius: "0 0 30px 30px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
          }}
        >
          <EatableLogoSvg style={{ display: "flex", margin: "20px auto" }} />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Title
              size="xl"
              bold
              onClick={() => setShowLogin(true)}
              style={
                showLogin ? { borderBottom: ` 4px solid ${colors.orange}` } : {}
              }
            >
              Login
            </Title>
            <Title
              size="xl"
              bold
              onClick={() => setShowLogin(false)}
              style={
                !showLogin
                  ? { borderBottom: ` 4px solid ${colors.orange}` }
                  : {}
              }
            >
              Sign up
            </Title>
          </div>
        </div>
        {showLogin ? <LoginForm /> : <SignupForm />}
      </Container>
    </Section>
  );
}

export default UnauthenticatedApp;
