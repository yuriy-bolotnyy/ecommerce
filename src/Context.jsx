import React, {Component, useEffect, useState} from "react"

const Context = React.createContext()

const URL = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

const ContextProvider = ({children}) => {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

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
        // console.log(`${cartItems.length} items in Cart: ${JSON.stringify(cartItems)}`)
        console.log(`${cartItems.length} items in Cart with Id: ${JSON.stringify(cartItems.map(item => item.id))}`)
    }, [cartItems])

    const toggleFavorite = (id) => {
        console.log(`Toggle favorite for id ${id}`)

        setAllPhotos(prevPhotos => prevPhotos.map(photo => (
            photo.id === id ?
                {...photo, isFavorite: !photo.isFavorite} 
                :photo)
        ))
    }

    const addImageToCart = (newItem) => {
        console.log(`====>>>>> Adding image id ${newItem.id} to the cart`)
        // console.log(`cartItems before: ${JSON.stringify(cartItems)}`)
        // setCartItems(prevItems => prevItems.push(img))
        setCartItems(prevItems => [...prevItems, newItem])
        const addedImage = cartItems.filter(item => item.id === newItem.id)
        addedImage && console.log(`image id ${newItem.id} has been added to the cart`)
        // console.log(`cartItems after: ${JSON.stringify(cartItems)}`)
    }

    return (
        <Context.Provider value={{allPhotos, toggleFavorite, addImageToCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context }
