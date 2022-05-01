import React, {createContext, useContext, useReducer} from "react";

//preparing data layer
export const StateContext = createContext();
 
//wrap our app and provide dat layer
export const StateProvider=({reducer, initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
        </StateContext.Provider>
);
//pull information from datalayer-*
export const useStateValue=()=> useContext(StateContext);