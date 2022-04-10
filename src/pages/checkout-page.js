import { BsDisplay } from "react-icons/bs";
import { CardProfile } from "../components/cards/profile-card";
import C from "../components/style-component/index";
import { useEffect, useState } from "react";
import Button from "../components/Button/index";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks";
import { useAuth } from "../context/auth-context";
import { createOrder } from "../services/orders-service";
import { AiOutlineLeft } from "react-icons/ai";

function CheckoutPage() {
  const navigate = useNavigate();
  const [personalData, setPersonalData] = useLocalStorage(
    useAuth().user,
    "PersonalData"
  );
  const [change, setChange] = useState(false);

  function eventChange() {
    setChange(!change);
  }

  function eventCompleteOrder() {
    const articlesToBuy = JSON.parse(localStorage.getItem("listMyArticles"));
    const deliveryAdress = personalData.address;

    const items = [
      ...Object.values(articlesToBuy).map((product) => {
        return { id: product.id, quantity: product.cant };
      }),
    ];

    const Order = { delivery_address: deliveryAdress, items: items };
    createOrder(Order).then(() => {
      localStorage.setItem("listMyArticles", {});
      localStorage.setItem("PersonalData", null);
    });
    navigate("/history");
  }

  function handleFormChange(event) {
    const { name, value } = event.target;

    setPersonalData({ ...personalData, [name]: value });
    // setErrors({ ...errors, [name]: "" });
  }

  return (
    <div
      display={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Checkout</h1>
      <C.StyledLink to={"/cart"} style={{ alignSelf: "flex-start" }}>
        <AiOutlineLeft />
      </C.StyledLink>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          margin: "1rem 0",
        }}
      >
        <h3>Personal Details</h3>
        <h3
          style={change ? { color: "green" } : { color: "orange" }}
          onClick={eventChange}
        >
          {change ? "Cancel" : "Change"}
        </h3>
      </div>

      <CardProfile
        disabled={change ? null : "disabled"}
        change={change}
        personalData={personalData}
        exist={true}
        onChange={handleFormChange}
        type={"checkout"}
      />

      <C.FooterDishPage>
        <C.ContainerTotal>
          <C.Total>total</C.Total>
          <C.TotalValue>${localStorage.getItem("TotalToPay")}</C.TotalValue>
        </C.ContainerTotal>
        <Button type="primary" onClick={eventCompleteOrder}>
          Complete Order
        </Button>
      </C.FooterDishPage>
    </div>
  );
}

export default CheckoutPage;
