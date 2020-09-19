import React,{createContext, useContext, useReducer} from "react";

//Prepare Data layer
export const StateContext = createContext();

// Wrap our app and provides data layer
export const StateProvider = ({reducer, initialState, children}) => (
    // eslint-disable-next-line react-hooks/rules-of-hooks
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information from the data layer
export const useStateValue = () => useContext(StateContext)