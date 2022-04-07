import { useAuth } from "../context/auth-context";
import { useEffect, useState } from "react";
import Button from "../components/Button/index";
import styled from "@emotion/styled";

function CartPage() {
  const { getProducts, products } = useAuth();
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(new URLSearchParams(window.location.search).get("id"));
    getProducts();
  }, []);

  const Photo = styled.img`
    width: 62px;
    height: 62px;
    border-radius: 50%;
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  `;
  const icon =(
  <svg width="181" height="50" viewBox="0 0 181 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  </svg>
  );
    return (
      <Container> 
        <Photo src={icon} alt="" />
        <h2>test</h2>
        <p>$28.89</p>
      </Container>
    )
}

export default CartPage;
