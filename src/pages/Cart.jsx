import React, {useContext} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems, clearCart} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const itemPrice = 5.99;
    // const total = cartItems.reduce((accumulator, it) => accumulator + it.price, 0)
    const total = cartItems.length * itemPrice

    // document.querySelector('button').textContent
    // const placeOrderBtn = document.querySelector('button')

    const placeOrder = () => {
        document.querySelector('button').textContent = "Ordering ..."
        setTimeout(() => {
            console.log('Order placed')
            clearCart()
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {total}</p>
            <div className="order-button">
                {cartItems.length > 0 && <button onClick={placeOrder}>Place Order</button>}
            </div>
        </main>
    )
}

export default Cart 
