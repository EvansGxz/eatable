/* eslint-disable array-callback-return */
import { useCallback, useState } from "react";

export function useAsync() {
  // Manejo del estado de la promesa
  const [state, setState] = useState({
    status: "idle",
    data: null,
    error: null,
  });

  // Funcion estable que procesa una promesa y actualiza el estado
  const execute = useCallback(function (promise) {
    setState({ status: "pending", data: null, error: null });

    promise
      .then((data) => {
        let byCategories = {};

        data.forEach((product) => {
          if (byCategories[product.category]) {
            byCategories[product.category] = [
              ...byCategories[product.category],
              product,
            ];
          } else {
            byCategories[product.category] = [product];
          }
        });

        setState({
          status: "success",
          data: data,
          error: null,
          byCategories: byCategories,
        });
      })
      .catch((error) =>
        setState({ status: "error", data: null, error: error.message })
      );
  }, []);

  return { ...state, execute };
}
