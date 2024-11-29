import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

// Create context
export const StoreContext = createContext();


// StoreProvider component
const StoreProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  // Function to add an item to the cart
  const AddToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1, // Increment or initialize quantity
    }));
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };

      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1; // Decrease quantity
      } else {
        delete updatedCart[itemId]; // Remove item if quantity becomes 0
      }

      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {

        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item]
      }
    }
    return totalAmount;
  }

  // Store context value
  const StoreContextValue = {
    food_list,
    cartItems,
    AddToCart,
    removeFromCart,
    getTotalCartAmount
  };

  // Provide the context to children
  return (
    <StoreContext.Provider value={StoreContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
