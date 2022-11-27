import React, {useState, useContext, useEffect} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"

export default function Image({className, img}) {
    const {toggleFavorite, addImageToCart, removeImageFromCart, cartItems} = useContext(Context)
    // const [hovered, setHovered] = useState(false)
    const [hovered, ref] = useHover()
    
    // useEffect(() => {
    //     console.log(`id ${img.id} hoverd: ${hovered}`)
    // }, [hovered])

    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeImageFromCart(img)}></i>
        } else if(hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addImageToCart(img)}></i>
        }
    }

    const handleCartButtonClick = () => {
        console.log(`Cart button clicked for image ${imageInCart()} in Cart...`)
        if (imageInCart()) {
            console.log('Calling removeItemFromCart ...')
            removeImageFromCart(img)
        } else {
            console.log('Calling AddItemToCart ...')
            addImageToCart(img)
        }
        e.preventDefault()
    }

    const imageInCart = () => cartItems.some(item => item.id === img.id)

    // function cartIcon() {
    //     const alreadyInCart = cartItems.some(item => item.id === img.id)
    //     if(alreadyInCart) {
    //         return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
    //     } else if(hovered) {
    //         return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
    //     }
    // }

    return (
        <div 
            className={`${className} image-container`}
            ref={ref}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,

    img: PropTypes.exact({
        id: PropTypes.string,
        url: PropTypes.string,
        isFavorite: PropTypes.bool
    })
}
