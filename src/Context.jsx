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

    // const itemInCart = (lookup) => {
    //     // return cartItems.some(item => item.id === lookup.id)
    //     const filteredItems = cartItems.filter(item => (item.id === lookup.id))
    //     console.log(`::::: Cart items filtered by id ${lookup.id}: ${filteredItems}`)
    //     return cartItems.filter(item => item.id === lookup.id).length > 0 ? true : false
    // }

    // function isImageInCart(lookup) {
    //     const lookupRes = cartItems.filter(item => item.id === lookup.id)
    //     lookupRes? console.log(`:-:-:Image id ${lookup.id} is in Cart already: ${JSON.stringify(lookup)}`)
    //         : console.log(`:-:-:Image id ${lookup.id} is NOT in Cart yet: ${JSON.stringify(lookup)}`)
    //     return lookupRes
    // }

    // function isImageInCart(lookup) {
    //     const lookupRes = cartItems.filter(item => item.id === lookup.id)
    //     console.log(`lookup in ${cartItems.length} items: ${lookupRes}`)
    //     lookupRes.length > 0 ? console.log(`:-:-:Image id ${lookup.id} is in Cart`)
    //         : console.log(`:-:-:Image id ${lookup.id} is NOT in Cart`)
    //     return lookupRes.length > 0
    // }

    const addImageToCart = (newItem) => {
        // const imageInCartAlready = itemInCart(newItem)
        // console.log(`Image id ${newItem.id} is in Cart?: ${isImageInCart(newItem)}`)
        console.log(`====>>>>> Adding image id ${newItem.id} to the cart`)
        // console.log(`cartItems before: ${JSON.stringify(cartItems)}`)
        // setCartItems(prevItems => prevItems.push(img))
        setCartItems(prevItems => [...prevItems, newItem])
        console.log(`=> Cart right after setState: ${JSON.stringify(cartItems)}`)
        // console.log("start....")
        setTimeout(() => {  console.log(`after 2 sec wait => Cart: ${JSON.stringify(cartItems)}`); }, 2);
        // setTimeout(console.log(`= 10 sec > Cart: ${JSON.stringify(cartItems)}`), 10000)
        // console.log("end....")
        // const addedImage = cartItems.filter(item => item.id === newItem.id).length > 0
        // console.log(`----> added image: ${JSON.stringify(addedImage)}`)
        // console.log(`Image id ${newItem.id} is in Cart now?: ${itemInCart(newItem)}`)
        // addedImage && console.log(`image id ${newItem.id} has been added to the cart ---> ${JSON.stringify(newItem)}`)
        // console.log(`cartItems after: ${JSON.stringify(cartItems)}`)
        // console.log(`Image id ${newItem.id} is in Cart?: ${isImageInCart(newItem)}`)
    }

    const removeImageFromCart = (itemToRemove) => {
        console.log(`====>>>>> Removing image id ${itemToRemove.id} from the cart`)
        // console.log(`cartItems before: ${JSON.stringify(cartItems)}`)
        // setCartItems(prevItems => prevItems.push(img))
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemToRemove.id))
        // console.log(`cartItems after: ${JSON.stringify(cartItems)}`)
    }

    const clearCart = () => setCartItems([])

    // {toggleFavorite, addImageToCart, cartItems}

    return (
        <Context.Provider value={{allPhotos, toggleFavorite, addImageToCart, removeImageFromCart, clearCart, cartItems}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context }
