import React, { useReducer, useContext } from "react";
import reducer from "./reducer";

const StateContext = React.createContext();
const DispatchContext = React.createContext();

export const useContextState = () => useContext(StateContext);
export const useContextDispatch = () => useContext(DispatchContext);
export const MainContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
}