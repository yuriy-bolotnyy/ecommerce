import React, {useContext, useState, useEffect} from "react"
import { Context } from "../Context"

function CartItem({item}) {
    const {removeImageFromCart} = useContext(Context)
    // const [hoverOverTrash, setHoverOverTrash] = useState[false]
    const [hoverOverTrash, sethoverOverTrash] = useState(false)

    // Filled trash icon to use when hovering:
    // <i className="ri-delete-bin-fill"></i>

    // Empty trash icon to use when NOT hovering:
    // <i className="ri-delete-bin-line"></i>

    useEffect(() => {
        console.log(`hoverOver Trash: ${hoverOverTrash}`)
    }, [hoverOverTrash])

    const trashIconClass = hoverOverTrash ? 'ri-delete-bin-fill ri-3x' 
                                          : 'ri-delete-bin-line'

    return (
        <div className="cart-item">
            <i className={trashIconClass}
                // onClick={() => removeImageFromCart(item)} 
                onMouseEnter={() => sethoverOverTrash(true)}
                onMouseLeave={() => sethoverOverTrash(false)}
            >
            </i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem
