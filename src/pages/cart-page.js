// import { useAuth } from "../context/auth-context";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import CardItem from "../components/card-item/cardItem";
import C from "../components/style-component/index";
import { useLocalStorage } from "../hooks";
// import { fromLocalStorage, removeToLocalStorage, saveToLocalStorage } from "../components/utils";
import Button from "../components/Button/index";
import { typography } from "../styles";
import { colors } from "../styles/colors";

function CartPage() {
  const [erase, setErase] = useState({ erased: false, id: null });
  const [total, setTotal] = useState(0);
  const [myCart, setMyCart] = useLocalStorage({}, "listMyArticles");

  useEffect(() => {
    console.log(
      "%c ⛅: CartPage -> myCart ",
      "font-size:16px;background-color:#eb80ad;color:white;",
      myCart
    );
    let temp = myCart;
    let a = Object.values(temp).reduce((acc, va) => {
      return acc + va.cant * va.price;
    }, 0);
    console.log(
      "%c 🏝️: CartPage -> a  ",
      "font-size:16px;background-color:#0f0b10;color:white;",
      a
    );
    setTotal(a / 100);
  }, [myCart]);

  useEffect(() => {
    if (!erase.id) return;
    let temp = myCart;
    delete temp[erase.id];
    localStorage.setItem("listMyArticles", JSON.stringify(temp));
    // setMyCart(temp);
  }, [erase]);

  function eventCant(value, id) {
    if (value === 0) {
      setErase({ erased: true, id: id });
    } else {
      let temp = myCart[id];
      temp.cant = value;
      setMyCart({ ...myCart, [id]: temp });
    }
  }

  function eventCheckout() {}

  return (
    <C.ContainerDishPage>
      <h2>Cart</h2>
      {myCart ? (
        <C.ContainerDishes>
          {/* setTotal(total + product.price * product.cant); */}
          {Object.values(myCart).map((product) => {
            return (
              <CardItem
                key={product.id}
                name={product.name}
                price={product.price}
                src={product.picture_url}
                cant={product.cant}
                onClick={eventCant}
                id={product.id}
              />
            );
          })}
          <C.FooterDishPage>
            <C.ContainerTotal>
              <C.Total>total</C.Total>
              <C.TotalValue>${total}</C.TotalValue>
            </C.ContainerTotal>
            <Button type="primary" onClick={() => eventCheckout()}>
              Checkout
            </Button>
          </C.FooterDishPage>
        </C.ContainerDishes>
      ) : (
        <h2>Not found</h2>
      )}
    </C.ContainerDishPage>
  );
}

export default CartPage;
