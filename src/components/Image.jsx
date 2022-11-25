import React, {useState, useContext} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"

export default function Image({img, className}) {
    const {toggleFavorite, addImageToCart} = useContext(Context)
    const [hovered, setHovered] = useState(false)

    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    const cartIcon = hovered && 
        <i className="ri-add-circle-line cart" onClick={() => addImageToCart(img)}></i>

    console.log(`Image id ${img.id} | Hovered: ${hovered} | isFavorite: ${img.isFavorite}`)

    return (
        <div className={`${className} image-container`}>
            <img 
                src={img.url} 
                alt={img.url} 
                className="image-grid" 
                onMouseOver={() => {setHovered(true); event.preventDefault()}} 
                onMouseLeave={() => {setHovered(false); event.preventDefault()}} 
            />
            {heartIcon()}
            {cartIcon}
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
