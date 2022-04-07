import C from "../components/style-component/index";
import { colors } from "../styles";

function HeaderCategories({ store, onEvent, byCategories }) {
  return (
    <C.NavContainer>
      {byCategories
        ? Object.keys(byCategories).map((nameCategory) => {
            return (
              <C.NavCategories key={nameCategory}>
                <C.Category
                  onClick={() => onEvent("currentCategory", nameCategory)}
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
                </C.Category>
              </C.NavCategories>
            );
          })
        : null}
    </C.NavContainer>
  );
}
export default HeaderCategories;
