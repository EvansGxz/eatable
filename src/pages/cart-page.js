import { useEffect, useState } from "react";
import CardItem from "../components/card-item/cardItem";
import C from "../components/style-component/index";
import { useLocalStorage } from "../hooks";
import Button from "../components/Button/index";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const [erase, setErase] = useState({ erased: false, id: null });
  // const [total, setTotal] = useState(0);
  const [total, setTotal] = useLocalStorage(0, "TotalToPay");
  const [myCart, setMyCart] = useLocalStorage({}, "listMyArticles");
  const navigate = useNavigate();

  useEffect(() => {
    let temp = myCart;
    let total = Object.values(temp).reduce((acc, va) => {
      return acc + va.cant * va.price;
    }, 0);
    setTotal(total / 100);
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

  // function eventCheckout() {
  //   console.log(myCart);

  //   product.cant = !myCart[product.id] ? 1 : myCart[product.id].cant + 1;
  //   setMyCart({ ...myCart, [product.id]: product });
  // }

  return (
    <C.ContainerDishPage>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <C.StyledLink to={"/home"} style={{ alignSelf: "flex-start" }}>
          <AiOutlineLeft />
        </C.StyledLink>
        <h2>Cart</h2>
      </div>
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
            <Button type="primary" onClick={() => navigate("/checkout")}>
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
