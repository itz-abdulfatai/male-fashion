import { createContext, useReducer } from "react";

const UserContext = createContext();

const initialState = {
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload, // Update the user data
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// eslint-disable-next-line react/prop-types
export function UserContextProvider({ children }) {
  const [userState, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ userState, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
