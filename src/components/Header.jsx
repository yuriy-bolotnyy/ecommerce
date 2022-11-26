import React, {useContext} from "react"
import {Link} from "react-router-dom"
import { Context } from "../Context"

function Header() {
    const {cartItems} = useContext(Context)

    // Full class name to use WHEN ITEMS IN CART:
    // "ri-shopping-cart-fill ri-fw ri-2x"
    // Full class name to use WHEN CART IS EMPTY:
    // "ri-shopping-cart-line ri-fw ri-2x"
    const cartBaseClass = cartItems.length > 0 ? 'ri-shopping-cart-fill' : 'ri-shopping-cart-line'

    return (
            <header>
                <Link to="/">
                    <h2>Pic Some</h2>
                </Link>
                
                <Link to="/cart">
                    <i className={`${cartBaseClass} ri-fw ri-2x`}></i>
                </Link>
                
            </header>
    )
}

export default Header
