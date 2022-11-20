import React, {Component} from "react"

const {Provider, Consumer} = React.createContext()

const ContextProvider = ({children}) => {
    const [allPhotos, setAllPhotos] = React.useState([])

    const updatePhotos = (photos) => setAllPhotos(photos)

    return (
        <Provider value={{allPhotos, updatePhotos}}>
            {children}
        </Provider>
    )
}

export {ContextProvider, Consumer as ContextConsumer}
