import { useReducer, useEffect } from "react";
import UserContext from "./UserContext";

const initialState = {
  user: null,
  isLoggedIn: false,
  cart: [],
  wishlist: [],
  loading: false,
  error: null,
};

const totalQuantity = (cart) => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload, isLoggedIn: true };

    case "LOGOUT":
      return { ...initialState };
    case "ADD_TO_CART": {
      const exists = state.cart.some((item) => item._id === action.payload._id);

      // If item exists → remove it
      if (exists) {
        const updatedCart = state.cart.filter(
          (item) => item._id !== action.payload._id
        );
        return { ...state, cart: updatedCart };
      }

      // If item not in cart → add with quantity = 1
      const updatedCart = [...state.cart, { ...action.payload, quantity: 1 }];
      return { ...state, cart: updatedCart };
    }
    case "INCREASE_CART_QTY": {
      const updatedCart = state.cart.map((item) =>
        item._id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return { ...state, cart: updatedCart };
    }

    case "DECREASE_CART_QTY": {
      const updatedCart = state.cart
        .map((item) =>
          item._id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // remove if quantity hits 0
      return { ...state, cart: updatedCart };
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };
    case "ADD_TO_WISHLIST": {
      const exists = state.wishlist.some(
        (item) => item._id === action.payload._id
      );

      const updatedWishlist = exists
        ? state.wishlist.filter((item) => item._id !== action.payload._id)
        : [...state.wishlist, action.payload];

      return { ...state, wishlist: updatedWishlist };
    }
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item._id !== action.payload),
      };
    case "LOAD_FROM_STORAGE":
      return { ...state, ...action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("userState");

      if (stored)
        dispatch({ type: "LOAD_FROM_STORAGE", payload: JSON.parse(stored) });
      // console.log(JSON.parse(stored));
    } catch (err) {
      console.error("Error parsing userState from storage:", err);
    }
  }, []);
  useEffect(() => {
    // Prevent writing before we load from localStorage initially
    const stored = localStorage.getItem("userState");
    if (
      stored &&
      JSON.parse(stored).user?.id === state.user?.id &&
      JSON.parse(stored).cart.length === state.cart.length &&
      JSON.parse(stored).wishlist.length === state.wishlist.length &&
      totalQuantity(state.cart) === totalQuantity(JSON.parse(stored).cart)
    ) {
      // skip if no changes were made
      return;
    }

    if (state.isLoggedIn || state.user) {
      // console.log("Auto-saving user state:", state);
      localStorage.setItem("userState", JSON.stringify(state));
    }
  }, [state]);

  // async function storeUserState() {
  //   console.log("state: ", state);

  //   localStorage.setItem("userState", JSON.stringify(state));
  //   console.log("user state saved");
  // }

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
