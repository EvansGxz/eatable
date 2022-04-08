import { useAuth } from "../context/auth-context";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import FoodPicture from "../components/foodPicture/food-picture";
import CardItem from "../components/card-item/cardItem";
import { ContainerDishes } from "../components/style-component/style-component";
import C from "../components/style-component/index";
import { useLocalStorage } from "../hooks";

function CartPage() {
  const { getProducts, products, storeArticle, show } = useAuth();
  useEffect(() => {
    const id =new URLSearchParams(window.location.search).get("id");
    show(id);
    
  }, []);
  
  const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
    justify-content: center;
    align-items: center;
  `;
  
    return (
      <Container>
        <h2>Cart</h2>
        {JSON.parse(localStorage.getItem('storeArticle')) ? (
          <C.ContainerDishes>
          {console.log("%c 📝: CartPage -> storeArticle ", "font-size:16px;background-color:#4b5331;color:white;", localStorage.getItem('storeArticle'))}
          
          {JSON.parse(localStorage.getItem('storeArticle')).map((product) => {
            {console.log(product)}
        return (
          <CardItem key={product.id}
                    name={product.name}
                    price={product.price}
                    src={product.picture_url}>
          </CardItem>
        );})}
        </C.ContainerDishes>) : (<h2>Not found</h2>
        )}
      </Container>
  );
}

export default CartPage;
