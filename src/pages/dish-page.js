import { useAuth } from "../context/auth-context";
import { useEffect, useState } from "react";
import Button from "../components/Button/index";
import styled from "@emotion/styled";
import { AiOutlineLeft } from "react-icons/ai";
import C from "../components/style-component";

function DishPage() {
  const { getProducts, products } = useAuth();
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(new URLSearchParams(window.location.search).get("id"));
    getProducts();
    return localStorage.setItem(
      "info",
      JSON.stringify({ currentCategory: null, query: null })
    );
  }, []);

  const Photo = styled.img`
    width: 15.065rem;
    height: 15.065rem;
    border-radius: 50%;
    margin-bottom: 1.25rem;
    box-shadow: 0px 10px 17px 8px rgb(57 57 57 / 15%);
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    justify-content: center;
    align-items: center;
  `;

  return products ? (
    products.map((product) => {
      if (product.id * 1 !== id * 1) return null;
      return (
        <Container key={product.id}>
          <C.StyledLink to={"/home"} style={{ alignSelf: "flex-start" }}>
            <AiOutlineLeft />
          </C.StyledLink>

          <Photo src={product.picture_url} alt="" />
          <C.NameDish>{product.name}</C.NameDish>
          <C.PriceDish>${product.price / 100}</C.PriceDish>
          <C.TitleDescription>Description</C.TitleDescription>
          <C.DescriptionDish>{product.description}</C.DescriptionDish>
          <Button type="primary">Added to Cart</Button>
        </Container>
      );
    })
  ) : (
    <div>no hay datos aún</div>
  );
}

export default DishPage;
