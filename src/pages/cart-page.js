// import { useAuth } from "../context/auth-context";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import CardItem from "../components/card-item/cardItem";
import C from "../components/style-component/index";
// import { fromLocalStorage, removeToLocalStorage, saveToLocalStorage } from "../components/utils";

function CartPage() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const List = JSON.parse(localStorage.getItem("listMyArticles"));
    setItems(List);
  }, []);

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  `;

  // function eventCant({ ...props }) {
  //   console.log(
  //     "%c 👩‍🏭: eventCant -> Items ",
  //     "font-size:16px;background-color:#4ad3a0;color:black;",
  //     items,
  //     props.value,
  //     props.id
  //   );
  //   if (props.value === 0) {
  //     let temp = items;
  //     delete temp[props.id];
  //     setItems(temp);

  //     let temp2 = JSON.parse(localStorage.getItem("storeArticle")).filter(
  //       (article) => article.id !== props.id
  //     );
  //     localStorage.setItem("storeArticle", JSON.stringify(temp2));
  //   } else {
  //     setItems({ ...items, [props.id]: props.value });
  //   }
  // }

  return (
    <Container>
      <h2>Cart</h2>
      {items ? (
        <C.ContainerDishes>
          {Object.values(items).map((product) => {
            return (
              <CardItem
                key={product.id}
                name={product.name}
                price={product.price}
                src={product.picture_url}
                // onClick={eventCant}
                id={product.id}
              />
            );
          })}
        </C.ContainerDishes>
      ) : (
        <h2>Not found</h2>
      )}
    </Container>
  );
}

export default CartPage;
