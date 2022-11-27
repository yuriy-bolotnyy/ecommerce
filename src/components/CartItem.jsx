import React, {useContext, useState, useEffect} from "react"
import { Context } from "../Context"
import useHover from "../hooks/useHover"

function CartItem({item}) {
    const {removeImageFromCart} = useContext(Context)
    // const [hoverOverTrash, setHoverOverTrash] = useState[false]
    const [hovered, setHovered] = useState(false)
    // const [hovered, ref] = useHover()

    // Filled trash icon to use when hovering:
    // <i className="ri-delete-bin-fill"></i>

    // Empty trash icon to use when NOT hovering:
    // <i className="ri-delete-bin-line"></i>

    useEffect(() => {
        console.log(`hoverOver Trash: ${hovered}`)
    }, [hovered])

    const trashIconClass = hovered ? 'ri-delete-bin-fill ri-3x' 
                                          : 'ri-delete-bin-line'

    return (
        <div className="cart-item">
            <i className={trashIconClass}
                onClick={() => removeImageFromCart(item)} 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                // ref={ref}
            >
            </i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem
