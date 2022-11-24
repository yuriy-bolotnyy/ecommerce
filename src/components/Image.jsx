import React, {useState, useContext} from "react"
import {Context} from "../Context"

export default function Image({img, className}) {
    const {toggleFavorite} = useContext(Context)

    const [hovered, setHovered] = useState(false)

    const favoriteIcon = (hovered|img.isFavorite) && <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
    const heartIcon = hovered && <i className="ri-add-circle-line cart"></i>

    {() => setHovered(true)} 

    console.log(`Image id ${img.id} | Hovered: ${hovered} | isFavorite: ${img.isFavorite}`)

    return (
        <div className={`${className} image-container`}>
            <img 
                src={img.url} 
                alt={img.url} 
                className="image-grid" 
                onMouseEnter={() => {setHovered(true); event.preventDefault()}} 
                onMouseLeave={() => {setHovered(false); event.preventDefault()}} 
            />
            {favoriteIcon}
            {heartIcon}
        </div>
    )
}
