import { BsSearch } from "react-icons/bs";
import { AiOutlineLeft } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { colors } from "../styles/colors";
import { fonts } from "../styles/typography";
import { useNavigate } from "react-router-dom";

function SearchForm({ store, onEvent }) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {store.query ? (
        <AiOutlineLeft
          onClick={() => onEvent("query", null)}
          style={{ cursor: "pointer" }}
        />
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
          fontFamily: `${fonts.primary}`,
          fontSize: "1.125rem",
          lineHeight: "1.414rem",
        }}
        onChange={(e) => {
          console.log(e.target.value);
          onEvent("query", e.target.value);
        }}
      />
      <FiShoppingCart
        style={{ cursor: "pointer", color: `${colors.DarkGray}` }}
        onClick={() => navigate("/history")}
      />
    </div>
  );
}

export default SearchForm;
