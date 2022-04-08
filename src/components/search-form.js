import { BsSearch } from "react-icons/bs";
import { AiOutlineLeft } from "react-icons/ai";
import { colors } from "../styles/colors";
import { typography } from "../styles";
import { fonts } from "../styles/typography";

function SearchForm({ store, onEvent }) {
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
    </div>
  );
}

export default SearchForm;
