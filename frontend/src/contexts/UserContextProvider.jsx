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

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload, isLoggedIn: true };

    case "LOGOUT":
      return { ...initialState };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: state.cart.includes(action.payload)
          ? state.cart
          : [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((id) => id !== action.payload),
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.includes(action.payload)
          ? state.wishlist
          : [...state.wishlist, action.payload],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((id) => id !== action.payload),
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
      console.log(JSON.parse(stored));
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
      JSON.parse(stored).wishlist.length === state.wishlist.length
    ) {
      // skip if no changes were made
      return;
    }

    if (state.isLoggedIn || state.user) {
      console.log("Auto-saving user state:", state);
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
