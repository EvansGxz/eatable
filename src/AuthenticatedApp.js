import styled from "@emotion/styled";
import { colors } from "./styles";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import Footer from "./components/footer";
import ProfilePage from "./pages/profile-page";

const Container = styled.div`
  display: grid;
  width: 480px;
  background-color: ${colors.gray[100]};
  height: 100vh;
  margin: 0 auto;
  border-radius: 30px;
`;

const MainContainer = styled.main`
  padding: 1.5rem 2rem;
`;

function AuthenticatedApp() {
  return (
    <Container>
      <MainContainer>
        <Routes>
          <Route index element={<Navigate to="home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/detail-dish/:type"
            element={<h1>Detalle de Plato</h1>}
          />
          <Route path="/cart" element={<h1>Detaill Cart</h1>} />
          <Route path="/checkout" element={<h1>Checkout order</h1>} />
          <Route path="/history" element={<h1>History</h1>} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </MainContainer>
      <Footer />
    </Container>
  );
}

export default AuthenticatedApp;
