import { createContext, useReducer } from "react";
import { useAppcontext } from "../hooks/useAppcontext";

export const ShoppingcartContext = createContext();

export const ShoppingCartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const exist = state.products.find(
        (item) => item.productId === action.payload.productId
      );
      if (exist) {
        return {
          ...state,
          products: state.products.map((item) => {
            if (item.productId === action.payload.productId) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            } else {
              return item;
            }
          }),
        };
      } else {
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      }
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.productId !== action.payload.productId
        ),
      };
    default:
      throw new Error("Invalid action type: " + action.type);
  }
};

const innitialState = {
  products: [
    {
      productId: 1,
      quantity: 1,
    },
  ],
};
export const ShoppingcartProvider = ({ children }) => {
  const { findProductById } = useAppcontext();
  const [state, dispatch] = useReducer(ShoppingCartReducer, innitialState);

  const totalItems = state.products.length;

  const handleAddItem = (productId, quantity = 1) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { productId, quantity },
    });
  };
  const handleRemoveItem = (productId) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { productId },
    });
  };
  const items = state.products.map((item) => ({
    product: findProductById(item.productId),
    quantity: item.quantity,
  }));
  
  return (
    <ShoppingcartContext.Provider
      value={{ ...state, handleAddItem, totalItems, handleRemoveItem, items }}
    >
      {children}
    </ShoppingcartContext.Provider>
  );
};
