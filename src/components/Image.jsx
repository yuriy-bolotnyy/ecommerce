import React, {useState, useContext, useEffect} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"

export default function Image({img, className}) {
    const {toggleFavorite, addImageToCart, removeImageFromCart, cartItems} = useContext(Context)
    const [hovered, setHovered] = useState(false)
    
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

    const handleCartButtonClick = (e) => {
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

    const cartIcon = () => {
        // console.log(`${cartItems.length} items in Cart`)
        // let imgInCart = false
        // const imgInCart = cartItems.some(item => item.id === img.id)
        // console.log(`item in card => ${JSON.stringify(imgInCart)}`)
        let icon = ''
        if (imageInCart()) {
            // console.log(`img id ${img.id} is in Cart`)
            icon = "ri-shopping-cart-fill"
            // return <i className="ri-shopping-cart-fill cart" onClick={handleCartButtonClick}></i>
        }
        else if (hovered) {
            icon = "ri-add-circle-line"
            // return <i className="ri-add-circle-line cart" onClick={handleCartButtonClick}></i>
        }

        return <i className={`${icon} cart`} onClick={handleCartButtonClick}></i>
        
    }
    // console.log(`Image id ${img.id} | Hovered: ${hovered} | isFavorite: ${img.isFavorite}`)

    return (
        <div className={`${className} image-container`}>
            <img 
                src={img.url} 
                alt={img.url} 
                className="image-grid" 
                onMouseEnter={() => {setHovered(true); event.preventDefault()}} 
                onMouseLeave={() => {setHovered(false); event.preventDefault()}} 
            />
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
