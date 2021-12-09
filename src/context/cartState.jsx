import { createContext, useState } from "react";

const initialState = {
  itemsAdded: [],
};

export const CartContext = createContext({});

export default (props) => {
  const [cartState, setCartState] = useState(initialState);

  const addItem = (item) => {
    setCartState((state) => {
      const itemsInCart = state.itemsAdded;
      itemsInCart.forEach((itemInCart) => {
        itemInCart.name === item.name
          ? itemInCart.quantity + 1
          : itemsInCart.push(item);
      });

      return { ...state };
    });
  };

  return (
    <CartContext.Provider value={{ cartState, cartActions: { addItem } }}>
      {props.children}
    </CartContext.Provider>
  );
};
