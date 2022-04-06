/* eslint-disable array-callback-return */
import { useCallback, useState } from "react";
import { useAuth } from "../../context/auth-context";

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
      .then((data) => setState({ status: "success", data: data, error: null }))
      .catch((error) =>
        setState({ status: "error", data: null, error: error.message })
      );
  }, []);

  return { ...state, execute };
}

export function useCategory() {
  const { currentDate } = useAuth();

  const [categories, setCategories] = useState({
    status: "idle",
    data: null,
    error: null,
  });

  const filter = useCallback(
    function (data, DateTo, DateFrom, amountMin, amountMax, choseCategories) {
      const dateLocalStorage = new Date(
        `${currentDate.get("year")}-${currentDate.get("month")}`
      );
      const dateTo =
        DateTo ||
        new Date(
          dateLocalStorage.getFullYear(),
          dateLocalStorage.getMonth(),
          1
        );
      const dateFrom =
        DateFrom ||
        new Date(
          dateLocalStorage.getFullYear(),
          dateLocalStorage.getMonth() + 1,
          0
        );

      amountMin &&= 0;
      amountMin &&= 100000000;

      console.log("😎", data, "holi", dateTo, dateFrom);
      Object.keys(data).forEach((date) => {
        if (date >= dateTo && date <= dateFrom) {
          data[date].forEach((category) => {
            if (
              category.amount >= amountMin &&
              category.amount <= amountMax &&
              choseCategories.includes(category.name)
            )
              setCategories({
                ...categories,
                data: [...categories.data, category],
              });
          });
        }
      });
    },
    [currentDate, categories]
  );

  return { ...categories, filter };
}
