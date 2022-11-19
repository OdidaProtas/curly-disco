import { createContext, useContext, useReducer } from "react";

const initialState = {
  dispatch: () => {},
};

const StateContext = createContext({});

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateValue = () => useContext(StateContext);
export const useDispatch = () => useContext(StateContext).dispatch;

var reducer = (action, state = {}) => {};
