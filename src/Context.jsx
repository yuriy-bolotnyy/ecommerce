import React, {Component, useEffect, useState} from "react"

const {Provider, Consumer} = React.createContext()

const URL = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

const ContextProvider = ({children}) => {
    const [allPhotos, setAllPhotos] = useState([])

    const updatePhotos = (photos) => setAllPhotos(photos)

    async function fetchAllPhotosJSON() {
        const response = await fetch(URL);
        const allPhotos = await response.json();
        return allPhotos;
    }

    useEffect(() => {
        // on ComponentDidMount

        // fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        //     .then(response => response.json())
        //     .then(data => setAllPhotos(data))

        fetchAllPhotosJSON().then(fetchedallPhotos => {
            console.log("Fetch done.")
            setAllPhotos(fetchedallPhotos)
            console.log("Fetched data saved to state.")
        }) 

    }, []);

    useEffect(() => {
        // console.log(allPhotos)
    }, [allPhotos])

    return (
        <Provider value={{allPhotos}}>
            {children}
        </Provider>
    )
}

export {ContextProvider, Consumer as ContextConsumer}
