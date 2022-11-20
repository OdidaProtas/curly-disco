import { createContext, useContext, useReducer } from "react";

const initialState = {
  dispatch: () => {},
  models: [
    {
      name: "",
      fields: [
        {
          name: "",
        },
      ],
    },
  ],
  relationships: [], // {type://}
  step: 1,
  maxStep: 4,
};

const StateContext = createContext({ ...initialState });

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateValue = () => useContext(StateContext);
export const useDispatch = () => {
  const { dispatch } = useContext(StateContext);
  return dispatch;
};

var reducer = (state, action) => {
  const { type, name, context, opts, payload } = action;

  switch (type) {
    case "handle_project_change": {
      return { ...state, [name]: payload };
    }
    case "step": {
      return { ...state, step: payload };
    }
    case "reset": {
      return { ...initialState };
    }
    case "add_model": {
      return { ...state, models: [...(state?.models ?? []), payload] };
    }
    case "mutate_models": {
      return { ...state, models: payload };
    }
    case 'add_relationship':{
      return {...state, relationships:  [...(state?.relationships ?? []), payload]}
    }
    default:
      return { ...state };
  }
};
