import { useEffect, useState } from "react";
import Button from "../components/Button/index";
import styled from "@emotion/styled";
import { AiOutlineLeft } from "react-icons/ai";
import C from "../components/style-component";
import { useLocalStorage } from "../hooks";
import { useNavigate } from "react-router-dom";
import { showProduct } from "../services/products-service";

function DishPage() {
  const [myCart, setMyCart] = useLocalStorage({}, "listMyArticles");
  const [productDetail, setProductDetail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem(
      "info",
      JSON.stringify({ currentCategory: "italian", query: null })
    );
    const id = new URLSearchParams(window.location.search).get("id");
    showProduct(id).then(setProductDetail);
  }, []);

  useEffect(() => {
    if (productDetail) navigate("/cart");
  }, [myCart]);

  const Photo = styled.img`
    width: 15.065rem;
    height: 15.065rem;
    border-radius: 50%;
    margin-bottom: 1.25rem;
    box-shadow: 0px 10px 17px 8px rgb(57 57 57 / 15%);
  `;

  const Container = styled.div`
    overflow: hidden;
    height: 85vh;
  `;

  function eventMyCart(product) {
    console.log(myCart);

    product.cant = !myCart[product.id] ? 1 : myCart[product.id].cant + 1;
    setMyCart({ ...myCart, [product.id]: product });
  }

  return productDetail ? (
    <Container key={productDetail.id}>
      <div
        style={{
          overflow: "auto",
          width: "100%",
          height: "99%",
          padding: "50px 54px 0 54px",
          display: "flex",
          flexDirection: "column",
          gap: "0.625rem",
          justifyContent: "center",
          alignItems: "center",
          // paddingRight: "15px",
        }}
      >
        <C.StyledLink to={"/home"} style={{ alignSelf: "flex-start" }}>
          <AiOutlineLeft />
        </C.StyledLink>

        <Photo src={productDetail.picture_url} alt="" />
        <C.NameDish>{productDetail.name}</C.NameDish>
        <C.PriceDish>${productDetail.price / 100}</C.PriceDish>
        <C.TitleDescription>Description</C.TitleDescription>
        <C.DescriptionDish>{productDetail.description}</C.DescriptionDish>
        <Button type="primary" onClick={() => eventMyCart(productDetail)}>
          Added to Cart
        </Button>
      </div>
    </Container>
  ) : (
    <div>no hay datos aún</div>
  );
}

export default DishPage;
