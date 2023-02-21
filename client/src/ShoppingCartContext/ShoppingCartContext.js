import { useState, createContext, useContext } from "react";

export const ShoppingCartContext = createContext(null);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartContextProvider(props) {
  const [cartItem, setCartItem] = useState([]);

  function getItemQuantity(id) {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id) {
    console.log(cartItem)
    setCartItem((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
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
  }

    function decreaseCartQuantity(id) {
      setCartItem((currItems) => {
        if (currItems.find((item) => item.id === id)?.quantity === 1) {
          return currItems.filter(item => item.id !== id)
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

    function removeFromCart(id){
        setCartItem(currItems => {
            return currItems.filter((item) => item.id !== id);
        })
    }

  return (
    <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}>
      {props.children}
    </ShoppingCartContext.Provider>
  );
}
