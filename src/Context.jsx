import React, {Component, useEffect, useState} from "react"

const {Provider, Consumer} = React.createContext()

const ContextProvider = ({children}) => {
    const [allPhotos, setAllPhotos] = useState([])

    const updatePhotos = (photos) => setAllPhotos(photos)

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(response => response.json())
            .then(data => setAllPhotos(data))
    }, []);

    useEffect(() => {
        console.log(allPhotos)
    }, [allPhotos])

    return (
        <Provider value={{allPhotos, updatePhotos}}>
            {children}
        </Provider>
    )
}

export {ContextProvider, Consumer as ContextConsumer}
