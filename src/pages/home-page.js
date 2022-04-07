import FoodCard from "../components/cards/food-card";
import { useAuth } from "../context/auth-context";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles";
import { BsSearch } from "react-icons/bs";
import { AiOutlineLeft } from "react-icons/ai";
import { useLocalStorage } from "../hooks";

function HomePage() {
  const { getProducts, products, byCategories } = useAuth();
  const [store, setStore] = useLocalStorage(
    { currentCategory: "italian", query: null },
    "info"
  );
  const [data, setData] = useState(null);

  useEffect(() => {
    getProducts();
    // setCurrentCategory({ currentCategory: "italian", query: null });
  }, []);

  useEffect(() => {
    if (!byCategories) return;

    setData(byCategories[store.currentCategory]);
  }, [store]);

  function eventChangeCategory(key, value) {
    // setCurrentCategory(nameCategory);
    setStore({ ...store, [key]: value });
  }

  const NavCategories = styled.div`
    font-weight: ${typography.regular.sm};
    line-height: 20px;
    text-align: center;
    color: ${colors.DarkGray};
    font-weight: ${typography.semibold.lg};
    margin-bottom: 1.5rem;
  `;

  const Category = styled.span`
    padding-bottom: 10px;
    cursor: pointer;
  `;

  const NavContainer = styled.span`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  `;

  const ContainerDishes = styled.div`
    display: flex;
    gap: 1.25rem;
    flex-wrap: wrap;
    /* justify-content: center; */
    align-items: center;
  `;

  const Search = styled.div`
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  `;
  const InputSearch = styled.input`
    border: none;
    outline: none;
    background-color: ${colors.ligthGray};
    margin: 1rem 0;
  `;

  const IconOut = styled(AiOutlineLeft)``;

  return (
    <div>
      <h1> HOME PAGE</h1>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {store.query ? (
          <IconOut onClick={() => eventChangeCategory("query", null)} />
        ) : (
          <BsSearch />
        )}

        <input
          type="text"
          name="query"
          id="search"
          value={store.query || ""}
          placeholder="Search"
          style={{
            border: "none",
            outline: "none",
            backgroundColor: `${colors.ligthGray}`,
            margin: "1rem 0",
          }}
          onChange={(e) => {
            console.log(e.target.value);
            eventChangeCategory("query", e.target.value);
          }}
        />
      </div>

      {store.query ? (
        products.map((product) => {
          if (!product.name.match(store.query)) return null;
          return (
            <FoodCard
              key={product.id}
              src={product.picture_url}
              name={product.name}
              price={product.price}
            />
          );
        })
      ) : (
        <div>
          <NavContainer>
            {console.log(
              "🤩 bycategories",
              byCategories,
              store.currentCategory
            )}
            {byCategories
              ? Object.keys(byCategories).map((nameCategory) => {
                  return (
                    <NavCategories key={nameCategory}>
                      <Category
                        onClick={() =>
                          eventChangeCategory("currentCategory", nameCategory)
                        }
                        style={
                          nameCategory === (store.currentCategory || "italian")
                            ? {
                                color: `${colors.orange}`,
                                borderBottom: `3px solid ${colors.orange}`,
                              }
                            : null
                        }
                      >
                        {nameCategory.replace(
                          nameCategory[0],
                          nameCategory[0].toUpperCase()
                        )}
                      </Category>
                    </NavCategories>
                  );
                })
              : null}
          </NavContainer>

          <ContainerDishes>
            {console.log("😎 data", data)}
            {byCategories ? (
              (data || byCategories["italian"]).map((product) => {
                return (
                  <FoodCard
                    key={product.id}
                    src={product.picture_url}
                    name={product.name}
                    price={product.price}
                  />
                );
              })
            ) : (
              <h2>Todavía no hay datos</h2>
            )}
          </ContainerDishes>
        </div>
      )}
    </div>
  );
}

export default HomePage;
