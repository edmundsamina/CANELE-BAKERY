import {  createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
export const ShoppingCartContext = createContext(null);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartContextProvider(props) {
  const [cartItems, setCartItems] = useLocalStorage("shopping cart", []);


  function getItemQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id, obj ) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1, ...obj}];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
    console.log(cartItems)
  }

  function decreaseCartQuantity(id) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }


  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
}
