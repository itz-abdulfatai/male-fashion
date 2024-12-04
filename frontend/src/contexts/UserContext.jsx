import { createContext } from "react"

const UserContext = createContext()

const initialState = {
    user: null,
    isAuthenticated: false,

  };

  function reducer(state, action) {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          user: action.payload, // Update the user data
          isAuthenticated: true,
        };
      case "LOGOUT":
        return {
          ...state,
          user: null,
          isAuthenticated: false,
        };
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
  

export function UserContextProvider({children}) {

}



export default UserContext