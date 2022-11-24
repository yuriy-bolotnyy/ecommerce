import React, {useState} from "react"

export default function Image({img, className}) {

    const [hovered, setHovered] = useState(false)

    const favoriteIcon = hovered && <i className="ri-heart-line favorite"></i>
    const heartIcon = hovered && <i className="ri-add-circle-line cart"></i>

    const mouseEnter = () => {
        setHovered(true)
    }

    const mouseLeave = () => {
        setHovered(false)
    }

    console.log(`Image id ${img.id} Hovered: ${hovered}`)

    return (
        <div className={`${className} image-container`}>
            <img src={img.url} alt={img.url} className="image-grid" onMouseOver={mouseEnter} onMouseLeave={mouseLeave}/>
            {favoriteIcon}
            {heartIcon}
        </div>
    )
}
