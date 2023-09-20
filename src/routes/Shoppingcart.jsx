import React from "react";
import { useShoppingcartcontext } from "../hooks/useShoppingcartcontext";

const Shoppingcart = () => {
  const { items, handleRemoveItem } = useShoppingcartcontext();

  return (
    <div>
      <h1>Shoppingcart page</h1>
      {items.map((item) => (
        <div key={item.product.id}>
          <h2>{item.product.title}</h2>
          <img src={item.product.thumbnail} alt={item.product.title} />
          <p>{item.product.price}</p>
          <p>{item.quantity}</p>
          <button onClick={() => handleRemoveItem(item.product.id)}>
            Clear
          </button>
        </div>
      ))}
      <button>Checkout</button>
    </div>
  );
};

export default Shoppingcart;
