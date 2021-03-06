
import React from "react"

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();
const initialState = {
    stickyEmail: true
}

function reducer(state, action) {
    switch (action.type) {
        case 'OFF_STICKY_EMAIL':
            return { ...state, stickyEmail: action.payload }
        default:
            throw new Error('Bad action Type');
    }
}
const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return <GlobalStateContext.Provider value={state}>
        <GlobalDispatchContext.Provider value={dispatch}>{children}
        </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
}

export default GlobalContextProvider;