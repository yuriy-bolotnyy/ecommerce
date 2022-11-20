import React from "react"

const {Provider, Consumer} = React.createContext()

const ContextProvider = ({children}) => {
    return (
        <Provider value="">
            {children}
        </Provider>
    )
}

export {ContextProvider, Consumer as ContextConsumer}
