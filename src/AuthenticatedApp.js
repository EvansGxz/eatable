import styled from "@emotion/styled";
import { colors } from "./styles";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import ProfilePage from "./pages/profile-page";
import Footer from './components/Footer/footer';
import DishPage from "./pages/dish-page";
import CartPage from "./pages/cart-page";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  background-color: ${colors.ligthGray};
  margin: 0 auto;
  border-radius: 30px;
  justify-content: space-between;
  align-content: center;
  height: 100vh;
`;

const MainContainer = styled.main`
  padding: 1.5rem 2rem;
  flex-grow: 1;
  `;

function AuthenticatedApp() {
  return (
    <Container>
      <MainContainer>
        <Routes>
          <Route index element={<Navigate to="home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/dish" element={<DishPage />} />
          <Route path="/cart" element={<CartPage />} />
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
