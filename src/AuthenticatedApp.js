import styled from "@emotion/styled";
import { colors } from "./styles";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import ProfilePage from "./pages/profile-page";
import Footer from "./components/Footer/footer";
import DishPage from "./pages/dish-page";
import CartPage from "./pages/cart-page";
import CheckoutPage from "./pages/checkout-page";
import HistoryPage from "./pages/history-page";
import { useAuth } from "./context/auth-context";

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 1.5rem 2rem; */
  flex-grow: 1;
`;

function AuthenticatedApp() {
  const { user } = useAuth();
  return (
    <Container>
      <MainContainer>
        <Routes>
          {user.name ? (
            <>
              <Route index element={<Navigate to="home" />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/dish" element={<DishPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </>
          ) : (
            <Route path="/*" element={<ProfilePage />} />
          )}
        </Routes>
      </MainContainer>
      <Footer />
    </Container>
  );
}

export default AuthenticatedApp;
