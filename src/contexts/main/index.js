import React, { useReducer, useContext } from "react";
import ContextDevTool from 'react-context-devtool';
import reducer from "./reducer";
import { generateState } from "./utils";

const StateContext = React.createContext();
const DispatchContext = React.createContext();

export const useContextState = () => useContext(StateContext);
export const useContextDispatch = () => useContext(DispatchContext);
export const MainContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, generateState());

    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                <ContextDevTool context={DispatchContext} id="uniqContextId" displayName="Context Display Name" />
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
}