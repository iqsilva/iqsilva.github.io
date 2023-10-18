import { createContext, useReducer } from "react";

export const ThemeContext = createContext<any>('');

const INITIAL_STATE = { darkMode: false };

const themeReducer = (state:any, action:any) => {
  switch (action.type) {
    case "TOGGLE":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};


