import { useEffect, useState } from "react";
import { indexOrders } from "../services/orders-service";
import styled from "@emotion/styled";
import { typography } from "../styles";
import { AiOutlineDown } from "react-icons/ai";

function HistoryPage() {
  const [myOrders, setMyOrders] = useState(null);
  const [show, setShow] = useState(null);

  useEffect(() => {
    indexOrders().then(setMyOrders);
  }, []);

  const ContainerHistoryCard = styled.div`
    width: 315px;
    background: #ffffff;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 20px;
    padding: 30px 26px;
    margin: 1rem auto;

    span {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      color: #fa4a0c;
    }
  `;

  const TotalPaid = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 11px 0 18px 0;
  `;

  const TitleCardHistory = styled.h3`
    ${typography.semibold.sm}
    color: #333333;
  `;

  return (
    <div>
      <h1>History Page</h1>;
      {myOrders ? (
        myOrders.map((order) => {
          return (
            <ContainerHistoryCard key={order.id}>
              <p>
                {new Intl.DateTimeFormat("en-GB", { dateStyle: "full" }).format(
                  order.at_created
                )}
              </p>
              <TotalPaid>
                <p>{order.items_count} items</p>
                <span>$ {order.total}</span>
              </TotalPaid>
              <div
                onClick={() => (show ? setShow(null) : setShow(order.id))}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  cursor: "pointer",
                }}
              >
                <AiOutlineDown />
              </div>

              {show === order.id ? (
                <>
                  <TitleCardHistory>Order</TitleCardHistory>
                  {order.order_details.map((item) => {
                    return (
                      <TotalPaid key={item.id}>
                        <p>
                          {item.quantity}- {item.product_name}
                        </p>
                        <p>$ {item.subtotal / 100}</p>
                      </TotalPaid>
                    );
                  })}
                  <hr />
                  <TitleCardHistory>delivery</TitleCardHistory>
                  <p>{order.delivery_address}</p>
                </>
              ) : null}
            </ContainerHistoryCard>
          );
        })
      ) : (
        <div>no hay datos ....</div>
      )}
    </div>
  );
}

export default HistoryPage;
