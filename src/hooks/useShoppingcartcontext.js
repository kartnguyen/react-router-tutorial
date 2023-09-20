import { useContext } from "react";
import { ShoppingcartContext } from "../context/Shoppingcartcontext";

export const useShoppingcartcontext = () => {
  const context = useContext(ShoppingcartContext);

  return { ...context };
};
