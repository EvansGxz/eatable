import { useAuth } from "../context/auth-context";
import { useEffect, useState } from "react";
import Button from "../components/Button/index";
import styled from "@emotion/styled";

function DishPage() {
  const { getProducts, products } = useAuth();
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(new URLSearchParams(window.location.search).get("id"));
    getProducts();
  }, []);

  const Photo = styled.img`
    width: 241px;
    height: 241px;
    border-radius: 50%;
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  `;

  return products ? (
    products.map((product) => {
      if (product.id * 1 !== id * 1) return null;
      return (
        <Container>
          <Photo src={product.picture_url} alt="" />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <p>Description</p>
          <p>{product.description}</p>
          <Button type="primary">Added to Cart</Button>
        </Container>
      );
    })
  ) : (
    <div>no hay datos aún</div>
  );
}

export default DishPage;
