import React, {useContext, useRef} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems, clearCart} = useContext(Context)
    const orderButtonRef = useRef(null)
    const cartTitleRef = useRef(null)

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const itemPrice = 5.99;
    // const total = cartItems.reduce((accumulator, it) => accumulator + it.price, 0)
    const total = cartItems.length * itemPrice

    // document.querySelector('button').textContent
    // const placeOrderBtn = document.querySelector('button')

    const placeOrder = () => {
        cartTitleRef.current.textContent = "Ordering ..."

        orderButtonRef.current.disabled = true
        orderButtonRef.current.innerText = "Ordering ..."
        
        setTimeout(() => {
            console.log('Order placed')
            cartTitleRef.current.textContent = "Order placed"
            clearCart()
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1 ref={cartTitleRef}>
                {cartItems.length > 0 ? 'Check out' : 'No items selected yet'}
            </h1>
            {cartItemElements}
            {cartItems.length > 0 
                 && <p className="total-cost">Total: {total}</p>}
            <div className="order-button">
                {cartItems.length > 0 
                 && <button onClick={placeOrder} ref={orderButtonRef}>Place Order</button>}
            </div>
        </main>
    )
}

export default Cart 
