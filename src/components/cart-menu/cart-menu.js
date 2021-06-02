import React from 'react'
import CustomButton from '../custombutton/custombutton'
import CartItem from '../cart-item/cart-item'
import { connect } from 'react-redux'

import './cart-menu.styles.scss'

const CartMenu = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems,
})

export default connect(mapStateToProps)(CartMenu)
