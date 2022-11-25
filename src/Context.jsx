import React, {Component, useEffect, useState} from "react"

const Context = React.createContext()

const URL = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

const ContextProvider = ({children}) => {
    const [allPhotos, setAllPhotos] = useState([])

    async function fetchAllPhotosJSON() {
        const response = await fetch(URL);
        const allPhotos = await response.json();
        return allPhotos;
    }

    useEffect(() => {
        // on ComponentDidMount
        fetchAllPhotosJSON().then(fetchedallPhotos => {
            console.log("Fetch done.")
            setAllPhotos(fetchedallPhotos)
            console.log("Fetched data saved to state.")
        }) 
    }, []);

    useEffect(() => {
        // console.log(allPhotos)
    }, [allPhotos])

    const toggleFavorite = (id) => {
        console.log(`Toggle favorite for id ${id}`)

        setAllPhotos(prevPhotos => prevPhotos.map(photo => (
            photo.id === id ?
                {...photo, isFavorite: !photo.isFavorite} 
                :photo)
        ))
    }

    return (
        <Context.Provider value={{allPhotos, toggleFavorite}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context }
